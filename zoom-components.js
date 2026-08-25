/* ============================================================
   B2B101 — SHARED COMPONENTS (Zoom-style redesign)
   Edit NAV_HTML / FOOTER_HTML here ONCE — every page that has
   <div id="nav-placeholder"></div> and <div id="footer-placeholder"></div>
   plus <script src="zoom-components.js"></script> picks up the change
   automatically. Don't hand-edit the nav or footer inside individual
   page files — edit it here instead.
   ============================================================ */

var NAV_HTML = `
<nav class="nav" id="nav">
  <div class="container nav-inner">
    <a href="index.html" class="logo">B2B<span>101</span></a>
    <ul class="nav-links">
      <li><span data-mega>Services <span class="nav-arrow">▾</span></span></li>
      <li><span data-mega>Benefits &amp; Solutions <span class="nav-arrow">▾</span></span></li>
      <li><a href="contact.html">Pricing</a></li>
      <li><span data-mega>Company <span class="nav-arrow">▾</span></span></li>
    </ul>
    <div class="nav-right">
      <a href="contact.html" class="btn btn-grad btn-sm">Free Consultation</a>
      <button class="menu-btn" id="menuToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- ANNOUNCE BAR — sits just below the nav, scrolls away naturally while the nav stays -->
<div class="announce" id="announce">
  <span>Global company formation, card issuance, and payments — under one roof</span>
  <a href="contact.html" class="pill">Start a Consultation →</a>
</div>

<!-- MEGA MENU — doubles as the mobile nav (it's the only menu surface once the screen narrows,
     so every top-level destination — including Pricing — has to be reachable from in here) -->
<div class="mega-backdrop" id="megaBackdrop"></div>
<div class="mega" id="mega">
  <div class="container mega-body">
    <div class="mega-side">
      <div class="mega-side-item active" data-panel="p1">Popular Services <span>›</span></div>
      <div class="mega-side-item" data-panel="p2">Company Formation <span>›</span></div>
      <div class="mega-side-item" data-panel="p3">Payments &amp; Finance <span>›</span></div>
      <div class="mega-side-item" data-panel="p5">Benefits &amp; Solutions <span>›</span></div>
      <div class="mega-side-item" data-panel="p6">Company <span>›</span></div>
      <div class="mega-side-item" data-panel="p4">Support &amp; Resources <span>›</span></div>
      <a href="contact.html" class="mega-side-item mega-side-link">Pricing</a>
    </div>
    <div class="mega-content">
      <div class="mega-panel active" id="p1">
        <h4>Popular Services</h4>
        <p class="desc">The services B2B101 clients ask for most.</p>
        <div class="mega-icon-grid">
          <a href="formation.html" class="mega-icon-item"><div class="ic">🏢</div><span>Company Formation</span></a>
          <a href="banking-card.html" class="mega-icon-item"><div class="ic">💳</div><span>Card Issuance</span></a>
          <a href="banking-card.html" class="mega-icon-item"><div class="ic">🏦</div><span>Bank Account Opening</span></a>
          <a href="payment-network.html" class="mega-icon-item"><div class="ic">🔗</div><span>Payment Network Affiliation</span></a>
          <a href="licensing.html" class="mega-icon-item"><div class="ic">📜</div><span>Financial Licensing</span></a>
          <a href="ready-made.html" class="mega-icon-item"><div class="ic">🏛️</div><span>Ready-Made Companies</span></a>
        </div>
      </div>
      <div class="mega-panel" id="p2">
        <h4>Company Formation</h4>
        <p class="desc">Everything to get your company registered and running.</p>
        <div class="mega-icon-grid">
          <a href="formation.html" class="mega-icon-item"><div class="ic">🏢</div><span>Company Formation</span></a>
          <a href="formation.html" class="mega-icon-item"><div class="ic">📊</div><span>Compare Jurisdictions</span></a>
          <a href="ready-made.html" class="mega-icon-item"><div class="ic">🏛️</div><span>Ready-Made Companies</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">🛡️</div><span>Compliance</span></a>
        </div>
      </div>
      <div class="mega-panel" id="p3">
        <h4>Payments &amp; Finance</h4>
        <p class="desc">Banking, cards, and payment infrastructure for global business.</p>
        <div class="mega-icon-grid">
          <a href="banking-card.html" class="mega-icon-item"><div class="ic">💳</div><span>Card Issuance</span></a>
          <a href="banking-card.html" class="mega-icon-item"><div class="ic">🏦</div><span>Bank Account Opening</span></a>
          <a href="payment-network.html" class="mega-icon-item"><div class="ic">🔗</div><span>Payment Network Affiliation</span></a>
          <a href="licensing.html" class="mega-icon-item"><div class="ic">📜</div><span>Financial Licensing</span></a>
          <a href="banking-card.html" class="mega-icon-item"><div class="ic">💱</div><span>Currency Exchange</span></a>
        </div>
      </div>
      <div class="mega-panel" id="p5">
        <h4>Benefits &amp; Solutions</h4>
        <p class="desc">Membership perks and solutions for larger organizations.</p>
        <div class="mega-icon-grid">
          <a href="#" class="mega-icon-item"><div class="ic">🎁</div><span>Membership Benefits</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">🏛️</div><span>Institutional Services</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">🤝</div><span>Referral Program</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">💲</div><span>Pricing</span></a>
        </div>
      </div>
      <div class="mega-panel" id="p6">
        <h4>Company</h4>
        <p class="desc">Who we are and how we operate.</p>
        <div class="mega-icon-grid">
          <a href="#" class="mega-icon-item"><div class="ic">🏢</div><span>About Us</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">🛡️</div><span>Security System</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">📜</div><span>Compliance</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">💼</div><span>Careers</span></a>
        </div>
      </div>
      <div class="mega-panel" id="p4">
        <h4>Support &amp; Resources</h4>
        <p class="desc">Get help, find answers, or get in touch.</p>
        <div class="mega-icon-grid">
          <a href="contact.html" class="mega-icon-item"><div class="ic">✉️</div><span>Contact Us</span></a>
          <a href="faq.html" class="mega-icon-item"><div class="ic">❓</div><span>FAQ</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">🎧</div><span>Support</span></a>
          <a href="#" class="mega-icon-item"><div class="ic">🤝</div><span>Partnerships</span></a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

var FOOTER_HTML = `
<footer class="footer">
  <div class="partner-strip">
    <p class="label">Trusted Standards &amp; Partners</p>
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span class="partner-badge"><span class="dot"></span>Delaware Registered Agent</span>
        <span class="partner-badge"><span class="dot"></span>PCI DSS Compliant</span>
        <span class="partner-badge"><span class="dot"></span>GDPR Ready</span>
        <span class="partner-badge"><span class="dot"></span>256-bit SSL Encryption</span>
        <span class="partner-badge"><span class="dot"></span>VISA Network Partner</span>
        <span class="partner-badge"><span class="dot"></span>Mastercard Network Partner</span>
        <span class="partner-badge"><span class="dot"></span>SOC 2 Aligned Infrastructure</span>
        <span class="partner-badge"><span class="dot"></span>Delaware Registered Agent</span>
        <span class="partner-badge"><span class="dot"></span>PCI DSS Compliant</span>
        <span class="partner-badge"><span class="dot"></span>GDPR Ready</span>
        <span class="partner-badge"><span class="dot"></span>256-bit SSL Encryption</span>
        <span class="partner-badge"><span class="dot"></span>VISA Network Partner</span>
        <span class="partner-badge"><span class="dot"></span>Mastercard Network Partner</span>
        <span class="partner-badge"><span class="dot"></span>SOC 2 Aligned Infrastructure</span>
      </div>
    </div>
  </div>
  <div class="container footer-cols">
    <div class="footer-brand">
      <a href="index.html" class="logo">B2B<span>101</span></a>
      <p>End-to-end global business formation, card issuance, and payment infrastructure — all in one platform.</p>
      <div class="footer-social">
        <a href="#">IG</a><a href="#">IN</a><a href="#">X</a><a href="#">YT</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <a href="formation.html">Company Formation</a>
      <a href="banking-card.html">Card Issuance</a>
      <a href="banking-card.html">Bank Account Opening</a>
      <a href="payment-network.html">Payment Network Affiliation</a>
      <a href="licensing.html">Financial Licensing</a>
      <a href="ready-made.html">Ready-Made Companies</a>
    </div>
    <div class="footer-col">
      <h5>Solutions</h5>
      <a href="#">Membership Benefits</a>
      <a href="#">Institutional Services</a>
      <a href="#">Referral Program</a>
      <a href="#">Pricing</a>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <a href="#">About Us</a>
      <a href="#">Security System</a>
      <a href="#">Compliance</a>
      <a href="#">Careers</a>
    </div>
    <div class="footer-col">
      <h5>Resources</h5>
      <a href="#">Support</a>
      <a href="#">FAQ</a>
      <a href="contact.html">Contact Us</a>
      <a href="#">Partnerships</a>
    </div>
  </div>
  <div class="container footer-bottom">
    <div class="legal">
      <span>© 2025 B2B101. All rights reserved.</span>
      <a href="#">Privacy Notice</a>
      <a href="#">Terms of Use</a>
      <a href="#">Cookie Notice</a>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', function () {
  var navPh = document.getElementById('nav-placeholder');
  var footerPh = document.getElementById('footer-placeholder');
  if (navPh) navPh.outerHTML = NAV_HTML;
  if (footerPh) footerPh.outerHTML = FOOTER_HTML;

  // Highlight the current page's link in the nav/footer, if it matches
  var here = location.pathname.split('/').pop();
  document.querySelectorAll('.footer-col a, .mega-icon-item').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && href === here) a.classList.add('current');
  });

  // ---- Nav: fixed from frame one; only background/text swap once you scroll a bit ----
  var nav = document.getElementById('nav');
  var mega = document.getElementById('mega');
  var megaBackdrop = document.getElementById('megaBackdrop');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // ---- Mega menu open/close ----
  var menuToggle = document.getElementById('menuToggle');
  var scrollLockY = 0;
  function setMegaOpen(open) {
    mega.classList.toggle('open', open);
    megaBackdrop.classList.toggle('open', open);
    if (menuToggle) {
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    // Lock the page behind the menu so it can't scroll on mobile while the overlay is open.
    // Only do this at the breakpoint where the hamburger becomes the sole nav (<=980px) —
    // on desktop the mega menu is just a dropdown under the nav, and the page should keep
    // scrolling normally while it's open.
    if (open && window.innerWidth <= 980) {
      scrollLockY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = (-scrollLockY) + 'px';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else if (!open && document.body.style.position === 'fixed') {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollLockY);
    }
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      mega.scrollTop = 0;
      setMegaOpen(!mega.classList.contains('open'));
    });
  }
  document.querySelectorAll('[data-mega]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      mega.scrollTop = 0;
      setMegaOpen(!mega.classList.contains('open'));
    });
  });
  megaBackdrop.addEventListener('click', function () { setMegaOpen(false); });
  document.addEventListener('click', function (e) {
    if (mega.classList.contains('open') && !mega.contains(e.target)) setMegaOpen(false);
  });
  mega.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMegaOpen(false);
  });

  // ---- Mega menu: left sidebar switches which panel shows on the right ----
  var sideItems = mega.querySelectorAll('.mega-side-item[data-panel]');
  sideItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var target = item.getAttribute('data-panel');
      sideItems.forEach(function (i) { i.classList.remove('active'); });
      item.classList.add('active');
      mega.querySelectorAll('.mega-panel').forEach(function (p) {
        p.classList.toggle('active', p.id === target);
      });
    });
  });

  // ---- Scroll-reveal for any .fade-up element on the page ----
  var faders = document.querySelectorAll('.fade-up');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .15 });
  faders.forEach(function (el) { io.observe(el); });

  // ---- Auto-cycle any hero photo slideshow (only runs if photos have been added) ----
  document.querySelectorAll('.hero-slideshow').forEach(function (wrap) {
    var slides = wrap.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 3000);
  });

  // ---- Number count-up on scroll (any element with data-count) ----
  var countEls = document.querySelectorAll('[data-count]');
  if (countEls.length && 'IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        countIO.unobserve(el);
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1200;
        var start = performance.now();
        function tick(now) {
          var p = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: .2, rootMargin: '0px 0px -10% 0px' });
    countEls.forEach(function (el) { countIO.observe(el); });
  }

  // ---- FAQ accordion (open/close, plus category filter if present) ----
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      item.classList.toggle('open', !wasOpen);
      a.style.maxHeight = wasOpen ? '' : a.scrollHeight + 'px';
    });
  });
  var faqCats = document.querySelectorAll('.faq-cat');
  if (faqCats.length) {
    faqCats.forEach(function (cat) {
      cat.addEventListener('click', function () {
        faqCats.forEach(function (c) { c.classList.remove('active'); });
        cat.classList.add('active');
        var group = cat.getAttribute('data-cat');
        document.querySelectorAll('.faq-item').forEach(function (item) {
          var show = group === 'all' || item.getAttribute('data-cat') === group;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ---- Subtle, restrained interaction layer ----
  // 1) Hero blobs drift very slightly toward the cursor (a few px max — not a full parallax scene)
  var blobs = document.querySelectorAll('.hero-blobs .blob');
  if (blobs.length) {
    document.addEventListener('mousemove', function (e) {
      var xRatio = (e.clientX / window.innerWidth - .5);
      var yRatio = (e.clientY / window.innerHeight - .5);
      blobs.forEach(function (b, i) {
        var strength = 10 + i * 6; // px, kept small on purpose
        b.style.transform = 'translate(' + (xRatio * strength) + 'px,' + (yRatio * strength) + 'px)';
      });
    });
  }

  // 2) Cards tilt a couple of degrees toward the cursor while hovered — capped, so it stays subtle
  var tiltEls = document.querySelectorAll('.pcard, .icon-panel, .value-card, .listing-card, .net-card, .step-card');
  tiltEls.forEach(function (el) {
    el.style.transformStyle = 'preserve-3d';
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - .5;
      var py = (e.clientY - r.top) / r.height - .5;
      var max = 3.5; // degrees — deliberately small
      el.style.transform = 'perspective(600px) rotateX(' + (-py * max) + 'deg) rotateY(' + (px * max) + 'deg) translateY(-2px)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transform = '';
    });
  });

  // 3) Hero background drifts a few px on scroll (very light parallax, not a full scene shift).
  //    Also applies to any standalone .parallax-img elements elsewhere on the page (e.g. the
  //    contact page's photo band) — each one drifts independently based on its own scroll position.
  var heroBg = document.querySelector('.hero-blobs, .hero-slideshow');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      var y = Math.min(window.scrollY, 400);
      heroBg.style.transform = 'translateY(' + (y * 0.12) + 'px)';
    });
  }
  var parallaxImgs = document.querySelectorAll('.parallax-img');
  if (parallaxImgs.length) {
    var onParallaxScroll = function () {
      parallaxImgs.forEach(function (img) {
        var rect = img.parentElement.getBoundingClientRect();
        var progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        var offset = Math.max(-40, Math.min(40, (progress - 0.5) * 80));
        img.style.transform = 'translateY(' + offset + 'px)';
      });
    };
    window.addEventListener('scroll', onParallaxScroll);
    onParallaxScroll();
  }
});
