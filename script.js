const serviceData = {
  'wonder-shuttle': {
    title: 'Wonder Shuttle',
    accent: '#32b154',
    pages: [
      { nav: 'Overview', eyebrow: 'Overview', title: 'One place for bus operations.', text: 'Real-time location, operating status, passenger flow, and dispatch information stay in one view.', list: ['Live location tracking', 'Operating status', 'Dispatch and boarding'] },
      { nav: 'Control', eyebrow: 'Control', title: 'Keep the screen simple for dispatch teams.', text: 'The layout puts the information operators use most often in front first.', list: ['Route management', 'Trip control', 'Usage summary'] },
      { nav: 'Data', eyebrow: 'Data', title: 'Records build faster decisions.', text: 'Operating logs and boarding history stay connected inside one system.', list: ['Boarding logs', 'Trip logs', 'Data accumulation'] }
    ]
  },
  'wonder-linx': {
    title: 'Wonder Linx',
    accent: '#2380f1',
    pages: [
      { nav: 'Overview', eyebrow: 'Overview', title: 'Route planning made sharper.', text: 'A planning tool centered on route analysis and optimized path calculation.', list: ['Route analysis', 'Path optimization', 'Travel time estimate'] },
      { nav: 'Comparison', eyebrow: 'Planning', title: 'Compare changes without losing the thread.', text: 'Existing routes can be revised and checked against other options quickly.', list: ['Route edits', 'Path comparison', 'Travel review'] },
      { nav: 'Forecast', eyebrow: 'Forecast', title: 'Read travel time before you move.', text: 'The tool turns calculations into something operators can act on quickly.', list: ['Scenario review', 'Time estimation', 'Decision support'] }
    ]
  },
  'wonder-hydro': {
    title: 'Wonder Hydro',
    accent: '#1b3479',
    pages: [
      { nav: 'Overview', eyebrow: 'Overview', title: 'Hydrogen charging operations in one screen.', text: 'A control tool for sites that need charging status and flow organized clearly.', list: ['Charging control', 'Status view', 'History tracking'] },
      { nav: 'Control', eyebrow: 'Control', title: 'Connect the operating flow.', text: 'The data and steps needed at the charging site stay linked instead of scattered.', list: ['Workflow alignment', 'Site monitoring', 'Integrated control'] },
      { nav: 'Log', eyebrow: 'Data', title: 'Keep records for later review.', text: 'Operation logs and status history remain available for management checks.', list: ['History records', 'Operation logs', 'Status review'] }
    ]
  },
  'wonder-fms': {
    title: 'Wonder FMS',
    accent: '#efbb45',
    pages: [
      { nav: 'Overview', eyebrow: 'Overview', title: 'One flow for charter bus management.', text: 'Operations, accounting, dispatch, and settlement stay aligned inside one ERP structure.', list: ['Operations', 'Dispatch', 'Settlement flow'] },
      { nav: 'ERP', eyebrow: 'ERP', title: 'Keep only the work that matters.', text: 'The system is shaped around the daily tasks teams use most often.', list: ['Practical structure', 'Unified workflow', 'Clear function set'] },
      { nav: 'Accounting', eyebrow: 'Accounting', title: 'Link operations and accounting naturally.', text: 'Dispatch data flows into settlement so teams can check the process in one line.', list: ['Dispatch data', 'Settlement info', 'Accounting sync'] }
    ]
  },
  'catchloc': {
    title: 'Catchloc',
    accent: '#e7437b',
    pages: [
      { nav: 'Overview', eyebrow: 'Overview', title: 'A unified GPS location solution.', text: 'Track vehicles and assets in real time from a single control layer.', list: ['Live GPS tracking', 'Real-time view', 'Movement history'] },
      { nav: 'Tracking', eyebrow: 'Tracking', title: 'More than a dot on a map.', text: 'Location data is handled as a trackable flow, not a static display.', list: ['Tracking flow', 'Location logs', 'Status awareness'] },
      { nav: 'Log', eyebrow: 'Log', title: 'Keep movement records visible.', text: 'Vehicle and asset movement history remains ready for later review.', list: ['Movement logs', 'Record review', 'Operational trace'] }
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
const tickerSections = Array.from(document.querySelectorAll('.solution-section[id]'));
const siteHeader = document.querySelector('.site-header');
const serviceNavSticky = document.querySelector('.service-nav-sticky');
const serviceRouteTrack = document.querySelector('.service-route-track');
const serviceRouteBus = document.querySelector('.service-route-bus');
const serviceRouteStops = Array.from(document.querySelectorAll('.service-route-stop'));

let openedKey = null;
let activePageIndex = 0;
let rafId = 0;
let tickerObserver = null;
let tickerFlashTimer = 0;
let serviceRailRaf = 0;
let serviceRailSnapTimer = 0;
let contactSubmitLock = false;
let detailWheelLock = false;
let detailWheelUnlockTimer = 0;
let routeDragState = null;
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
}

function setTickerActive(id) {
  if (!tickerLinks.length) return;
  tickerLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('is-active', isActive);
    link.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function applyTickerAccents() {
  tickerLinks.forEach((link) => {
    const targetId = link.getAttribute('href')?.slice(1);
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
  if (!serviceNavSticky || !tickerSections.length) return;

  const stopPositions = getServiceStopPositions();
  const activeSectionId = tickerSections[finalIndex]?.id || tickerSections[0].id;
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

function getDominantSectionIndex() {
  const viewportTop = 0;
  const viewportBottom = window.innerHeight;
  let bestIndex = 0;
  let bestVisible = -1;

  tickerSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const visibleTop = Math.max(rect.top, viewportTop);
    const visibleBottom = Math.min(rect.bottom, viewportBottom);
    const visible = Math.max(0, visibleBottom - visibleTop);

    if (visible > bestVisible) {
      bestVisible = visible;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function updateServiceRail(mode = 'continuous') {
  if (!serviceNavSticky || !tickerSections.length) return;

  const stopPositions = getServiceStopPositions();
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const scrollProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  const continuousPosition = scrollProgress * 100;
  const snappedIndex = getDominantSectionIndex();
  const isAtTop = window.scrollY <= 2;
  const isAtBottom = window.scrollY >= maxScroll - 2;
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

function scrollToTickerSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  setTickerActive(id);
  flashTickerSection(section);
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function syncTickerActive() {
  updateServiceRail('snap');
}

function setupTickerNavigation() {
  if (!tickerLinks.length || !tickerSections.length) return;

  applyTickerAccents();

  tickerLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      scrollToTickerSection(targetId);
    });
  });

  if ('IntersectionObserver' in window) {
    tickerObserver = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (!visibleEntries.length) return;

      const currentEntry = visibleEntries.sort((a, b) => {
        if (b.intersectionRatio !== a.intersectionRatio) {
          return b.intersectionRatio - a.intersectionRatio;
        }
        return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
      })[0];

      if (currentEntry?.target?.id) {
        setTickerActive(currentEntry.target.id);
      }
    }, {
      root: null,
      rootMargin: '-18% 0px -50% 0px',
      threshold: [0.25, 0.45, 0.65]
    });

    tickerSections.forEach((section) => tickerObserver.observe(section));
  }

  window.addEventListener('scroll', scheduleServiceRailUpdate, { passive: true });
  window.addEventListener('resize', scheduleServiceRailUpdate);

  updateServiceRail('snap');
}

function setupServiceBusDrag() {
  if (!serviceRouteBus || !serviceRouteTrack || !tickerSections.length) return;
  if (!window.matchMedia('(pointer: coarse)').matches && window.innerWidth > 760) return;

  const endDrag = () => {
    if (!routeDragState) return;

    const { position } = routeDragState;
    const nextIndex = getNearestServiceStopIndex(position);
    const targetId = tickerSections[nextIndex]?.id;

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
setupServiceBusDrag();
syncHeaderOffset();

document.addEventListener('keydown', (event) => {
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
  if (!overlay.hidden && openedKey) {
    const currentIndex = activePageIndex;
    renderDetail(openedKey);
    goToDetailPage(currentIndex, true);
  }
  syncHeaderOffset();
  scheduleServiceRailUpdate();
});




