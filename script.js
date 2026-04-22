const serviceData = {
  'wonder-shuttle': {
    title: 'WONDER SHUTTLE',
    accent: '#32b154',
    pages: [
      { nav: '기본', eyebrow: '기본', title: '버스 운영 정보를 한 화면에서 확인합니다.', text: '실시간 위치, 운행 상태, 탑승 흐름, 배차 정보를 하나로 연결해 보여줍니다.', list: ['실시간 위치', '운행 상태', '배차 및 탑승'] },
      { nav: '관제', eyebrow: '관제', title: '관제팀 중심 화면으로 구성합니다.', text: '현장에서 자주 확인하는 요소를 중심으로 배치해 빠른 판단을 지원합니다.', list: ['노선 관리', '운행 관제', '사용 현황'] },
      { nav: '기록', eyebrow: '기록', title: '운영 기록이 의사결정으로 이어집니다.', text: '운행 이력과 탑승 기록을 연결해 운영 흐름을 안정적으로 관리합니다.', list: ['탑승 로그', '운행 로그', '데이터 누적'] }
    ]
  },
  'wonder-linx': {
    title: 'WONDER LINX',
    accent: '#2380f1',
    pages: [
      { nav: '기본', eyebrow: '기본', title: '노선 설계를 더 정교하게 만듭니다.', text: '노선 분석과 최적 경로 계산을 중심으로 설계 정확도를 높입니다.', list: ['노선 분석', '경로 최적화', '운행시간 예측'] },
      { nav: '비교', eyebrow: '비교', title: '변경안을 빠르게 비교합니다.', text: '기존 노선과 변경 노선을 동시에 검토해 의사결정을 단순화합니다.', list: ['노선 수정', '경로 비교', '변경 검토'] },
      { nav: '예측', eyebrow: '예측', title: '출발 전 운행시간을 확인합니다.', text: '상황별 계산 결과를 제공해 현장 대응 속도를 높입니다.', list: ['시나리오 검토', '시간 추정', '판단 지원'] }
    ]
  },
  'wonder-hydro': {
    title: 'WONDER HYDRO',
    accent: '#1b3479',
    pages: [
      { nav: '기본', eyebrow: '기본', title: '수소 충전 운영을 한 화면에서 관리합니다.', text: '충전 상태와 진행 흐름을 명확하게 확인할 수 있도록 구성했습니다.', list: ['충전 관제', '상태 확인', '이력 추적'] },
      { nav: '현장', eyebrow: '현장', title: '현장 운영 흐름을 연결합니다.', text: '분산된 단계와 데이터를 묶어 충전소 운영의 일관성을 높입니다.', list: ['업무 흐름 정렬', '현장 모니터링', '통합 제어'] },
      { nav: '기록', eyebrow: '기록', title: '운영 이력을 지속적으로 관리합니다.', text: '충전 기록과 상태 로그를 보관해 사후 점검과 관리에 활용합니다.', list: ['이력 관리', '운영 로그', '상태 점검'] }
    ]
  },
  'wonder-fms': {
    title: 'WONDER FMS',
    accent: '#efbb45',
    pages: [
      { nav: '기본', eyebrow: '기본', title: '전세버스 운영을 하나의 흐름으로 정리합니다.', text: '운영, 배차, 정산 업무를 하나의 ERP 구조로 연결해 관리합니다.', list: ['운영 관리', '배차 관리', '정산 흐름'] },
      { nav: '업무', eyebrow: '업무', title: '실무 중심으로 화면을 구성합니다.', text: '일상적으로 사용하는 핵심 기능 위주로 빠르게 처리할 수 있게 설계했습니다.', list: ['실무 중심 구조', '통합 워크플로우', '명확한 기능 구성'] },
      { nav: '정산', eyebrow: '정산', title: '배차와 정산을 자연스럽게 연결합니다.', text: '배차 데이터가 정산으로 이어져 운영 전 과정을 한 번에 확인할 수 있습니다.', list: ['배차 데이터', '정산 정보', '회계 연동'] }
    ]
  },
  'catchloc': {
    title: 'CATCHLOC',
    accent: '#e7437b',
    pages: [
      { nav: '기본', eyebrow: '기본', title: 'GPS 위치 관제를 통합 제공합니다.', text: '차량과 자산 위치를 실시간으로 확인하고 운영 흐름을 한눈에 파악합니다.', list: ['실시간 위치 추적', '상태 모니터링', '이동 이력'] },
      { nav: '추적', eyebrow: '추적', title: '위치 데이터를 흐름으로 관리합니다.', text: '단순 표시를 넘어 이동 과정 전체를 추적할 수 있도록 구성했습니다.', list: ['추적 흐름', '위치 로그', '상태 인지'] },
      { nav: '기록', eyebrow: '기록', title: '이동 기록을 안정적으로 보관합니다.', text: '차량과 자산의 이동 이력을 누적해 운영 점검에 활용합니다.', list: ['이동 기록', '이력 조회', '운영 추적'] }
    ]
  }
};

