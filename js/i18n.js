const translations = {
  ko: {
    "nav.cta": "무료 상담", "nav.services": "서비스", "nav.countries": "지원 국가",
    "nav.pricing": "요금제", "nav.about": "회사 소개", "nav.faq": "FAQ", "nav.contact": "문의"
  },
  ja: {
    "nav.cta": "無料相談", "nav.services": "サービス", "nav.countries": "対応国",
    "nav.pricing": "料金", "nav.about": "会社概要", "nav.faq": "FAQ", "nav.contact": "お問い合わせ"
  },
  en: {
    "nav.cta": "Free Consultation", "nav.services": "Services", "nav.countries": "Countries",
    "nav.pricing": "Pricing", "nav.about": "About", "nav.faq": "FAQ", "nav.contact": "Contact"
  }
};

let currentLang = localStorage.getItem('b2b101-lang') || 'ko';

function applyTranslations(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('b2b101-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  document.querySelectorAll('.lang-btn, .footer-langs button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) applyTranslations(lang);
    });
  });
});
