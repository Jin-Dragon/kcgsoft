let serviceData = {
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
      { nav: '01', eyebrow: '01', title: '수소버스 등록', text: '수소버스를 등록하고 운행 지역을 입력해 노선 기준 데이터를 먼저 구성합니다.', list: ['수소버스 등록', '운행 지역 입력', '노선 기준 설정'], icon: 'hyd-1' },
      { nav: '02', eyebrow: '02', title: '충전소 매칭', text: '입력된 노선을 기준으로 접근 가능한 충전소 중 가장 가까운 수소충전소 위치를 자동 파악합니다.', list: ['근접 충전소 탐색', '노선-충전소 매칭', '위치 가시화'], icon: 'hyd-2' },
      { nav: '03', eyebrow: '03', title: '충전 실적 집계', text: '각 충전소에서 얼마나 충전했는지, 몇 회 충전했는지, 연비가 얼마나 나오는지 운영 수치를 누적합니다.', list: ['충전량 집계', '충전 횟수 집계', '연비 산출'], icon: 'hyd-3' },
      { nav: '04', eyebrow: '04', title: '통합 대시보드', text: '총 충전량과 핵심 수치를 대시보드에서 한눈에 확인해 운영 상태를 즉시 판단합니다.', list: ['총 충전량', '핵심 지표 대시보드', '운영 현황 한눈에 확인'], icon: 'hyd-4' }
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
const serviceIntroShell = document.querySelector('.service-intro-shell');
const serviceIntroRailDots = Array.from(document.querySelectorAll('.section-head-rail-dot'));
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
const langButtons = Array.from(document.querySelectorAll('.lang-btn'));

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
let currentLang = 'ko';
const tickerAccentMap = {
  'wonder-shuttle': serviceData['wonder-shuttle'].accent,
  'wonder-linx': serviceData['wonder-linx'].accent,
  'wonder-hydro': serviceData['wonder-hydro'].accent,
  'wonder-fms': serviceData['wonder-fms'].accent,
  catchloc: serviceData.catchloc.accent
};
let serviceAtlasMeta = {
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
    text: '운행기록, 정비/경비/연료비 지출, 노선 손익을 데이터로 통합해 매출·지출 지표를 한눈에 관리하는 버스 전용 FMS입니다.',
    pills: ['지출 통합 관리', '노선 손익 분석', '커스텀 대시보드']
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

let wonderFmsVisualMarkup = `
  <div class="fms-visual-cards">
    <article class="fms-visual-card">
      <span class="fms-card-icon is-ops" aria-hidden="true"></span>
      <h4>01. 차량 기록 관리</h4>
      <p>회사 등록 버스의 운행 기록과<br />정비 이력을 통합 관리</p>
    </article>
    <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="fms-visual-card">
      <span class="fms-card-icon is-cost" aria-hidden="true"></span>
      <h4>02. 지출 데이터 통합</h4>
      <p>경비비·연료비 지출을 통합해<br />비용 흐름을 한눈에 확인</p>
    </article>
    <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="fms-visual-card">
      <span class="fms-card-icon is-profit" aria-hidden="true"></span>
      <h4>03. 노선 손익 분석</h4>
      <p>노선별 매출·지출을 비교해<br />손익 지표를 산출</p>
    </article>
    <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="fms-visual-card">
      <span class="fms-card-icon is-dashboard" aria-hidden="true"></span>
      <h4>04. 커스텀 대시보드</h4>
      <p>조직·거래처 데이터를 통합해<br />매출·지출 현황을 한눈에 확인</p>
    </article>
  </div>
`;

let wonderShuttleVisualMarkup = `
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

let wonderLinxVisualMarkup = `
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

let wonderHydroVisualMarkup = `
  <div class="hydro-visual-cards">
    <article class="hydro-visual-card">
      <span class="hydro-card-icon is-register" aria-hidden="true"></span>
      <h4>01. 수소버스 정보 입력</h4>
      <p>수소버스를 노선 정보와 함께 등록하여 이력관리</p>
    </article>
    <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="hydro-visual-card">
      <span class="hydro-card-icon is-station" aria-hidden="true"></span>
      <h4>02. 충전소 정보 확인</h4>
      <p>노선 기준으로 가장 가까운 수소충전소 위치를 확인하여 배정</p>
    </article>
    <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="hydro-visual-card">
      <span class="hydro-card-icon is-usage" aria-hidden="true"></span>
      <h4>03. 충전 실적 집계</h4>
      <p>충전량·충전횟수·연비를 집계해<br />운행 효율 수치를 계산</p>
    </article>
    <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="hydro-visual-card">
      <span class="hydro-card-icon is-dashboard" aria-hidden="true"></span>
      <h4>04. 통합 대시보드</h4>
      <p>총 충전량과 핵심 지표를<br />대시보드에서 한눈에 확인</p>
    </article>
  </div>
`;

let catchlocVisualMarkup = `
  <div class="catchloc-visual-cards">
    <article class="catchloc-visual-card">
      <span class="catchloc-card-icon is-gps" aria-hidden="true"></span>
      <h4>01. GPS 위치 수집</h4>
      <p>차량 GPS 위치를 실시간 수집해<br />운행 흐름을 추적</p>
    </article>
    <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="catchloc-visual-card">
      <span class="catchloc-card-icon is-boarding" aria-hidden="true"></span>
      <h4>02. 탑승 데이터 수집</h4>
      <p>탑승객 승하차 데이터를 수집해<br />운행·수요 데이터를 통합</p>
    </article>
    <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="catchloc-visual-card">
      <span class="catchloc-card-icon is-admin" aria-hidden="true"></span>
      <h4>03. 기업 커스터마이징</h4>
      <p>기업 운영 방식에 맞게 커스텀 가능</p>
    </article>
    <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
    <article class="catchloc-visual-card">
      <span class="catchloc-card-icon is-analytics" aria-hidden="true"></span>
      <h4>04. 로우데이터 추출</h4>
      <p>데이터를 엑셀로 저장·추출 후 가공해 핵심 지표를 분석</p>
    </article>
  </div>
`;

const LANG_STORAGE_KEY = 'kcg_lang';
const LANG_HTML_CODE = { ko: 'ko', en: 'en', ja: 'ja', zh: 'zh-CN' };
const I18N_UI = {
  ko: {
    nav: ['Core Services', 'Capability', 'Company', 'Contact'],
    heroKicker: 'KCGsoft / Seoul / Urban Mobility Systems',
    heroTitle: '<span class="hero-brand">KCG soft는</span> <span class="hero-rest">도시 이동의 새로운 기준을</span><br /><span class="hero-rest">만들어갑니다.</span>',
    heroFocus: 'Current Focus',
    heroFocusText: '운영 가능한 서비스 구조, 현장 프로세스, 위치 데이터, 접근 권한 제어를 하나의 시스템으로 연결합니다.',
    heroCta: '문의하기',
    capabilityTitle: '버스회사 운영 데이터<br />어떻게 한 번에 연결할까?',
    capabilitySummary: '차량관제서비스, 회사 내부 ERP 연동, 차량 연료 충전 데이터, 데이터 기반 노선설계까지.<br />같은 운영 흐름으로 연결해 제공합니다.',
    capabilitySteps: [
      ['데이터 기반 노선설계', '증감차 / 정류장 / 효율화 판단'],
      ['차량관제서비스', '실시간 위치 / 운행 상태 / 탑승 흐름'],
      ['내부 ERP 연동', '배차 / 정산 / 이력 / 운영기록'],
      ['연료 충전 데이터', '충전 현황 / 현장 이력 / 운영 데이터']
    ],
    focusNote: '흩어진 데이터가 아니라, 운영 흐름의 통합',
    focusTitle: '버스회사가 고민하는 솔루션을 한 번에 제공합니다.',
    insights: [
      ['Insight A', '운행 현황 데이터를 한눈에 파악합니다.', '따로 확인하던 데이터를 하나로 모아 현장 판단 속도를 높입니다.'],
      ['Insight B', '매일 쌓이는 데이터가 운영 기준이 됩니다.', '감각이 아닌 실제 지표로 노선·배차·비용을 결정합니다.'],
      ['Insight C', '노선 하나 바꿀 때도 데이터가 근거가 됩니다.', '증감차·정류장·수요 데이터를 기반으로 변경 결정을 빠르게 내립니다.']
    ],
    capabilityCta: 'KCGsoft 통합 솔루션 소개 보기',
    ticker: ['Wonder Shuttle', 'Wonder Linx', 'Wonder Hydro', 'Wonder FMS', 'Catchloc'],
    serviceHeadKicker: 'Index / Core Services',
    serviceHeadTitle: 'KCGsoft 핵심 서비스 라인업',
    serviceHeadSummary: 'Wonder Shuttle부터 Catchloc까지, 쌓아온 노하우를 하나로 담았습니다.',
    serviceDetailOpen: '자세히 보기',
    serviceDetailClose: '닫기',
    clientsKicker: 'Clients / Powered by Catchloc',
    clientsTitle: 'Partner Client',
    clientsDesc: '수많은 기업의 운영 현장에서 KCG soft가 함께하고 있습니다.',
    trustKicker: 'KCGsoft Service Overview',
    trustTitle: '운영 중심 모빌리티 서비스',
    trustCards: [
      ['01. 실시간 관제', '통합 관제 플랫폼으로 차량과 노선을 실시간 모니터링합니다.'],
      ['02. 노선 설계', '데이터 기반으로 최적의 노선을 설계하고 운행 효율을 높입니다.'],
      ['03. 수소 충전 운영', '수소 충전소 연계 및 운영 관리를 통해 안정적인 충전 운영을 지원합니다.'],
      ['04. 전세버스 ERP', '예약부터 정산까지 전세버스 운영의 전 과정을 통합 관리합니다.'],
      ['05. GPS 위치 추적', '정밀한 GPS 추적으로 차량 위치와 운행 이력을 안전하게 관리합니다.'],
      ['06. 데이터 리포트', '운영 현황을 시각화한 리포트로 의사결정을 빠르고 정확하게 지원합니다.'],
      ['07. 커스터마이징', '고객의 비즈니스 환경에 맞춘 기능과 프로세스를 유연하게 제공합니다.'],
      ['08. 운영 지원', '전문 컨설팅과 지속적 기술 지원으로 성공적인 운영을 함께합니다.']
    ],
    trustCta: '도입 문의하기',
    footer: [
      '주식회사 케이씨지소프트 | 대표자명: 전수연',
      '주소: 서울특별시 성동구 성수일로 89, 903호(성수동1가, Metamorpho(지식산업센터))',
      '사업자등록번호: 611-86-03271 | 통신판매업신고번호: 제2024-서울성동-1589호 | 직업정보제공사업신고번호 J1202020250001',
      'Copyright ⓒ 2026 KCGsoft All rights reserved.'
    ],
    contact: {
      kicker: 'Contact',
      title: '문의하기',
      close: 'Close',
      labels: ['이름', '회사명', '연락처', '이메일', '제목', '문의 내용', 'Website'],
      submit: '전송하기',
      statusDefault: '전송 후 입력한 이메일로 회신됩니다.',
      statusSending: '전송 중...',
      statusSuccess: '전송되었습니다. 확인 후 입력한 이메일로 회신드리겠습니다.',
      statusError: '전송에 실패했습니다.',
      statusServerHint: '전송에 실패했습니다. 로컬 서버 실행 여부를 확인해 주세요.'
    },
    detail: { kicker: 'Product Detail', close: 'Close' }
  },
  en: {
    nav: ['Core Services', 'Capability', 'Company', 'Contact'],
    heroKicker: 'KCGsoft / Seoul / Urban Mobility Systems',
    heroTitle: '<span class="hero-brand">KCG soft</span> <span class="hero-rest">sets a new standard</span><br /><span class="hero-rest">for urban mobility.</span>',
    heroFocus: 'Current Focus',
    heroFocusText: 'We connect service architecture, field process, location data, and access control into one operational system.',
    heroCta: 'Contact Us',
    capabilityTitle: 'How can we connect bus operation data<br />in one flow?',
    capabilitySummary: 'From fleet control and in-house ERP integration to fuel charging data and data-driven route design,<br />we provide everything in one operating workflow.',
    capabilitySteps: [
      ['Data-driven Route Design', 'Fleet size / Stops / Efficiency analysis'],
      ['Fleet Control Service', 'Live location / Operation status / Boarding flow'],
      ['ERP Integration', 'Dispatch / Settlement / Logs / Operations'],
      ['Fuel Charging Data', 'Charging status / Field history / Ops data']
    ],
    focusNote: 'Not fragmented data, but one integrated operation flow',
    focusTitle: 'We deliver the exact solutions bus operators need in one package.',
    insights: [
      ['Insight A', 'See operation status at a glance.', 'Unify scattered data and speed up field decisions.'],
      ['Insight B', 'Daily data becomes your operating standard.', 'Decide routes, dispatch, and cost with real metrics.'],
      ['Insight C', 'Even route changes are data-backed.', 'Make faster decisions with demand, stop, and fleet data.']
    ],
    capabilityCta: 'View KCGsoft Integrated Solution',
    ticker: ['Wonder Shuttle', 'Wonder Linx', 'Wonder Hydro', 'Wonder FMS', 'Catchloc'],
    serviceHeadKicker: 'Index / Core Services',
    serviceHeadTitle: 'KCGsoft Core Service Lineup',
    serviceHeadSummary: 'From Wonder Shuttle to Catchloc, all our expertise in one lineup.',
    serviceDetailOpen: 'View Details',
    serviceDetailClose: 'Close',
    clientsKicker: 'Clients / Powered by Catchloc',
    clientsTitle: 'Partner Client',
    clientsDesc: 'KCG soft supports operations across numerous partner companies.',
    trustKicker: 'KCGsoft Service Overview',
    trustTitle: 'Operations-Centered Mobility Services',
    trustCards: [
      ['01. Real-time Control', 'Monitor vehicles and routes in real time on one platform.'],
      ['02. Route Design', 'Design optimal routes and improve operating efficiency with data.'],
      ['03. Hydrogen Charging Ops', 'Stabilize charging operations through station linkage and management.'],
      ['04. Charter Bus ERP', 'Integrate the full process from booking to settlement.'],
      ['05. GPS Tracking', 'Securely manage vehicle location and trip history with precise GPS.'],
      ['06. Data Reporting', 'Support faster and more accurate decisions with visualized reports.'],
      ['07. Customization', 'Flexibly provide features and processes tailored to each business.'],
      ['08. Operational Support', 'Drive success with expert consulting and continuous tech support.']
    ],
    trustCta: 'Request Introduction',
    footer: [
      'KCGsoft Co., Ltd. | CEO: Sooyeon Jeon',
      'Address: #903, 89 Seongsuil-ro, Seongdong-gu, Seoul, Republic of Korea',
      'Business Registration No.: 611-86-03271 | E-commerce Registration: 2024-SeoulSeongdong-1589 | Job Information Service: J1202020250001',
      'Copyright ⓒ 2026 KCGsoft All rights reserved.'
    ],
    contact: {
      kicker: 'Contact',
      title: 'Contact Us',
      close: 'Close',
      labels: ['Name', 'Company', 'Phone', 'Email', 'Subject', 'Message', 'Website'],
      submit: 'Send',
      statusDefault: 'We will reply to your email after submission.',
      statusSending: 'Sending...',
      statusSuccess: 'Sent successfully. We will reply to your email shortly.',
      statusError: 'Failed to send.',
      statusServerHint: 'Failed to send. Please check if the local server is running.'
    },
    detail: { kicker: 'Product Detail', close: 'Close' }
  },
  ja: {
    nav: ['Core Services', 'Capability', 'Company', 'Contact'],
    heroKicker: 'KCGsoft / Seoul / Urban Mobility Systems',
    heroTitle: '<span class="hero-brand">KCG softは</span> <span class="hero-rest">都市モビリティの新しい基準を</span><br /><span class="hero-rest">つくります。</span>',
    heroFocus: 'Current Focus',
    heroFocusText: '運用可能なサービス構造、現場プロセス、位置データ、権限制御を一つの運用システムとして統合します。',
    heroCta: 'お問い合わせ',
    capabilityTitle: 'バス会社の運用データを<br />どう一度に連携するか？',
    capabilitySummary: '車両管制、社内ERP連携、燃料充電データ、データベース路線設計まで。<br />同一の運用フローで提供します。',
    capabilitySteps: [
      ['データ基盤の路線設計', '増減車 / 停留所 / 効率化判断'],
      ['車両管制サービス', 'リアルタイム位置 / 運行状態 / 乗車フロー'],
      ['ERP連携', '配車 / 精算 / 履歴 / 運用記録'],
      ['燃料充電データ', '充電状況 / 現場履歴 / 運用データ']
    ],
    focusNote: '分散データではなく、運用フローの統合',
    focusTitle: 'バス会社が必要とするソリューションを一括提供します。',
    insights: [
      ['Insight A', '運行状況を一目で把握。', '散在データを統合し現場判断を高速化。'],
      ['Insight B', '日々のデータが運用基準に。', '感覚ではなく指標で判断。'],
      ['Insight C', '路線変更もデータ根拠で。', '需要・停留所・車両データで迅速に意思決定。']
    ],
    capabilityCta: 'KCGsoft統合ソリューションを見る',
    ticker: ['Wonder Shuttle', 'Wonder Linx', 'Wonder Hydro', 'Wonder FMS', 'Catchloc'],
    serviceHeadKicker: 'Index / Core Services',
    serviceHeadTitle: 'KCGsoft コアサービスラインナップ',
    serviceHeadSummary: 'Wonder ShuttleからCatchlocまで、蓄積したノウハウを一つに。',
    serviceDetailOpen: '詳細を見る',
    serviceDetailClose: '閉じる',
    clientsKicker: 'Clients / Powered by Catchloc',
    clientsTitle: 'Partner Client',
    clientsDesc: '多くの企業の運用現場でKCG softが共にしています。',
    trustKicker: 'KCGsoft Service Overview',
    trustTitle: '運用中心モビリティサービス',
    trustCards: [
      ['01. リアルタイム管制', '統合管制プラットフォームで車両と路線を監視。'],
      ['02. 路線設計', 'データ基盤で最適路線を設計し効率向上。'],
      ['03. 水素充電運用', '充電所連携と運用管理で安定運用を支援。'],
      ['04. 貸切バスERP', '予約から精算まで全工程を統合管理。'],
      ['05. GPS位置追跡', '高精度GPSで位置と運行履歴を安全管理。'],
      ['06. データレポート', '可視化レポートで迅速かつ正確な意思決定。'],
      ['07. カスタマイズ', '業務環境に合わせ機能とプロセスを柔軟提供。'],
      ['08. 運用支援', '専門コンサルと継続技術支援で成功運用を実現。']
    ],
    trustCta: '導入問い合わせ',
    footer: [
      '株式会社KCGsoft | 代表者: チョン・スヨン',
      '住所: ソウル特別市 城東区 聖水一路89, 903号',
      '事業者登録番号: 611-86-03271 | 通信販売業届出: 2024-ソウル城東-1589号 | 職業情報提供事業届出: J1202020250001',
      'Copyright ⓒ 2026 KCGsoft All rights reserved.'
    ],
    contact: {
      kicker: 'Contact',
      title: 'お問い合わせ',
      close: '閉じる',
      labels: ['お名前', '会社名', '連絡先', 'メール', '件名', 'お問い合わせ内容', 'Website'],
      submit: '送信',
      statusDefault: '送信後、入力したメールに返信します。',
      statusSending: '送信中...',
      statusSuccess: '送信完了しました。確認後メールで返信します。',
      statusError: '送信に失敗しました。',
      statusServerHint: '送信に失敗しました。ローカルサーバー実行を確認してください。'
    },
    detail: { kicker: 'Product Detail', close: '閉じる' }
  },
  zh: {
    nav: ['Core Services', 'Capability', 'Company', 'Contact'],
    heroKicker: 'KCGsoft / Seoul / Urban Mobility Systems',
    heroTitle: '<span class="hero-brand">KCG soft</span> <span class="hero-rest">正在打造城市出行的</span><br /><span class="hero-rest">全新标准。</span>',
    heroFocus: 'Current Focus',
    heroFocusText: '将可运营的服务架构、现场流程、位置数据与权限控制整合为一套运营系统。',
    heroCta: '联系我们',
    capabilityTitle: '如何一次性打通<br />巴士公司的运营数据？',
    capabilitySummary: '从车辆管制、企业ERP联动、燃料充电数据到数据化线路设计，<br />统一在同一运营流程中提供。',
    capabilitySteps: [
      ['数据驱动线路设计', '增减车辆 / 站点 / 效率判断'],
      ['车辆管制服务', '实时位置 / 运行状态 / 乘车流程'],
      ['ERP联动', '派车 / 结算 / 历史 / 运营记录'],
      ['燃料充电数据', '充电状态 / 现场历史 / 运营数据']
    ],
    focusNote: '不是分散数据，而是运营流程一体化',
    focusTitle: '一次提供巴士企业真正需要的解决方案。',
    insights: [
      ['Insight A', '一眼掌握运营现状。', '汇总分散数据，提升现场决策速度。'],
      ['Insight B', '每日数据成为运营标准。', '用真实指标而非经验进行决策。'],
      ['Insight C', '线路调整也有数据依据。', '基于需求、站点和车辆数据快速决策。']
    ],
    capabilityCta: '查看KCGsoft一体化方案',
    ticker: ['Wonder Shuttle', 'Wonder Linx', 'Wonder Hydro', 'Wonder FMS', 'Catchloc'],
    serviceHeadKicker: 'Index / Core Services',
    serviceHeadTitle: 'KCGsoft 核心服务矩阵',
    serviceHeadSummary: '从Wonder Shuttle到Catchloc，沉淀经验一次呈现。',
    serviceDetailOpen: '查看详情',
    serviceDetailClose: '关闭',
    clientsKicker: 'Clients / Powered by Catchloc',
    clientsTitle: 'Partner Client',
    clientsDesc: 'KCG soft 正在众多企业运营现场稳定服务。',
    trustKicker: 'KCGsoft Service Overview',
    trustTitle: '以运营为中心的出行服务',
    trustCards: [
      ['01. 实时管制', '在统一管制平台实时监控车辆与线路。'],
      ['02. 线路设计', '基于数据设计最优线路并提升效率。'],
      ['03. 氢能充电运营', '通过充电站联动与运营管理保障稳定运行。'],
      ['04. 包车ERP', '从预约到结算全流程一体化管理。'],
      ['05. GPS位置追踪', '以高精度GPS安全管理位置与运营记录。'],
      ['06. 数据报告', '通过可视化报告支持快速准确决策。'],
      ['07. 定制化', '按企业业务环境灵活提供功能与流程。'],
      ['08. 运营支持', '以专业咨询与持续技术支持保障成功运营。']
    ],
    trustCta: '申请演示',
    footer: [
      'KCGsoft株式会社 | 代表人: 全秀妍',
      '地址: 首尔特别市 城东区 圣水一路89号 903室',
      '营业执照号: 611-86-03271 | 电商备案: 2024-首尔城东-1589号 | 职业信息服务备案: J1202020250001',
      'Copyright ⓒ 2026 KCGsoft All rights reserved.'
    ],
    contact: {
      kicker: 'Contact',
      title: '联系我们',
      close: '关闭',
      labels: ['姓名', '公司名', '联系方式', '邮箱', '标题', '咨询内容', 'Website'],
      submit: '发送',
      statusDefault: '提交后我们将通过您填写的邮箱回复。',
      statusSending: '发送中...',
      statusSuccess: '发送成功，我们将尽快回复您的邮箱。',
      statusError: '发送失败。',
      statusServerHint: '发送失败，请确认本地服务器是否已运行。'
    },
    detail: { kicker: 'Product Detail', close: '关闭' }
  }
};

const I18N_ATLAS_META = {
  ko: serviceAtlasMeta,
  en: {
    'wonder-linx': { tag: 'Data-driven Intelligent Route Design', title: 'WONDER LINX', text: 'A service that supports precise route planning through analysis, editing, optimization, and ETA prediction.', pills: ['Route Analysis', 'Optimal Route', 'Travel Time'] },
    'wonder-shuttle': { tag: 'Integrated Bus Control Service', title: 'WONDER SHUTTLE', text: 'An operations solution that checks live location, route operations, and boarding in one interface.', pills: ['Live Location', 'Route Control', 'Boarding Data'] },
    'wonder-hydro': { tag: 'Hydrogen Charging Operations', title: 'WONDER HYDRO', text: 'Manage charging status, history, and operation flow in one view.', pills: ['Charging Status', 'History', 'Field Ops'] },
    'wonder-fms': { tag: 'Charter Bus ERP', title: 'WONDER FMS', text: 'A bus-focused FMS integrating operation records, costs, route P/L, and dashboard metrics.', pills: ['Cost Integration', 'Route P/L', 'Custom Dashboard'] },
    catchloc: { tag: 'GPS Tracking Solution', title: 'CATCHLOC', text: 'Track vehicles/assets in real time and manage movement history and status.', pills: ['GPS Tracking', 'Movement History', 'Status Control'] }
  },
  ja: {
    'wonder-linx': { tag: 'データ基盤の知能型路線設計', title: 'WONDER LINX', text: '分析・修正・最適経路・所要時間予測で、より精密な路線設計を支援します。', pills: ['路線分析', '最適経路', '運行時間'] },
    'wonder-shuttle': { tag: 'バス統合管制サービス', title: 'WONDER SHUTTLE', text: 'リアルタイム位置、路線運用、乗車管理を一画面で確認できます。', pills: ['リアルタイム位置', '路線管理', '乗車データ'] },
    'wonder-hydro': { tag: '水素充電統合管理', title: 'WONDER HYDRO', text: '充電状態・履歴・運用フローを一画面で管理します。', pills: ['充電状態', '履歴管理', '現場運用'] },
    'wonder-fms': { tag: '貸切バスERP統合管理', title: 'WONDER FMS', text: '運行記録・費用・路線損益を統合し、指標を可視化するFMSです。', pills: ['費用統合管理', '路線損益', 'カスタムダッシュボード'] },
    catchloc: { tag: 'GPS位置追跡ソリューション', title: 'CATCHLOC', text: '車両と資産の位置をリアルタイム把握し、履歴と状態を管理します。', pills: ['GPS追跡', '移動履歴', '状態管理'] }
  },
  zh: {
    'wonder-linx': { tag: '数据驱动智能线路设计', title: 'WONDER LINX', text: '通过分析、修正、最优路径与时长预测，提升线路设计精度。', pills: ['线路分析', '最优路径', '运行时长'] },
    'wonder-shuttle': { tag: '巴士一体化管制服务', title: 'WONDER SHUTTLE', text: '在一个界面查看实时位置、线路运营与乘车管理。', pills: ['实时位置', '线路管理', '乘车数据'] },
    'wonder-hydro': { tag: '氢能充电一体化管理', title: 'WONDER HYDRO', text: '在一个界面管理充电状态、历史与运营流程。', pills: ['充电状态', '历史管理', '现场运营'] },
    'wonder-fms': { tag: '包车ERP一体化管理', title: 'WONDER FMS', text: '整合运营记录、费用与线路损益，并通过仪表盘统一查看。', pills: ['费用整合', '线路损益', '定制仪表盘'] },
    catchloc: { tag: 'GPS位置追踪方案', title: 'CATCHLOC', text: '实时查看车辆与资产位置并管理移动历史和状态。', pills: ['GPS追踪', '移动历史', '状态管理'] }
  }
};

const I18N_VISUAL_MARKUP = {
  ko: { shuttle: wonderShuttleVisualMarkup, linx: wonderLinxVisualMarkup, hydro: wonderHydroVisualMarkup, fms: wonderFmsVisualMarkup, catchloc: catchlocVisualMarkup },
  en: {
    shuttle: `
      <div class="shuttle-visual-cards">
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-app" aria-hidden="true"></span>
          <h4>01. Bus App</h4>
          <p>Driver app receives location data<br />and passenger QR tags</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-server" aria-hidden="true"></span>
          <h4>02. Server Sync</h4>
          <p>Location and boarding records<br />are sent and stored on server</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-ticket" aria-hidden="true"></span>
          <h4>03. Ticket Issue/Scan</h4>
          <p>Issue tickets in app and scan<br />from driver app for boarding</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-bus" aria-hidden="true"></span>
          <h4>04. Live Bus Tracking</h4>
          <p>Users check real-time location<br />of their assigned bus</p>
        </article>
      </div>
    `,
    linx: `
      <div class="linx-visual-cards">
        <article class="linx-visual-card">
          <span class="linx-card-icon is-route" aria-hidden="true"></span>
          <h4>01. Create/Edit Route</h4>
          <p>Create new stops and paths<br />and flexibly revise routes</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-merge" aria-hidden="true"></span>
          <h4>02. Duplicate Merge</h4>
          <p>Analyze duplicate stops/routes<br />and merge lines by data</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-path" aria-hidden="true"></span>
          <h4>03. Best Route Search</h4>
          <p>Find optimal operation paths<br />based on stop/route data</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-time" aria-hidden="true"></span>
          <h4>04. Time Simulation</h4>
          <p>Simulate expected travel time<br />and operation flow</p>
        </article>
      </div>
    `,
    hydro: `
      <div class="hydro-visual-cards">
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-register" aria-hidden="true"></span>
          <h4>01. Bus Info Input</h4>
          <p>Register hydrogen buses with route data<br />for lifecycle management</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-station" aria-hidden="true"></span>
          <h4>02. Station Match</h4>
          <p>Assign nearest hydrogen station<br />based on route location</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-usage" aria-hidden="true"></span>
          <h4>03. Charge Metrics</h4>
          <p>Aggregate charge amount, count, and fuel economy<br />to calculate operation efficiency</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-dashboard" aria-hidden="true"></span>
          <h4>04. Unified Dashboard</h4>
          <p>Review total charging and key metrics<br />at a glance</p>
        </article>
      </div>
    `,
    fms: `
      <div class="fms-visual-cards">
        <article class="fms-visual-card">
          <span class="fms-card-icon is-ops" aria-hidden="true"></span>
          <h4>01. Vehicle Records</h4>
          <p>Manage operation and maintenance history<br />for all registered buses</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-cost" aria-hidden="true"></span>
          <h4>02. Cost Integration</h4>
          <p>Integrate expense and fuel spend<br />for clear cost visibility</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-profit" aria-hidden="true"></span>
          <h4>03. Route P/L Analysis</h4>
          <p>Compare route revenue and cost<br />to derive profitability</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-dashboard" aria-hidden="true"></span>
          <h4>04. Custom Dashboard</h4>
          <p>Combine org and partner data<br />to view sales and spend in one place</p>
        </article>
      </div>
    `,
    catchloc: `
      <div class="catchloc-visual-cards">
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-gps" aria-hidden="true"></span>
          <h4>01. GPS Collection</h4>
          <p>Collect vehicle GPS data in real time<br />to track operation flow</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-boarding" aria-hidden="true"></span>
          <h4>02. Boarding Data</h4>
          <p>Capture boarding records<br />and integrate demand data</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-admin" aria-hidden="true"></span>
          <h4>03. Enterprise Custom</h4>
          <p>Customize features for each<br />company operation style</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-analytics" aria-hidden="true"></span>
          <h4>04. Raw Data Export</h4>
          <p>Export to Excel and process<br />for KPI analysis</p>
        </article>
      </div>
    `
  },
  ja: {
    shuttle: `
      <div class="shuttle-visual-cards">
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-app" aria-hidden="true"></span>
          <h4>01. バス専用アプリ</h4>
          <p>運転手アプリで位置受信と<br />乗客QRタグを入力</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-server" aria-hidden="true"></span>
          <h4>02. サーバー連携</h4>
          <p>位置記録と乗客情報を<br />サーバーへ送信・保存</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-ticket" aria-hidden="true"></span>
          <h4>03. 乗車券発行・スキャン</h4>
          <p>アプリで発行した乗車券を<br />運転手アプリでスキャンして乗車</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-bus" aria-hidden="true"></span>
          <h4>04. リアルタイム確認</h4>
          <p>利用者が乗車予定バスの<br />現在位置をリアルタイム確認</p>
        </article>
      </div>
    `,
    linx: `
      <div class="linx-visual-cards">
        <article class="linx-visual-card">
          <span class="linx-card-icon is-route" aria-hidden="true"></span>
          <h4>01. 路線作成・修正</h4>
          <p>新規路線の停留所・経路を作成し<br />既存路線を柔軟に修正</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-merge" aria-hidden="true"></span>
          <h4>02. 重複分析・統廃合</h4>
          <p>重複する停留所・経路を分析し<br />データ基盤で路線を統廃合</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-path" aria-hidden="true"></span>
          <h4>03. 最適経路探索</h4>
          <p>停留所・経路データを基に<br />最適な運行経路を探索</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-time" aria-hidden="true"></span>
          <h4>04. 時間シミュレーション</h4>
          <p>新路線の想定所要時間と<br />運行フローをシミュレーション</p>
        </article>
      </div>
    `,
    hydro: `
      <div class="hydro-visual-cards">
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-register" aria-hidden="true"></span>
          <h4>01. 水素バス情報入力</h4>
          <p>水素バスを路線情報と共に登録し<br />履歴を管理</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-station" aria-hidden="true"></span>
          <h4>02. 充電所情報確認</h4>
          <p>路線基準で最も近い水素充電所を<br />確認して配分</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-usage" aria-hidden="true"></span>
          <h4>03. 充電実績集計</h4>
          <p>充電量・回数・燃費を集計し<br />運行効率を算出</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-dashboard" aria-hidden="true"></span>
          <h4>04. 統合ダッシュボード</h4>
          <p>総充電量と主要指標を<br />一目で確認</p>
        </article>
      </div>
    `,
    fms: `
      <div class="fms-visual-cards">
        <article class="fms-visual-card">
          <span class="fms-card-icon is-ops" aria-hidden="true"></span>
          <h4>01. 車両記録管理</h4>
          <p>登録車両の運行記録と<br />整備履歴を統合管理</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-cost" aria-hidden="true"></span>
          <h4>02. 支出データ統合</h4>
          <p>経費・燃料費を統合し<br />コストの流れを可視化</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-profit" aria-hidden="true"></span>
          <h4>03. 路線損益分析</h4>
          <p>路線別の売上と支出を比較し<br />損益指標を算出</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-dashboard" aria-hidden="true"></span>
          <h4>04. カスタムダッシュボード</h4>
          <p>組織・取引先データを統合し<br />売上・支出を一目で確認</p>
        </article>
      </div>
    `,
    catchloc: `
      <div class="catchloc-visual-cards">
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-gps" aria-hidden="true"></span>
          <h4>01. GPS位置収集</h4>
          <p>車両GPS位置をリアルタイム収集し<br />運行フローを追跡</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-boarding" aria-hidden="true"></span>
          <h4>02. 乗車データ収集</h4>
          <p>乗降データを収集して<br />運行・需要データを統合</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-admin" aria-hidden="true"></span>
          <h4>03. 企業カスタマイズ</h4>
          <p>企業の運営方式に合わせて<br />柔軟にカスタム可能</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-analytics" aria-hidden="true"></span>
          <h4>04. ローデータ抽出</h4>
          <p>データをExcelで保存・抽出後<br />加工して主要指標を分析</p>
        </article>
      </div>
    `
  },
  zh: {
    shuttle: `
      <div class="shuttle-visual-cards">
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-app" aria-hidden="true"></span>
          <h4>01. 巴士专用应用</h4>
          <p>司机端接收位置信息并录入<br />乘客二维码标签</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-server" aria-hidden="true"></span>
          <h4>02. 服务器同步</h4>
          <p>位置记录与乘客信息<br />上传并保存到服务器</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-ticket" aria-hidden="true"></span>
          <h4>03. 票券签发/扫码</h4>
          <p>在应用中发券后由司机端<br />扫码完成乘车</p>
        </article>
        <span class="shuttle-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="shuttle-visual-card">
          <span class="shuttle-card-icon is-bus" aria-hidden="true"></span>
          <h4>04. 实时巴士查看</h4>
          <p>用户可实时查看<br />预约车辆当前位置</p>
        </article>
      </div>
    `,
    linx: `
      <div class="linx-visual-cards">
        <article class="linx-visual-card">
          <span class="linx-card-icon is-route" aria-hidden="true"></span>
          <h4>01. 线路创建/修改</h4>
          <p>创建新线路站点与路径<br />并灵活调整既有线路</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-merge" aria-hidden="true"></span>
          <h4>02. 重复分析/整合</h4>
          <p>分析重复站点与路径<br />并基于数据整合线路</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-path" aria-hidden="true"></span>
          <h4>03. 最优路径搜索</h4>
          <p>基于站点与路径数据<br />搜索最优运营路径</p>
        </article>
        <span class="linx-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="linx-visual-card">
          <span class="linx-card-icon is-time" aria-hidden="true"></span>
          <h4>04. 时间模拟</h4>
          <p>模拟新线路预计耗时<br />与运营流程</p>
        </article>
      </div>
    `,
    hydro: `
      <div class="hydro-visual-cards">
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-register" aria-hidden="true"></span>
          <h4>01. 氢能巴士信息录入</h4>
          <p>将氢能巴士与线路信息一并登记<br />并进行履历管理</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-station" aria-hidden="true"></span>
          <h4>02. 充电站信息确认</h4>
          <p>按线路匹配最近的氢能充电站<br />并完成分配</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-usage" aria-hidden="true"></span>
          <h4>03. 充电实绩统计</h4>
          <p>汇总充电量、次数与能耗<br />计算运营效率指标</p>
        </article>
        <span class="hydro-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="hydro-visual-card">
          <span class="hydro-card-icon is-dashboard" aria-hidden="true"></span>
          <h4>04. 统一仪表盘</h4>
          <p>总充电量与关键指标<br />一屏总览</p>
        </article>
      </div>
    `,
    fms: `
      <div class="fms-visual-cards">
        <article class="fms-visual-card">
          <span class="fms-card-icon is-ops" aria-hidden="true"></span>
          <h4>01. 车辆记录管理</h4>
          <p>统一管理公司车辆的运行记录<br />与维护履历</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-cost" aria-hidden="true"></span>
          <h4>02. 支出数据整合</h4>
          <p>整合经费与燃料支出<br />清晰掌握成本流向</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-profit" aria-hidden="true"></span>
          <h4>03. 线路损益分析</h4>
          <p>对比线路收入与支出<br />产出损益指标</p>
        </article>
        <span class="fms-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="fms-visual-card">
          <span class="fms-card-icon is-dashboard" aria-hidden="true"></span>
          <h4>04. 定制仪表盘</h4>
          <p>整合组织与合作方数据<br />一眼查看收支现状</p>
        </article>
      </div>
    `,
    catchloc: `
      <div class="catchloc-visual-cards">
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-gps" aria-hidden="true"></span>
          <h4>01. GPS位置采集</h4>
          <p>实时采集车辆GPS位置<br />追踪运营流程</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-boarding" aria-hidden="true"></span>
          <h4>02. 乘车数据采集</h4>
          <p>采集乘客上下车数据<br />整合运营与需求信息</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-admin" aria-hidden="true"></span>
          <h4>03. 企业定制化</h4>
          <p>可按企业运营方式<br />灵活定制功能</p>
        </article>
        <span class="catchloc-visual-arrow" aria-hidden="true">&gt;</span>
        <article class="catchloc-visual-card">
          <span class="catchloc-card-icon is-analytics" aria-hidden="true"></span>
          <h4>04. 原始数据导出</h4>
          <p>数据导出至Excel后再加工<br />用于核心指标分析</p>
        </article>
      </div>
    `
  }
};

function cloneDeep(value) {
  return JSON.parse(JSON.stringify(value));
}

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

function setHtml(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

function applyLanguage(lang) {
  const locale = I18N_UI[lang] ? lang : 'ko';
  currentLang = locale;
  localStorage.setItem(LANG_STORAGE_KEY, locale);
  document.documentElement.lang = LANG_HTML_CODE[locale] || 'ko';

  const ui = I18N_UI[locale];
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach((link, index) => { if (ui.nav[index]) link.textContent = ui.nav[index]; });
  const ticker = document.querySelectorAll('.ticker-link');
  ticker.forEach((link, index) => { if (ui.ticker[index]) link.textContent = ui.ticker[index]; });

  setText('.brand-copy', 'mobility technology partner');
  setText('.hero-overlay .section-kicker', ui.heroKicker);
  setHtml('.hero-message h1', ui.heroTitle);
  setText('.hero-note span', ui.heroFocus);
  setText('.hero-note p', ui.heroFocusText);
  setText('.hero-cta', ui.heroCta);
  setHtml('#capability .capability-open-head h2', ui.capabilityTitle);
  setHtml('#capability .capability-open-summary', ui.capabilitySummary);
  setText('#capability .capability-open-step.step-route strong', ui.capabilitySteps[0][0]);
  setText('#capability .capability-open-step.step-route span', ui.capabilitySteps[0][1]);
  setText('#capability .capability-open-step.step-control strong', ui.capabilitySteps[1][0]);
  setText('#capability .capability-open-step.step-control span', ui.capabilitySteps[1][1]);
  setText('#capability .capability-open-step.step-erp strong', ui.capabilitySteps[2][0]);
  setText('#capability .capability-open-step.step-erp span', ui.capabilitySteps[2][1]);
  setText('#capability .capability-open-step.step-fuel strong', ui.capabilitySteps[3][0]);
  setText('#capability .capability-open-step.step-fuel span', ui.capabilitySteps[3][1]);
  setText('.capability-open-focus-note', ui.focusNote);
  setText('.capability-open-core h3', ui.focusTitle);

  const insightArticles = document.querySelectorAll('.capability-open-insights article');
  insightArticles.forEach((article, idx) => {
    const set = ui.insights[idx];
    if (!set) return;
    const span = article.querySelector('span');
    const h3 = article.querySelector('h3');
    const p = article.querySelector('p');
    if (span) span.textContent = set[0];
    if (h3) h3.textContent = set[1];
    if (p) p.textContent = set[2];
  });
  setText('.capability-open-cta button', ui.capabilityCta);

  setText('#service-intro .section-head-copy .section-kicker', ui.serviceHeadKicker);
  setText('#service-intro .section-head-copy h2', ui.serviceHeadTitle);
  setText('#service-intro .section-head-copy .section-summary', ui.serviceHeadSummary);
  setText('.client-marquee-head .section-kicker', ui.clientsKicker);
  setText('.client-marquee-copy h3', ui.clientsTitle);
  setText('.client-marquee-copy p', ui.clientsDesc);

  setText('#company .service-trust-head .section-kicker', ui.trustKicker);
  setText('#company .service-trust-head h2', ui.trustTitle);
  const trustCards = document.querySelectorAll('#company .service-trust-card');
  trustCards.forEach((card, idx) => {
    const data = ui.trustCards[idx];
    if (!data) return;
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    if (h3) h3.textContent = data[0];
    if (p) p.textContent = data[1];
  });
  setText('#company .service-trust-cta button', ui.trustCta);
  setText('#company .service-trust-cta button span', '→');

  const footerLines = document.querySelectorAll('.footer-copy p');
  footerLines.forEach((line, idx) => {
    if (ui.footer[idx]) line.textContent = ui.footer[idx];
  });

  setText('.contact-panel-head .section-kicker', ui.contact.kicker);
  setText('#contact-title', ui.contact.title);
  setText('.contact-close', ui.contact.close);
  const formLabels = document.querySelectorAll('.contact-form .contact-field span, .contact-honeypot span');
  formLabels.forEach((label, idx) => {
    if (ui.contact.labels[idx]) label.textContent = ui.contact.labels[idx];
  });
  setText('.contact-submit', ui.contact.submit);
  if (contactStatus) contactStatus.textContent = ui.contact.statusDefault;

  setText('.detail-panel-head .section-kicker', ui.detail.kicker);
  setText('.detail-close', ui.detail.close);

  langButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === locale);
  });

  serviceAtlasMeta = cloneDeep(I18N_ATLAS_META[locale] || I18N_ATLAS_META.ko);
  const visual = I18N_VISUAL_MARKUP[locale] || I18N_VISUAL_MARKUP.ko;
  wonderShuttleVisualMarkup = visual.shuttle;
  wonderLinxVisualMarkup = visual.linx;
  wonderHydroVisualMarkup = visual.hydro;
  wonderFmsVisualMarkup = visual.fms;
  catchlocVisualMarkup = visual.catchloc;

  updateAtlasPreview(selectedAtlasKey, { animate: false });
  if (atlasDetailKey) {
    openAtlasDetailView(selectedAtlasKey, { keepPage: true });
  }
  if (openedKey) {
    renderDetail(openedKey);
    goToDetailPage(activePageIndex, true);
  }
  if (serviceAtlasPreviewBtn && !atlasDetailKey) {
    serviceAtlasPreviewBtn.textContent = ui.serviceDetailOpen;
  }
}