const overlay = document.querySelector('.detail-overlay');
const detailTitle = document.querySelector('#detail-title');
const detailNav = document.querySelector('.detail-nav');
const detailTrack = document.querySelector('.detail-track');
const detailPanel = document.querySelector('.detail-panel');
const closeTargets = document.querySelectorAll('[data-detail-close]');
const openButtons = document.querySelectorAll('[data-detail]');
const contactOverlay = document.querySelector('.contact-overlay');
const contactForm = document.querySelector('[data-contact-form]');
const contactStatus = document.querySelector('[data-contact-status]');
const contactOpenButtons = document.querySelectorAll('[data-contact-open]');
const contactCloseTargets = document.querySelectorAll('[data-contact-close]');
const tickerLinks = Array.from(document.querySelectorAll('.ticker-link'));
const siteHeader = document.querySelector('.site-header');
const serviceNavSticky = document.querySelector('.service-nav-sticky');
const serviceRouteTrack = document.querySelector('.service-route-track');
const serviceRouteBus = document.querySelector('.service-route-bus');
const serviceRouteStops = Array.from(document.querySelectorAll('.service-route-stop'));
const serviceAtlasSection = document.querySelector('.services-section');
const serviceAtlasContainer = document.querySelector('.service-atlas');
const serviceAtlasPreview = document.querySelector('[data-service-preview]');
const serviceAtlasPreviewTag = document.querySelector('.service-atlas-preview-tag');
const serviceAtlasPreviewTitle = document.querySelector('.service-atlas-preview-title');
const serviceAtlasPreviewText = document.querySelector('.service-atlas-preview-text');
const serviceAtlasPreviewBtn = document.querySelector('[data-atlas-detail-open]');
const serviceAtlasPills = document.querySelector('.service-atlas-pills');
const serviceAtlasVisual = document.querySelector('.service-atlas-visual');
const serviceAtlasDetailView = document.querySelector('[data-atlas-detail-view]');
const serviceAtlasDetailNav = document.querySelector('[data-atlas-detail-nav]');
const serviceAtlasDetailTrack = document.querySelector('[data-atlas-detail-track]');
const capabilityOpenCtaBtn = document.querySelector('.capability-open-cta button');

const serviceAtlasOrder = ['wonder-shuttle', 'wonder-linx', 'wonder-hydro', 'wonder-fms', 'catchloc'];

let openedKey = null;
let activePageIndex = 0;
let rafId = 0;
let tickerObserver = null;
let tickerFlashTimer = 0;
let serviceRailRaf = 0;
let serviceRailSnapTimer = 0;
let atlasWheelLock = 0;
let atlasWheelUnlockTimer = 0;
let atlasTransitionTimer = 0;
let lastWheelInServiceSection = false;
let lastServiceSectionWheelAt = 0;
let contactSubmitLock = false;
let detailWheelLock = false;
let detailWheelUnlockTimer = 0;
let routeDragState = null;
let selectedAtlasKey = 'wonder-shuttle';
let selectedAtlasIndex = Math.max(0, serviceAtlasOrder.indexOf(selectedAtlasKey));
let atlasDetailKey = null;
let atlasDetailPageIndex = 0;
let atlasDetailCloseTimer = 0;
let atlasPageFadeTimer = 0;
const SERVICE_SECTION_WHEEL_WINDOW_MS = 140;
const contactApiUrl = window.location.protocol === 'file:'
  ? 'http://localhost:3000/api/contact'
  : new URL('/api/contact', window.location.origin).toString();
const heroSlides = document.querySelectorAll('[data-hero-slide]');
let heroSlideIndex = 0;
let heroSlideTimer = 0;
const tickerAccentMap = {
  'wonder-shuttle': serviceData['wonder-shuttle'].accent,
  'wonder-linx': serviceData['wonder-linx'].accent,
  'wonder-hydro': serviceData['wonder-hydro'].accent,
  'wonder-fms': serviceData['wonder-fms'].accent,
  catchloc: serviceData.catchloc.accent
};
const serviceAtlasMeta = {
  'wonder-linx': {
    tag: '데이터 기반 지능형 노선 설계',
    title: 'WONDER LINX',
    text: '노선 분석, 수정, 최적경로, 예상 운행시간까지 계산해 더 정교한 노선 설계를 돕는 서비스입니다.',
    pills: ['노선 분석', '최적 경로', '운행 시간']
  },
  'wonder-shuttle': {
    tag: '버스 통합 관제 서비스',
    title: 'WONDER SHUTTLE',
    text: '실시간 위치, 노선 운영, 탑승 관리를 하나의 화면에서 확인하는 운영 솔루션입니다.',
    pills: ['실시간 위치', '노선 관리', '탑승 데이터']
  },
  'wonder-hydro': {
    tag: '수소 충전 통합 관리',
    title: 'WONDER HYDRO',
    text: '충전 상태, 이력, 운영 흐름을 한 화면에서 관리하는 프로그램입니다.',
    pills: ['충전 상태', '이력 관리', '현장 운영']
  },
  'wonder-fms': {
    tag: '전세버스 ERP 통합 관리',
    title: 'WONDER FMS',
    text: '운영, 배차, 정산을 하나로 묶어 전세버스 업무를 정리하는 ERP 서비스입니다.',
    pills: ['ERP 통합', '배차 관리', '정산 흐름']
  },
  catchloc: {
    tag: 'GPS 위치 추적 솔루션',
    title: 'CATCHLOC',
    text: '차량과 자산의 위치를 실시간으로 확인하고 이동 이력과 상태를 관리하는 구조입니다.',
    pills: ['GPS 추적', '이동 이력', '상태 관리']
  }
};

const defaultAtlasVisualMarkup = `
  <span class="service-atlas-visual-line"></span>
  <span class="service-atlas-visual-node"></span>
  <span class="service-atlas-visual-node mid"></span>
  <span class="service-atlas-visual-node end"></span>
  <span class="service-atlas-visual-panel"></span>
`;

