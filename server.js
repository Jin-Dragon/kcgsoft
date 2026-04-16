const http = require('http');
const fs = require('fs');
const path = require('path');
const net = require('net');


loadEnvFile(path.join(__dirname, '.env.local'));

const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.cafe24.com';
const SMTP_PORT = Number.parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || 'wonderonservice@wonderon.co.kr';
const SMTP_PASS = process.env.SMTP_PASS || '';
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || '원더온서비스';
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;

if (!SMTP_PASS) {
  console.warn('SMTP_PASS is missing. Contact form submissions will fail until it is configured.');
}

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) return;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^"|"$/g, '');
    if (!process.env[key]) {
      process.env[key] = value;
    }
  });
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body)
  });
  res.end(body);
}

function getContentType(filePath) {
  return MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function safeJoin(root, requestPath) {
  const normalized = path.normalize(requestPath).replace(/^([/\\])+/, '');
  const resolved = path.resolve(root, normalized);
  const relative = path.relative(root, resolved);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    return null;
  }
  return resolved;
}

function wrapBase64(text) {
  const encoded = Buffer.from(text, 'utf8').toString('base64');
  return encoded.match(/.{1,76}/g)?.join('\r\n') || '';
}

function encodeHeader(value) {
  if (/^[\x20-\x7E]+$/.test(value)) {
    return value;
  }
  return `=?UTF-8?B?${Buffer.from(value, 'utf8').toString('base64')}?=`;
}

function createSmtpSession(socket) {
  let buffer = '';
  let pending = null;
  const queuedResponses = [];
  let responseLines = [];
  const onData = (chunk) => {
    buffer += chunk.toString('utf8');
    let newlineIndex = buffer.indexOf('\n');

    while (newlineIndex >= 0) {
      const rawLine = buffer.slice(0, newlineIndex + 1);
      buffer = buffer.slice(newlineIndex + 1);
      const line = rawLine.replace(/\r?\n$/, '');

      if (line.length > 0) {
        responseLines.push(line);
        if (/^\d{3} /.test(line)) {
          const completed = responseLines;
          responseLines = [];
          if (pending) {
            settle(null, completed);
          } else {
            queuedResponses.push(completed);
          }
        }
      }

      newlineIndex = buffer.indexOf('\n');
    }
  };

  function settle(error, lines) {
    if (!pending) return;
    const { resolve, reject } = pending;
    pending = null;
    if (error) {
      reject(error);
      return;
    }
    resolve(lines);
  }

  socket.on('data', onData);

  socket.on('error', (error) => {
    console.error('[smtp] socket error:', error?.stack || error?.message || error);
    settle(error);
  });

  socket.on('close', () => {
    console.error('[smtp] socket closed');
    settle(new Error('SMTP connection closed unexpectedly.'));
  });

  function readResponse() {
    return new Promise((resolve, reject) => {
      if (queuedResponses.length > 0) {
        resolve(queuedResponses.shift());
        return;
      }
      pending = { resolve, reject };
    });
  }

  async function command(text) {
    const response = readResponse();
    socket.write(`${text}\r\n`);
    return response;
  }

  function writeRaw(text) {
    socket.write(text);
  }

  function closeListeners() {
    socket.removeListener('data', onData);
    socket.removeAllListeners('error');
    socket.removeAllListeners('close');
  }

  return {
    command,
    readResponse,
    writeRaw,
    socket,
    closeListeners
  };
}

function parseCode(lines) {
  const lastLine = lines[lines.length - 1] || '';
  return Number.parseInt(lastLine.slice(0, 3), 10);
}

function assertExpected(lines, expectedCodes, label) {
  const code = parseCode(lines);
  if (!expectedCodes.includes(code)) {
    throw new Error(`${label} failed: ${lines[lines.length - 1] || 'unknown response'}`);
  }
}

function getResponseSummary(lines) {
  return lines[lines.length - 1] || 'unknown response';
}

function getEhloCapabilities(lines) {
  return lines
    .map((line) => line.slice(4).trim())
    .filter(Boolean)
    .map((line) => line.toUpperCase());
}

async function connectPlain(host, port) {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host, port }, () => resolve(socket));
    socket.on('error', reject);
  });
}