function updateAtlasVisual(key) {
  if (!serviceAtlasVisual) return;

  if (key === 'wonder-shuttle') {
    serviceAtlasVisual.classList.add('is-shuttle');
    serviceAtlasVisual.classList.remove('is-fms');
    serviceAtlasVisual.classList.remove('is-linx');
    serviceAtlasVisual.classList.remove('is-hydro');
    serviceAtlasVisual.classList.remove('is-catchloc');
    serviceAtlasVisual.innerHTML = wonderShuttleVisualMarkup;
    return;
  }

  if (key === 'wonder-linx') {
    serviceAtlasVisual.classList.add('is-linx');
    serviceAtlasVisual.classList.remove('is-shuttle');
    serviceAtlasVisual.classList.remove('is-fms');
    serviceAtlasVisual.classList.remove('is-hydro');
    serviceAtlasVisual.classList.remove('is-catchloc');
    serviceAtlasVisual.innerHTML = wonderLinxVisualMarkup;
    return;
  }

  if (key === 'wonder-hydro') {
    serviceAtlasVisual.classList.add('is-hydro');
    serviceAtlasVisual.classList.remove('is-shuttle');
    serviceAtlasVisual.classList.remove('is-linx');
    serviceAtlasVisual.classList.remove('is-fms');
    serviceAtlasVisual.classList.remove('is-catchloc');
    serviceAtlasVisual.innerHTML = wonderHydroVisualMarkup;
    return;
  }

  if (key === 'wonder-fms') {
    serviceAtlasVisual.classList.add('is-fms');
    serviceAtlasVisual.classList.remove('is-shuttle');
    serviceAtlasVisual.classList.remove('is-linx');
    serviceAtlasVisual.classList.remove('is-hydro');
    serviceAtlasVisual.classList.remove('is-catchloc');
    serviceAtlasVisual.innerHTML = wonderFmsVisualMarkup;
    return;
  }

  if (key === 'catchloc') {
    serviceAtlasVisual.classList.add('is-catchloc');
    serviceAtlasVisual.classList.remove('is-shuttle');
    serviceAtlasVisual.classList.remove('is-linx');
    serviceAtlasVisual.classList.remove('is-hydro');
    serviceAtlasVisual.classList.remove('is-fms');
    serviceAtlasVisual.innerHTML = catchlocVisualMarkup;
    return;
  }

  serviceAtlasVisual.classList.remove('is-hydro');
  serviceAtlasVisual.classList.remove('is-catchloc');
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
  const nextAccent = tickerAccentMap[key] || '#2380f1';
  serviceAtlasPreview.style.setProperty('--preview-accent', nextAccent);
  const sectionThemeTint = mixHexWithWhite(nextAccent, 0.92);
  const sectionThemeLine = mixHexWithWhite(nextAccent, 0.78);
  if (serviceAtlasSection) {
    serviceAtlasSection.style.setProperty('--section-theme-bg', sectionThemeTint);
    serviceAtlasSection.style.setProperty('--section-theme-line', sectionThemeLine);
  }
  if (serviceIntroShell) {
    serviceIntroShell.style.setProperty('--section-theme-bg', sectionThemeTint);
    serviceIntroShell.style.setProperty('--section-theme-line', sectionThemeLine);
  }
  if (serviceIntroRailDots.length) {
    serviceIntroRailDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === selectedAtlasIndex);
    });
  }
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
        const label = meta.pills[index] || '';
        pill.textContent = label ? `#${label}` : '';
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
        ${page.icon ? `<span class="atlas-detail-page-icon atlas-detail-page-icon--${escapeHtml(page.icon)}" aria-hidden="true"></span>` : ''}
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
    serviceAtlasPreviewBtn.textContent = I18N_UI[currentLang]?.serviceDetailClose || '닫기';
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
    serviceAtlasPreviewBtn.textContent = I18N_UI[currentLang]?.serviceDetailOpen || '자세히 보기';
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
    contactStatus.textContent = I18N_UI[currentLang]?.contact?.statusDefault || '전송 후 입력한 이메일로 회신됩니다.';
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
    contactStatus.textContent = I18N_UI[currentLang]?.contact?.statusSending || '전송 중...';
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
      throw new Error(result.error || I18N_UI[currentLang]?.contact?.statusError || '전송에 실패했습니다.');
    }

    if (contactStatus) {
      contactStatus.textContent = I18N_UI[currentLang]?.contact?.statusSuccess || '전송되었습니다. 확인 후 입력한 이메일로 회신드리겠습니다.';
    }
    contactForm.reset();
  } catch (error) {
    if (contactStatus) {
      contactStatus.textContent = error instanceof Error
        ? error.message
        : I18N_UI[currentLang]?.contact?.statusServerHint || '전송에 실패했습니다. 로컬 서버 실행 여부를 확인해 주세요.';
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
contactOpenButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    openContact();
  });
});
contactCloseTargets.forEach((target) => target.addEventListener('click', closeContact));
if (contactForm) {
  contactForm.addEventListener('submit', submitContactForm);
}
langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextLang = button.dataset.lang || 'ko';
    applyLanguage(nextLang);
  });
});

const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
applyLanguage(storedLang || 'ko');

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