const wonderFmsVisualMarkup = `
  <div class="fms-visual-top-line" aria-hidden="true"></div>
  <div class="fms-visual-cards">
    <article class="fms-visual-card">
      <span class="fms-card-icon is-collect" aria-hidden="true"></span>
      <h4>01. 데이터 수집</h4>
      <p>전세버스 운영에 필요한 데이터를<br />수집하고 정리합니다.</p>
    </article>
    <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="fms-visual-card">
      <span class="fms-card-icon is-manage" aria-hidden="true"></span>
      <h4>02. 분석 및 관리</h4>
      <p>수집된 데이터를 분석하여 효율적인<br />운영과 관리를 지원합니다.</p>
    </article>
    <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="fms-visual-card">
      <span class="fms-card-icon is-report" aria-hidden="true"></span>
      <h4>03. 보고서 및 활용</h4>
      <p>분석 결과를 보고서로 제공하여<br />의사결정에 활용할 수 있습니다.</p>
    </article>
  </div>
`;

const wonderShuttleVisualMarkup = `
  <div class="shuttle-visual-cards">
    <article class="shuttle-visual-card">
      <span class="shuttle-card-icon is-app" aria-hidden="true"></span>
      <h4>01. 버스전용 앱</h4>
      <p>기사용 앱에서 위치 수신과<br />탑승자 QR 태그를 입력</p>
    </article>
    <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="shuttle-visual-card">
      <span class="shuttle-card-icon is-server" aria-hidden="true"></span>
      <h4>02. 서버 전송</h4>
      <p>위치 기록과 탑승자 정보를<br />서버로 전송 및 저장</p>
    </article>
    <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="shuttle-visual-card">
      <span class="shuttle-card-icon is-ticket" aria-hidden="true"></span>
      <h4>03. 탑승권 발권·스캔</h4>
      <p>윈더셔틀 앱에서 탑승권 발권 후<br />기사용 앱에서 스캔하여 탑승</p>
    </article>
    <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="shuttle-visual-card">
      <span class="shuttle-card-icon is-bus" aria-hidden="true"></span>
      <h4>04. 실시간 버스 확인</h4>
      <p>사용자가 탑승 예정 버스의<br />현재 위치를 실시간 확인</p>
    </article>
  </div>
`;

const wonderLinxVisualMarkup = `
  <div class="linx-visual-cards">
    <article class="linx-visual-card">
      <span class="linx-card-icon is-route" aria-hidden="true"></span>
      <h4>01. 노선 생성·수정</h4>
      <p>신규 노선의 정류장·경로를 생성<br />기존 노선을 유연하게 수정</p>
    </article>
    <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="linx-visual-card">
      <span class="linx-card-icon is-merge" aria-hidden="true"></span>
      <h4>02. 중복 분석·통폐합</h4>
      <p>중복 정류장·경로를 분석하고<br />데이터 기반으로 노선을 통폐합</p>
    </article>
    <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="linx-visual-card">
      <span class="linx-card-icon is-path" aria-hidden="true"></span>
      <h4>03. 최적 경로 탐색</h4>
      <p>정류장·경로 데이터를 바탕으로<br />최적 운행 경로를 탐색</p>
    </article>
    <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="linx-visual-card">
      <span class="linx-card-icon is-time" aria-hidden="true"></span>
      <h4>04. 시간 시뮬레이션</h4>
      <p>새 노선의 예상 소요 시간과<br />운행 흐름을 시뮬레이션</p>
    </article>
  </div>
`;

function updateAtlasVisual(key) {
  if (!serviceAtlasVisual) return;

  if (key === 'wonder-shuttle') {
    serviceAtlasVisual.classList.add('is-shuttle');
    serviceAtlasVisual.classList.remove('is-fms');
    serviceAtlasVisual.classList.remove('is-linx');
    serviceAtlasVisual.innerHTML = wonderShuttleVisualMarkup;
    return;
  }

  if (key === 'wonder-linx') {
    serviceAtlasVisual.classList.add('is-linx');
    serviceAtlasVisual.classList.remove('is-shuttle');
    serviceAtlasVisual.classList.remove('is-fms');
    serviceAtlasVisual.innerHTML = wonderLinxVisualMarkup;
    return;
  }

  if (key === 'wonder-fms') {
    serviceAtlasVisual.classList.add('is-fms');
    serviceAtlasVisual.classList.remove('is-shuttle');
    serviceAtlasVisual.classList.remove('is-linx');
    serviceAtlasVisual.innerHTML = wonderFmsVisualMarkup;
    return;
  }

  serviceAtlasVisual.classList.remove('is-linx');
  serviceAtlasVisual.classList.remove('is-shuttle');
  serviceAtlasVisual.classList.remove('is-fms');
  serviceAtlasVisual.innerHTML = defaultAtlasVisualMarkup;
}

function setHeroSlide(index) {
  if (!heroSlides.length) return;
  heroSlideIndex = index;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === index);
  });
}

function startHeroRotation() {
  if (heroSlides.length < 2) return;
  setHeroSlide(0);
  if (heroSlideTimer) {
    clearInterval(heroSlideTimer);
  }
  heroSlideTimer = window.setInterval(() => {
    const nextIndex = (heroSlideIndex + 1) % heroSlides.length;
    setHeroSlide(nextIndex);
  }, 6000);
}

function syncHeaderOffset() {
  if (!siteHeader) return;
  document.documentElement.style.setProperty('--header-offset', `${siteHeader.offsetHeight}px`);
  if (serviceNavSticky) {
    document.documentElement.style.setProperty('--service-nav-height', `${serviceNavSticky.offsetHeight}px`);
  }
}