async function completeSmtpConversation(session, data) {
  const ehlo = await session.command(`EHLO ${process.env.SMTP_EHLO || 'kcgsoft.local'}`);
  assertExpected(ehlo, [250], 'EHLO');
  console.log('[smtp] ehlo:', ehlo.join(' | '));

  const authPayload = Buffer.from(`\u0000${SMTP_USER}\u0000${SMTP_PASS}`, 'utf8').toString('base64');

  try {
    const authPlain = await session.command(`AUTH PLAIN ${authPayload}`);
    assertExpected(authPlain, [235], 'AUTH PLAIN');
    console.log('[smtp] auth plain:', authPlain.join(' | '));
  } catch (plainError) {
    console.error('[smtp] auth plain failed:', plainError?.stack || plainError?.message || plainError);

    const authLogin = await session.command('AUTH LOGIN');
    assertExpected(authLogin, [334], 'AUTH LOGIN');
    console.log('[smtp] auth login:', authLogin.join(' | '));

    const userResponse = await session.command(Buffer.from(SMTP_USER, 'utf8').toString('base64'));
    assertExpected(userResponse, [334], 'SMTP username');
    console.log('[smtp] auth login user:', userResponse.join(' | '));

    const passResponse = await session.command(Buffer.from(SMTP_PASS, 'utf8').toString('base64'));
    assertExpected(passResponse, [235], 'SMTP password');
    console.log('[smtp] auth login pass:', passResponse.join(' | '));
  }

  const mailFrom = await session.command(`MAIL FROM:<${SMTP_USER}>`);
  assertExpected(mailFrom, [250], 'MAIL FROM');
  console.log('[smtp] mail from:', mailFrom.join(' | '));

  const rcptTo = await session.command(`RCPT TO:<${MAIL_TO}>`);
  assertExpected(rcptTo, [250, 251], 'RCPT TO');
  console.log('[smtp] rcpt to:', rcptTo.join(' | '));

  const dataStart = await session.command('DATA');
  assertExpected(dataStart, [354], 'DATA');
  console.log('[smtp] data:', dataStart.join(' | '));

  session.writeRaw(`${buildMessage(data)}\r\n.\r\n`);
  const dataDone = await session.readResponse();
  assertExpected(dataDone, [250], 'SMTP message body');
  console.log('[smtp] data done:', dataDone.join(' | '));

  const quit = await session.command('QUIT');
  assertExpected(quit, [221], 'QUIT');
  console.log('[smtp] quit:', quit.join(' | '));
}

function buildMessage(data) {
  const lines = [
    'KCGsoft 홈페이지 문의가 도착했습니다.',
    '',
    `이름: ${data.name}`,
    `회사명: ${data.company || '-'}`,
    `연락처: ${data.phone || '-'}`,
    `이메일: ${data.email}`,
    `제목: ${data.subject}`,
    '',
    '문의 내용:',
    data.message
  ];

  const body = lines.join('\n');
  const headers = [
    `From: ${encodeHeader(MAIL_FROM_NAME)} <${SMTP_USER}>`,
    `To: ${MAIL_TO}`,
    `Reply-To: ${data.email}`,
    `Subject: ${encodeHeader(`[KCGsoft 문의] ${data.subject}`)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    wrapBase64(body)
  ];

  return headers.join('\r\n');
}

async function sendMail(data) {
  if (!SMTP_PASS) {
    throw new Error('SMTP password is not configured.');
  }

  const smtpPort = Number.isFinite(SMTP_PORT) ? SMTP_PORT : 587;
  console.log('[smtp] connecting without STARTTLS to', SMTP_HOST, smtpPort);

  const socket = await connectPlain(SMTP_HOST, smtpPort);
  const session = createSmtpSession(socket);

  const greeting = await session.readResponse();
  assertExpected(greeting, [220], 'SMTP greeting');
  console.log('[smtp] greeting:', greeting.join(' | '));

  await completeSmtpConversation(session, data);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => {
      chunks.push(chunk);
      if (Buffer.concat(chunks).length > 1_000_000) {
        reject(new Error('Request body too large.'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        const body = Buffer.concat(chunks).toString('utf8');
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function serveFile(res, filePath) {
  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': getContentType(filePath),
    'Content-Length': stat.size
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'POST' && req.url === '/api/contact') {
      const body = await readRequestBody(req);
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim();
      const subject = String(body.subject || '').trim();
      const message = String(body.message || '').trim();
      const company = String(body.company || '').trim();
      const phone = String(body.phone || '').trim();

      if (!name || !email || !subject || !message) {
        sendJson(res, 400, { error: '필수 항목을 입력해 주세요.' });
        return;
      }

      await sendMail({ name, email, subject, message, company, phone });
      sendJson(res, 200, { ok: true });
      return;
    }

    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
    const filePath = safeJoin(__dirname, pathname);

    if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }

    serveFile(res, filePath);
  } catch (error) {
    console.error('[contact] failed:', error?.stack || error?.message || error);
    sendJson(res, 500, { error: error instanceof Error ? error.message : 'Server error' });
  }
});

server.listen(PORT, () => {
  console.log(`KCGsoft homepage server running on http://localhost:${PORT}`);
});