function setTickerActive(id) {
  if (!tickerLinks.length) return;
  tickerLinks.forEach((link) => {
    const linkKey = link.dataset.service || link.getAttribute('href')?.slice(1);
    const isActive = linkKey === id;
    link.classList.toggle('is-active', isActive);
    link.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function applyTickerAccents() {
  tickerLinks.forEach((link) => {
    const targetId = link.dataset.service || link.getAttribute('href')?.slice(1);
    const accent = targetId ? tickerAccentMap[targetId] : null;
    if (accent) {
      link.style.setProperty('--ticker-accent', accent);
    }
  });

  serviceRouteStops.forEach((stop) => {
    const targetId = stop.dataset.target;
    const accent = targetId ? tickerAccentMap[targetId] : null;
    if (accent) {
      stop.style.setProperty('--stop-accent', accent);
    }
  });
}

function getAtlasIndex(key) {
  return Math.max(0, serviceAtlasOrder.indexOf(key));
}

function getAtlasKey(index) {
  return serviceAtlasOrder[Math.max(0, Math.min(index, serviceAtlasOrder.length - 1))] || serviceAtlasOrder[0];
}

function syncAtlasRail(key, mode = 'snap') {
  if (!serviceNavSticky || !serviceRouteStops.length) return;

  const index = getAtlasIndex(key);
  const stopPositions = getServiceStopPositions();
  const position = stopPositions[index] ?? 0;
  applyServiceRailState(position, index, mode);
}

function updateAtlasPreview(key, options = {}) {
  const meta = serviceAtlasMeta[key];
  if (!meta || !serviceAtlasPreview) return;
  const syncRail = options.syncRail !== false;
  const animate = options.animate !== false;

  if (atlasTransitionTimer) {
    clearTimeout(atlasTransitionTimer);
    atlasTransitionTimer = 0;
  }

  selectedAtlasKey = key;
  selectedAtlasIndex = getAtlasIndex(key);
  serviceAtlasPreview.style.setProperty('--preview-accent', tickerAccentMap[key] || '#2380f1');
  setTickerActive(key);

  const applyMeta = () => {
    if (serviceAtlasPreviewTag) {
      serviceAtlasPreviewTag.textContent = meta.tag;
    }
    if (serviceAtlasPreviewTitle) {
      serviceAtlasPreviewTitle.textContent = meta.title;
    }
    if (serviceAtlasPreviewText) {
      serviceAtlasPreviewText.textContent = meta.text;
    }
    if (serviceAtlasPills) {
      const pills = serviceAtlasPills.querySelectorAll('span');
      pills.forEach((pill, index) => {
        pill.textContent = meta.pills[index] || '';
      });
    }
    if (serviceAtlasPreviewBtn) {
      serviceAtlasPreviewBtn.dataset.detailKey = key;
    }
    updateAtlasVisual(key);
  };

  if (animate) {
    serviceAtlasPreview.classList.add('is-transitioning');
    atlasTransitionTimer = window.setTimeout(() => {
      applyMeta();
      requestAnimationFrame(() => {
        serviceAtlasPreview.classList.remove('is-transitioning');
      });
      atlasTransitionTimer = 0;
    }, 220);
  } else {
    applyMeta();
    serviceAtlasPreview.classList.remove('is-transitioning');
  }

  if (syncRail) {
    syncAtlasRail(key, 'snap');
  }

  if (atlasDetailKey) {
    if (atlasDetailKey !== key) {
      closeAtlasDetailView();
    } else {
      openAtlasDetailView(key, { keepPage: true });
    }
  }

}

function setAtlasDetailPage(index, immediate = false) {
  if (!atlasDetailKey || !serviceAtlasDetailNav || !serviceAtlasDetailTrack) return;

  const pages = serviceData[atlasDetailKey]?.pages || [];
  if (!pages.length) return;

  const nextIndex = Math.max(0, Math.min(index, pages.length - 1));
  atlasDetailPageIndex = nextIndex;

  const navItems = serviceAtlasDetailNav.querySelectorAll('.detail-nav-item');
  navItems.forEach((item, itemIndex) => {
    item.setAttribute('aria-current', itemIndex === nextIndex ? 'true' : 'false');
  });

  const pageEls = serviceAtlasDetailTrack.querySelectorAll('.detail-page');
  pageEls.forEach((pageEl, pageIndex) => {
    pageEl.classList.toggle('is-active', pageIndex === nextIndex);
  });

  if (immediate) {
    serviceAtlasDetailTrack.classList.add('is-instant');
    requestAnimationFrame(() => {
      serviceAtlasDetailTrack.classList.remove('is-instant');
    });
  }
}

function renderAtlasDetailView(key) {
  if (!serviceAtlasDetailView || !serviceAtlasDetailNav || !serviceAtlasDetailTrack) return;
  const data = serviceData[key];
  if (!data) return;

  serviceAtlasDetailView.style.setProperty('--detail-accent', data.accent);
  serviceAtlasDetailView.style.setProperty('--detail-bg', mixHexWithWhite(data.accent, 0.96));

  serviceAtlasDetailNav.innerHTML = data.pages.map((page, index) => `
    <button class="detail-nav-item" type="button" data-atlas-page-index="${index}" aria-label="${escapeHtml(page.nav)}">
      <span class="detail-nav-dot" aria-hidden="true"></span>
    </button>
  `).join('');

  serviceAtlasDetailTrack.innerHTML = data.pages.map((page, index) => `
    <section class="detail-page" style="--detail-accent:${data.accent}" data-atlas-page-index="${index}">
      <div class="detail-page-copy">
        <p>${escapeHtml(page.text)}</p>
        <ul>${page.list.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
    </section>
  `).join('');
}

function openAtlasDetailView(key, options = {}) {
  if (!serviceAtlasPreview || !serviceAtlasDetailView) return;
  const data = serviceData[key];
  if (!data) return;

  const keepPage = options.keepPage === true;
  const nextPageIndex = keepPage ? atlasDetailPageIndex : 0;
  atlasDetailKey = key;

  if (atlasDetailCloseTimer) {
    clearTimeout(atlasDetailCloseTimer);
    atlasDetailCloseTimer = 0;
  }

  renderAtlasDetailView(key);
  const atlasTint = mixHexWithWhite(data.accent, 0.955);
  serviceAtlasPreview.style.setProperty('--atlas-card-bg', atlasTint);
  if (serviceAtlasContainer) {
    serviceAtlasContainer.style.setProperty('--atlas-section-bg', atlasTint);
    serviceAtlasContainer.classList.add('is-atlas-detail-open');
  }
  setAtlasDetailPage(nextPageIndex, true);

  const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
  const tickerHeight = serviceNavSticky ? serviceNavSticky.offsetHeight : 0;
  const stickyOffset = headerHeight + tickerHeight;
  if (serviceAtlasContainer) {
    const targetTop = window.scrollY + serviceAtlasContainer.getBoundingClientRect().top - stickyOffset;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' });
  } else if (serviceAtlasSection) {
    const targetTop = window.scrollY + serviceAtlasSection.getBoundingClientRect().top - stickyOffset;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' });
  }
  serviceAtlasDetailView.hidden = false;
  serviceAtlasDetailView.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    serviceAtlasPreview.classList.add('is-detail-open');
  });
  if (serviceAtlasPreviewBtn) {
    serviceAtlasPreviewBtn.textContent = '닫기';
  }
}

function runAtlasFadeTransition(action) {
  if (!serviceAtlasPreview) {
    action();
    return;
  }

  if (atlasPageFadeTimer) {
    clearTimeout(atlasPageFadeTimer);
    atlasPageFadeTimer = 0;
  }

  serviceAtlasPreview.classList.add('is-atlas-fading');
  atlasPageFadeTimer = window.setTimeout(() => {
    action();
    serviceAtlasPreview.classList.remove('is-atlas-fading');
    atlasPageFadeTimer = 0;
  }, 150);
}

function closeAtlasDetailView() {
  if (!serviceAtlasPreview || !serviceAtlasDetailView || !atlasDetailKey) return;

  atlasDetailKey = null;
  atlasDetailPageIndex = 0;
  serviceAtlasPreview.classList.remove('is-detail-open');
  serviceAtlasDetailTrack.classList.remove('is-instant');
  serviceAtlasPreview.style.removeProperty('--atlas-card-bg');
  if (serviceAtlasContainer) {
    serviceAtlasContainer.classList.remove('is-atlas-detail-open');
    serviceAtlasContainer.style.removeProperty('--atlas-section-bg');
  }
  if (atlasDetailCloseTimer) {
    clearTimeout(atlasDetailCloseTimer);
  }
  atlasDetailCloseTimer = window.setTimeout(() => {
    serviceAtlasDetailView.hidden = true;
    serviceAtlasDetailView.setAttribute('aria-hidden', 'true');
    atlasDetailCloseTimer = 0;
  }, 220);
  if (serviceAtlasPreviewBtn) {
    serviceAtlasPreviewBtn.textContent = '자세히 보기';
  }
}

function getServiceStopPositions() {
  return serviceRouteStops.map((stop) => {
    const value = Number.parseFloat(stop.style.left || '0');
    return Number.isFinite(value) ? value : 0;
  });
}

function getNearestServiceStopIndex(position) {
  const stopPositions = getServiceStopPositions();
  let bestIndex = 0;
  let bestDistance = Infinity;

  stopPositions.forEach((stopPosition, index) => {
    const distance = Math.abs(stopPosition - position);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function applyServiceRailState(position, finalIndex, mode = 'continuous') {
  if (!serviceNavSticky || !serviceAtlasOrder.length) return;

  const stopPositions = getServiceStopPositions();
  const activeSectionId = getAtlasKey(finalIndex);
  const activeAccent = tickerAccentMap[activeSectionId] || 'rgba(133, 185, 42, 0.8)';
  const clampedPosition = Math.max(0, Math.min(100, position));

  serviceNavSticky.style.setProperty('--route-position', `${clampedPosition}%`);
  serviceNavSticky.style.setProperty('--route-fill', `${clampedPosition}%`);
  serviceNavSticky.style.setProperty('--route-accent', activeAccent);

  serviceRouteStops.forEach((stop, stopIndex) => {
    stop.classList.toggle('is-active', stopIndex === finalIndex);
  });

  serviceNavSticky.classList.toggle('is-arrived', mode === 'snap' && finalIndex > 0 && finalIndex < stopPositions.length - 1);

  setTickerActive(activeSectionId);
}

function isWheelFromServiceSection(target) {
  if (!target || !(target instanceof Element)) return false;
  return Boolean(target.closest('.service-atlas-preview'));
}

function markServiceSectionWheelActivity(event) {
  const inSection = isWheelFromServiceSection(event.target);
  lastWheelInServiceSection = inSection;
  if (inSection) {
    lastServiceSectionWheelAt = Date.now();
    return;
  }

  lastServiceSectionWheelAt = 0;
  syncAtlasRail(selectedAtlasKey, 'snap');
}

function updateServiceRail(mode = 'continuous') {
  if (!serviceNavSticky || !serviceAtlasOrder.length) return;

  const stopPositions = getServiceStopPositions();

  // Keep ticker/product focus locked while atlas detail is open.
  // Product changes should happen only through explicit ticker click actions.
  if (atlasDetailKey) {
    const lockedIndex = getAtlasIndex(atlasDetailKey);
    const lockedPosition = stopPositions[lockedIndex] ?? 0;
    applyServiceRailState(lockedPosition, lockedIndex, 'snap');
    return;
  }

  // Allow rail updates only for recent wheel input from inside the service section.
  const wheelEligible = lastWheelInServiceSection
    && Date.now() - lastServiceSectionWheelAt <= SERVICE_SECTION_WHEEL_WINDOW_MS;
  if (!wheelEligible || !serviceAtlasSection) {
    syncAtlasRail(selectedAtlasKey, 'snap');
    return;
  }

  const sectionRect = serviceAtlasSection.getBoundingClientRect();
  const viewportHeight = Math.max(window.innerHeight || 0, 1);
  const sectionTravel = Math.max(sectionRect.height + viewportHeight, 1);
  const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionRect.top) / sectionTravel));
  const continuousPosition = scrollProgress * 100;
  const snappedIndex = Math.max(0, Math.min(serviceAtlasOrder.length - 1, Math.round(scrollProgress * (serviceAtlasOrder.length - 1))));
  const isAtTop = scrollProgress <= 0.001;
  const isAtBottom = scrollProgress >= 0.999;
  const finalIndex = isAtTop
    ? 0
    : isAtBottom
      ? stopPositions.length - 1
      : mode === 'snap'
        ? snappedIndex
        : Math.min(stopPositions.length - 1, Math.max(0, Math.floor(scrollProgress * (stopPositions.length - 1))));
  const finalPosition = isAtTop
    ? 0
    : isAtBottom
      ? 100
      : mode === 'snap'
        ? stopPositions[finalIndex]
        : continuousPosition;
  const targetKey = getAtlasKey(finalIndex);

  if (targetKey && targetKey !== selectedAtlasKey) {
    updateAtlasPreview(targetKey, { syncRail: false });
  }

  applyServiceRailState(finalPosition, finalIndex, mode);
}

function scheduleServiceRailUpdate() {
  if (!serviceRailRaf) {
    serviceRailRaf = window.requestAnimationFrame(() => {
      serviceRailRaf = 0;
      updateServiceRail('continuous');
    });
  }

  if (serviceRailSnapTimer) {
    clearTimeout(serviceRailSnapTimer);
  }

  serviceRailSnapTimer = window.setTimeout(() => {
    serviceRailRaf = 0;
    updateServiceRail('snap');
  }, 120);
}

function flashTickerSection(section) {
  if (!section) return;
  section.classList.remove('is-targeted');
  void section.offsetWidth;
  section.classList.add('is-targeted');

  if (tickerFlashTimer) {
    clearTimeout(tickerFlashTimer);
  }

  tickerFlashTimer = window.setTimeout(() => {
    section.classList.remove('is-targeted');
  }, 900);
}

function scrollToTickerSection(key) {
  if (!serviceAtlasPreview) return;

  updateAtlasPreview(key);
  flashTickerSection(serviceAtlasSection || serviceAtlasPreview);
  (serviceAtlasSection || serviceAtlasPreview).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function syncTickerActive() {
  updateServiceRail('snap');
}

function setupTickerNavigation() {
  if (!tickerLinks.length || !serviceAtlasOrder.length) return;

  applyTickerAccents();

  tickerLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetKey = link.dataset.service || link.getAttribute('href')?.slice(1);
      if (!targetKey) return;
      scrollToTickerSection(targetKey);
    });
  });

  window.addEventListener('scroll', scheduleServiceRailUpdate, { passive: true });
  window.addEventListener('resize', scheduleServiceRailUpdate);
  document.addEventListener('wheel', markServiceSectionWheelActivity, { passive: true, capture: true });

  updateServiceRail('snap');
}

function setupCapabilityOpenCta() {
  if (!capabilityOpenCtaBtn) return;

  capabilityOpenCtaBtn.addEventListener('click', () => {
    scrollToTickerSection(selectedAtlasKey || serviceAtlasOrder[0]);
  });
}

function setupServiceAtlas() {
  if (!serviceAtlasPreviewBtn || !serviceAtlasPreview) return;

  applyTickerAccents();
  updateAtlasPreview(selectedAtlasKey, { animate: false });

  serviceAtlasPreviewBtn.addEventListener('click', () => {
    runAtlasFadeTransition(() => {
      if (atlasDetailKey) {
        closeAtlasDetailView();
        return;
      }
      openAtlasDetailView(selectedAtlasKey);
    });
  });

  if (serviceAtlasDetailNav) {
    serviceAtlasDetailNav.addEventListener('click', (event) => {
      const button = event.target.closest('[data-atlas-page-index]');
      if (!button) return;
      setAtlasDetailPage(Number(button.dataset.atlasPageIndex), true);
    });
  }

  const handleWheel = (event) => {
    if (!isWheelFromServiceSection(event.target)) return;
    event.preventDefault();
    event.stopPropagation();

    if (atlasDetailKey) {
      const pages = serviceData[atlasDetailKey]?.pages || [];
      if (!pages.length) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = (atlasDetailPageIndex + direction + pages.length) % pages.length;
      setAtlasDetailPage(nextIndex);
      return;
    }

    const delta = event.deltaY;
    if (Math.abs(delta) < 8) return;
    if (atlasWheelLock) return;

    const direction = delta > 0 ? 1 : -1;
    const nextIndex = (selectedAtlasIndex + direction + serviceAtlasOrder.length) % serviceAtlasOrder.length;

    atlasWheelLock = 1;
    if (atlasWheelUnlockTimer) {
      clearTimeout(atlasWheelUnlockTimer);
    }

    const nextKey = getAtlasKey(nextIndex);
    updateAtlasPreview(nextKey);

    atlasWheelUnlockTimer = window.setTimeout(() => {
      atlasWheelLock = 0;
    }, 140);
  };

  document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
}

function setupServiceBusDrag() {
  if (!serviceRouteBus || !serviceRouteTrack || !serviceAtlasOrder.length) return;
  if (!window.matchMedia('(pointer: coarse)').matches && window.innerWidth > 760) return;

  const endDrag = () => {
    if (!routeDragState) return;

    const { position } = routeDragState;
    const nextIndex = getNearestServiceStopIndex(position);
    const targetId = getAtlasKey(nextIndex);

    routeDragState = null;
    document.body.classList.remove('service-route-dragging');

    if (!targetId) return;
    scrollToTickerSection(targetId);
  };

  serviceRouteBus.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (!serviceRouteTrack) return;

    event.preventDefault();
    serviceRouteBus.setPointerCapture(event.pointerId);
    routeDragState = {
      pointerId: event.pointerId,
      position: Number.parseFloat(getComputedStyle(serviceNavSticky).getPropertyValue('--route-position')) || 0
    };
    document.body.classList.add('service-route-dragging');
  });

  serviceRouteBus.addEventListener('pointermove', (event) => {
    if (!routeDragState || routeDragState.pointerId !== event.pointerId || !serviceNavSticky) return;
    if (!serviceRouteTrack) return;

    event.preventDefault();
    const trackRect = serviceRouteTrack.getBoundingClientRect();
    if (!trackRect.width) return;

    const nextPosition = Math.max(0, Math.min(100, ((event.clientX - trackRect.left) / trackRect.width) * 100));
    const nextIndex = getNearestServiceStopIndex(nextPosition);
    routeDragState.position = nextPosition;

    applyServiceRailState(nextPosition, nextIndex, 'continuous');
  });

  serviceRouteBus.addEventListener('pointerup', endDrag);
  serviceRouteBus.addEventListener('pointercancel', endDrag);
  serviceRouteBus.addEventListener('lostpointercapture', endDrag);
}

function openContact() {
  if (!contactOverlay || !contactForm) return;
  contactOverlay.hidden = false;
  contactOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('contact-lock');
  contactForm.reset();
  if (contactStatus) {
    contactStatus.textContent = '전송 후 입력한 이메일로 회신됩니다.';
  }
  const firstField = contactForm.querySelector('input[name="name"]');
  if (firstField) {
    firstField.focus();
  }
}

function closeContact() {
  if (!contactOverlay) return;
  contactOverlay.hidden = true;
  contactOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('contact-lock');
}

async function submitContactForm(event) {
  event.preventDefault();
  if (!contactForm || contactSubmitLock) return;

  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries());
  if (String(payload.website || '').trim()) {
    return;
  }

  contactSubmitLock = true;
  if (contactStatus) {
    contactStatus.textContent = '전송 중...';
  }

  try {
    const response = await fetch(contactApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: String(payload.name || '').trim(),
        company: String(payload.company || '').trim(),
        phone: String(payload.phone || '').trim(),
        email: String(payload.email || '').trim(),
        subject: String(payload.subject || '').trim(),
        message: String(payload.message || '').trim()
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.error || '전송에 실패했습니다.');
    }

    if (contactStatus) {
      contactStatus.textContent = '전송되었습니다. 확인 후 입력한 이메일로 회신드리겠습니다.';
    }
    contactForm.reset();
  } catch (error) {
    if (contactStatus) {
      contactStatus.textContent = error instanceof Error
        ? error.message
        : '전송에 실패했습니다. 로컬 서버 실행 여부를 확인해 주세요.';
    }
  } finally {
    contactSubmitLock = false;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function mixHexWithWhite(hex, mix = 0.92) {
  const normalized = String(hex).replace('#', '').trim();
  const expanded = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized;

  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    return 'rgb(255, 255, 255)';
  }

  const intValue = Number.parseInt(expanded, 16);
  const red = (intValue >> 16) & 255;
  const green = (intValue >> 8) & 255;
  const blue = intValue & 255;
  const whiteMix = Math.max(0, Math.min(1, mix));
  const mixValue = (channel) => Math.round(channel * (1 - whiteMix) + 255 * whiteMix);

  return `rgb(${mixValue(red)}, ${mixValue(green)}, ${mixValue(blue)})`;
}

function renderDetail(key) {
  const data = serviceData[key];
  if (!data) return;

  detailTitle.textContent = data.title;
  overlay.style.setProperty('--detail-accent', data.accent);
  overlay.style.setProperty('--detail-bg', mixHexWithWhite(data.accent, 0.92));
  detailPanel.style.setProperty('--detail-accent', data.accent);
  detailPanel.style.setProperty('--detail-bg', mixHexWithWhite(data.accent, 0.92));

  detailNav.innerHTML = data.pages.map((page, index) => `
    <button class="detail-nav-item" type="button" data-page-index="${index}" aria-label="${escapeHtml(page.nav)}">
      <span class="detail-nav-dot" aria-hidden="true"></span>
    </button>
  `).join('');

  detailTrack.innerHTML = data.pages.map((page, index) => `
    <section class="detail-page" style="--detail-accent:${data.accent}" data-page-index="${index}">
      <div class="detail-page-copy">
        <p>${escapeHtml(page.text)}</p>
        <ul>${page.list.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
      <div class="detail-page-art" aria-hidden="true">
        <div class="detail-page-art-inner">
          <div class="detail-page-art-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <strong>${String(index + 1).padStart(2, '0')}</strong>
          <div class="detail-page-art-panel">
            <span class="detail-page-art-strip"></span>
            <span class="detail-page-art-line short"></span>
            <span class="detail-page-art-line"></span>
            <span class="detail-page-art-line short"></span>
            <span class="detail-page-art-box"></span>
          </div>
        </div>
      </div>
    </section>
  `).join('');

  setActivePage(0, { immediate: true });
}

function setActivePage(index, options = {}) {
  if (!openedKey) return;
  const pages = serviceData[openedKey]?.pages || [];
  if (!pages.length) return;

  const nextIndex = Math.max(0, Math.min(index, pages.length - 1));
  const items = detailNav.querySelectorAll('.detail-nav-item');
  items.forEach((item, itemIndex) => {
    item.setAttribute('aria-current', itemIndex === nextIndex ? 'true' : 'false');
  });

  activePageIndex = nextIndex;
  const pageEls = detailTrack.querySelectorAll('.detail-page');
  pageEls.forEach((page, pageIndex) => {
    page.classList.toggle('is-active', pageIndex === nextIndex);
  });

  if (options.immediate) {
    detailTrack.classList.add('is-instant');
    requestAnimationFrame(() => {
      detailTrack.classList.remove('is-instant');
    });
  }
}

function goToDetailPage(index, immediate = false) {
  setActivePage(index, { immediate });
}

function openDetail(key) {
  if (!serviceData[key]) return;
  openedKey = key;
  renderDetail(key);
  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('detail-lock');
  detailWheelLock = false;
  if (detailWheelUnlockTimer) {
    clearTimeout(detailWheelUnlockTimer);
    detailWheelUnlockTimer = 0;
  }
}

function closeDetail() {
  openedKey = null;
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('detail-lock');
  detailTrack.classList.remove('is-instant');
  detailWheelLock = false;
  if (detailWheelUnlockTimer) {
    clearTimeout(detailWheelUnlockTimer);
    detailWheelUnlockTimer = 0;
  }
}

openButtons.forEach((button) => {
  const key = button.dataset.detail;
  button.addEventListener('click', () => openDetail(key));
});

detailNav.addEventListener('click', (event) => {
  const button = event.target.closest('[data-page-index]');
  if (!button) return;
  goToDetailPage(Number(button.dataset.pageIndex), true);
});

closeTargets.forEach((target) => target.addEventListener('click', closeDetail));
contactOpenButtons.forEach((button) => button.addEventListener('click', openContact));
contactCloseTargets.forEach((target) => target.addEventListener('click', closeContact));
if (contactForm) {
  contactForm.addEventListener('submit', submitContactForm);
}

startHeroRotation();
setupTickerNavigation();
setupCapabilityOpenCta();
setupServiceAtlas();
setupServiceBusDrag();
syncHeaderOffset();

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && atlasDetailKey) {
    closeAtlasDetailView();
  }
  if (event.key === 'Escape' && !overlay.hidden) {
    closeDetail();
  }
  if (event.key === 'Escape' && contactOverlay && !contactOverlay.hidden) {
    closeContact();
  }
});

overlay.addEventListener('wheel', (event) => {
  if (overlay.hidden || detailWheelLock) return;
  event.preventDefault();

  const pages = serviceData[openedKey]?.pages || [];
  if (!pages.length) return;

  const direction = event.deltaY > 0 ? 1 : -1;
  const nextIndex = Math.max(0, Math.min(activePageIndex + direction, pages.length - 1));
  if (nextIndex === activePageIndex) return;

  detailWheelLock = true;
  if (detailWheelUnlockTimer) {
    clearTimeout(detailWheelUnlockTimer);
  }
  goToDetailPage(nextIndex);
  detailWheelUnlockTimer = window.setTimeout(() => {
    detailWheelLock = false;
  }, 280);
}, { passive: false });

overlay.addEventListener('click', (event) => {
  if (event.target.classList && event.target.classList.contains('detail-backdrop')) {
    closeDetail();
  }
});

if (contactOverlay) {
  contactOverlay.addEventListener('click', (event) => {
    if (event.target.classList && event.target.classList.contains('contact-backdrop')) {
      closeContact();
    }
  });
}

window.addEventListener('resize', () => {
  if (atlasDetailKey) {
    const currentInlineIndex = atlasDetailPageIndex;
    renderAtlasDetailView(atlasDetailKey);
    setAtlasDetailPage(currentInlineIndex, true);
  }
  if (!overlay.hidden && openedKey) {
    const currentIndex = activePageIndex;
    renderDetail(openedKey);
    goToDetailPage(currentIndex, true);
  }
  syncHeaderOffset();
  scheduleServiceRailUpdate();
});




