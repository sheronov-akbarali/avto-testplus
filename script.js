/* ============================================================
   AVTOTEST PLUS — script.js
   Clean, modular, well-structured JavaScript
   ============================================================ */

"use strict";

/* ==================== TRANSLATIONS ==================== */
const translations = {
  uz: {
    nav_features: "Xususiyatlar",
    nav_screenshots: "Galereya",
    nav_how: "Qanday ishlaydi",
    nav_about: "Dasturchi",
    nav_download: "Yuklab olish",
    hero_title: "AvtoTest <span>Plus</span>",
    hero_subtitle:
      "Haydovchilik imtihoniga tayyorlanish uchun eng yaxshi ilova",
    hero_desc:
      "Rasmiy o'quv dasturi asosida, bepul va offline rejimda ishlaydi. Har bir savolga batafsil izoh berilgan.",
    btn_get: "Olish",
    btn_learn: "Ko'proq bilish",
    stat_users: "Foydalanuvchi",
    stat_questions: "Savol",
    stat_rating: "Reyting",
    badge_correct: "To'g'ri!",
    badge_fast: "Tez javob",
    features_tag: "Xususiyatlar",
    features_title: "Nima uchun AvtoTest Plus?",
    features_subtitle: "Imtihonga tayyorlanishning eng samarali usuli",
    feat1_title: "Mavzular bo'yicha testlar",
    feat1_desc:
      "Har bir mavzu bo'yicha alohida testlar. Zaif tomonlaringizni aniqlang va mustahkamlang.",
    feat2_title: "Rasmiy o'quv dasturi",
    feat2_desc:
      "O'zbekiston YHQ rasmiy o'quv dasturiga asoslangan savollar va javoblar.",
    feat3_title: "Statistik tahlil",
    feat3_desc:
      "Har bir test natijangizni kuzating. Grafik ko'rinishda taraqqiyotingizni ko'ring.",
    feat4_title: "Har bir javobga izoh",
    feat4_desc:
      "Noto'g'ri javob berganingizda tushuntirish beriladi. Xatolardan o'rganasiz.",
    feat5_title: "Haqiqiy imtihonga yaqin",
    feat5_desc:
      "Timer, tasodifiy savollar – haqiqiy imtihon sharoitini his eting.",
    feat6_title: "Offline rejim",
    feat6_desc: "Internet bo'lmasa ham ishlaydi. Istalgan joyda o'qing.",
    screenshots_tag: "Galereya",
    screenshots_title: "Ilova ko'rinishi",
    screenshots_subtitle: "Qulay va zamonaviy interfeys",
    screenshots_home: "Bosh sahifa",
    screenshots_test: "Test jarayoni",
    screenshots_results: "Natija sahifasi",
    screenshots_stats: "Statistika",
    screenshots_search: "Qidiruv",
    how_tag: "Qo'llanma",
    how_title: "Qanday ishlaydi?",
    how_subtitle: "3 oddiy qadamda imtihonga tayyorlanishni boshlang",
    step1_title: "Ilovani yuklab oling",
    step1_desc:
      "Google Play'dan AvtoTest Plus ilovasini bepul yuklab oling va o'rnating.",
    step2_title: "Testlarni ishlang",
    step2_desc:
      "Mavzular bo'yicha yoki umumiy test rejimini tanlang va savollarga javob bering.",
    step3_title: "Natijangizni kuzating",
    step3_desc:
      "Har kunlik natijalaringizni ko'ring, zaif tomonlaringizni mustahkamlang.",
    about_tag: "Dasturchi",
    about_title: "Kimlar tomonidan yaratilgan?",
    dev_title: "Android Developer & Flutter Developer",
    dev_bio:
      "3 yillik tajribaga ega Android dasturchisi. Bir nechta ilovalar yaratgan va Google Play'da 100+ yuklab olishga erishgan. AvtoTest Plus o'zbek haydovchilikga tayorlanayotganlar uchun maxsus yaratilgan.",
    dev_contact: "Dasturchi bilan bog'lanish",
    cta_rating_label: "– 10+ baho",
    cta_title: "Bugun tayyorlanishni boshlang",
    cta_desc: "Kuplab o'quvchilar bilan qo'shiling. Bepul yuklab oling.",
    btn_available: "Mavjud",
    cta_google_play: "Google Play da",
    cta_free: "Bepul",
    cta_offline: "Offline",
    cta_noads: "Reklama yo'q",
    footer_tagline:
      "Haydovchilik imtihoniga tayyorlanishning eng yaxshi yo'li.",
    footer_app: "Ilova",
    footer_support: "Yordam",
    footer_contact: "Bog'lanish",
    footer_copy: "© 2026 AvtoTest Plus. Barcha huquqlar himoyalangan.",
  },

  uz_cyrl: {
    nav_features: "Хусусиятлар",
    nav_screenshots: "Галерея",
    nav_how: "Қандай ишлайди",
    nav_about: "Дастурчи",
    nav_download: "Юклаб олиш",
    hero_title: "AvtoTest <span>Plus</span>",
    hero_subtitle: "Ҳайдовчилик имтиҳонига тайёрланиш учун энг яхши илова",
    hero_desc:
      "Расмий ўқув дастури асосида, бепул ва оффлайн режимда ишлайди. Ҳар бир саволга батафсил изоҳ берилган.",
    btn_get: "Олиш",
    btn_learn: "Кўпроқ билиш",
    stat_users: "Фойдаланувчи",
    stat_questions: "Савол",
    stat_rating: "Рейтинг",
    badge_correct: "Тўғри!",
    badge_fast: "Тез жавоб",
    features_tag: "Хусусиятлар",
    features_title: "Нима учун AvtoTest Plus?",
    features_subtitle: "Имтиҳонга тайёрланишнинг энг самарали усули",
    feat1_title: "Мавзулар бўйича тестлар",
    feat1_desc:
      "Ҳар бир мавзу бўйича алоҳида тестлар. Заиф томонларингизни аниқланг ва мустаҳкамланг.",
    feat2_title: "Расмий ўқув дастури",
    feat2_desc:
      "Ўзбекистон ЙҲҚ расмий ўқув дастурига асосланган саволлар ва жавоблар.",
    feat3_title: "Статистик таҳлил",
    feat3_desc:
      "Ҳар бир тест натижангизни кузатинг. График кўринишда тараққиётингизни кўринг.",
    feat4_title: "Ҳар бир жавобга изоҳ",
    feat4_desc:
      "Нотўғри жавоб берганингизда тушунтириш берилади. Хатолардан ўрганасиз.",
    feat5_title: "Ҳақиқий имтиҳонга яқин",
    feat5_desc:
      "Таймер, тасодифий саволлар – ҳақиқий имтиҳон шароитини ҳис этинг.",
    feat6_title: "Оффлайн режим",
    feat6_desc: "Интернет бўлмаса ҳам ишлайди. Истаган жойда ўқинг.",
    screenshots_tag: "Галерея",
    screenshots_title: "Илова кўриниши",
    screenshots_subtitle: "Қулай ва замонавий интерфейс",
    screenshots_home: "Бош саҳифа",
    screenshots_test: "Тест жараёни",
    screenshots_results: "Натижа саҳифаси",
    screenshots_stats: "Статистика",
    screenshots_search: "Қидирув",
    how_tag: "Қўлланма",
    how_title: "Қандай ишлайди?",
    how_subtitle: "3 оддий қадамда имтиҳонга тайёрланишни бошланг",
    step1_title: "Иловани юклаб олинг",
    step1_desc:
      "Google Play'дан AvtoTest Plus иловасини бепул юклаб олинг ва ўрнатинг.",
    step2_title: "Тестларни ишланг",
    step2_desc:
      "Мавзулар бўйича ёки умумий тест режимини танланг ва саволларга жавоб беринг.",
    step3_title: "Натижангизни кузатинг",
    step3_desc:
      "Ҳар кунлик натижаларингизни кўринг, заиф томонларингизни мустаҳкамланг.",
    about_tag: "Дастурчи",
    about_title: "Кимлар томонидан яратилган?",
    dev_title: "Android Дастурчи & Flutter Дастурчи",
    dev_bio:
      "3 йиллик тажрибага эга Android дастурчиси. Бир нечта иловалар яратган ва Google Play'да 100+ юклаб олишга эришган. AvtoTest Plus ўзбек ҳайдовчиликга тайорланаётганлар учун махсус яратилган.",
    dev_contact: "Дастурчи билан боғланиш",
    cta_rating_label: "– 10+ баҳо",
    cta_title: "Бугун тайёрланишни бошланг",
    cta_desc: "Куплаб ўқувчилар билан қўшилинг. Бепул юклаб олинг.",
    btn_available: "Мавжуд",
    cta_google_play: "Google Play да",
    cta_free: "Бепул",
    cta_offline: "Оффлайн",
    cta_noads: "Реклама йўқ",
    footer_tagline: "Ҳайдовчилик имтиҳонига тайёрланишнинг энг яхши йўли.",
    footer_app: "Илова",
    footer_support: "Ёрдам",
    footer_contact: "Боғланиш",
    footer_copy: "© 2026 AvtoTest Plus. Барча ҳуқуқлар ҳимояланган.",
  },

  ru: {
    nav_features: "Возможности",
    nav_screenshots: "Галерея",
    nav_how: "Как работает",
    nav_about: "Разработчик",
    nav_download: "Скачать",
    hero_title: "AvtoTest <span>Plus</span>",
    hero_subtitle: "Лучшее приложение для подготовки к экзамену по вождению",
    hero_desc:
      "На основе официальной учебной программы, работает бесплатно и оффлайн. К каждому вопросу дано подробное объяснение.",
    btn_get: "Получить",
    btn_learn: "Узнать больше",
    stat_users: "Пользователей",
    stat_questions: "Вопросов",
    stat_rating: "Рейтинг",
    badge_correct: "Верно!",
    badge_fast: "Быстрый ответ",
    features_tag: "Возможности",
    features_title: "Почему AvtoTest Plus?",
    features_subtitle: "Самый эффективный способ подготовки к экзамену",
    feat1_title: "Тесты по темам",
    feat1_desc:
      "Отдельные тесты по каждой теме. Определите и укрепите свои слабые стороны.",
    feat2_title: "Официальная программа",
    feat2_desc:
      "Вопросы и ответы на основе официальной программы ГАИ Узбекистана.",
    feat3_title: "Статистический анализ",
    feat3_desc:
      "Отслеживайте результаты каждого теста. Смотрите прогресс в виде графиков.",
    feat4_title: "Пояснение к каждому ответу",
    feat4_desc:
      "При неверном ответе даётся объяснение. Учитесь на своих ошибках.",
    feat5_title: "Близко к реальному экзамену",
    feat5_desc:
      "Таймер, случайные вопросы – почувствуйте условия настоящего экзамена.",
    feat6_title: "Оффлайн режим",
    feat6_desc: "Работает без интернета. Учитесь в любом месте.",
    screenshots_tag: "Галерея",
    screenshots_title: "Внешний вид приложения",
    screenshots_subtitle: "Удобный и современный интерфейс",
    screenshots_home: "Главная",
    screenshots_test: "Процесс теста",
    screenshots_results: "Страница результата",
    screenshots_stats: "Статистика",
    screenshots_search: "Поиск",
    how_tag: "Руководство",
    how_title: "Как это работает?",
    how_subtitle: "Начните подготовку к экзамену за 3 простых шага",
    step1_title: "Скачайте приложение",
    step1_desc:
      "Бесплатно скачайте AvtoTest Plus из Google Play и установите его.",
    step2_title: "Проходите тесты",
    step2_desc:
      "Выберите режим по темам или общий тест и отвечайте на вопросы.",
    step3_title: "Следите за результатами",
    step3_desc:
      "Просматривайте ежедневные результаты, укрепляйте слабые стороны.",
    about_tag: "Разработчик",
    about_title: "Кто создал это приложение?",
    dev_title: "Android Разработчик & Flutter Разработчик",
    dev_bio:
      "Android-разработчик с 3-летним опытом. Создал несколько приложений и достиг 100+ загрузок в Google Play. AvtoTest Plus создан специально для тех, кто готовится к получению водительских прав в Узбекистане.",
    dev_contact: "Связаться с разработчиком",
    cta_rating_label: "– 10+ отзывов",
    cta_title: "Начните подготовку сегодня",
    cta_desc: "Присоединяйтесь к тысячам учащихся. Скачайте бесплатно.",
    btn_available: "Доступно",
    cta_google_play: "в Google Play",
    cta_free: "Бесплатно",
    cta_offline: "Оффлайн",
    cta_noads: "Без рекламы",
    footer_tagline: "Лучший способ подготовки к экзамену по вождению.",
    footer_app: "Приложение",
    footer_support: "Поддержка",
    footer_contact: "Связаться",
    footer_copy: "© 2026 AvtoTest Plus. Все права защищены.",
  },
};

/* ==================== LANGUAGE SWITCHER ==================== */
let currentLang = localStorage.getItem("avtotest_lang") || "uz";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("avtotest_lang", lang);
  // React komponentlari ishlatishi uchun global ga chiqaramiz
  window.applyLanguage = applyLanguage;

  const t = translations[lang] || translations.uz;

  // Update all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update current language label
  const currentLangEl = document.getElementById("currentLang");
  if (currentLangEl) {
    const labels = { uz: "UZ", uz_cyrl: "УЗ", ru: "RU" };
    currentLangEl.textContent = labels[lang] || "UZ";
  }

  // Mark active language option
  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update mobile gallery labels
  updateMobileGalleryLabel();
}

function initLanguageSwitcher() {
  const langBtn = document.getElementById("langBtn");
  const langSwitcher = document.getElementById("langSwitcher");
  const langDropdown = document.getElementById("langDropdown");

  if (!langBtn || !langSwitcher) return;

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove("open");
    }
  });

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
      langSwitcher.classList.remove("open");
    });
  });

  // Apply saved language
  applyLanguage(currentLang);
}

/* ==================== THEME ==================== */
let isDark = localStorage.getItem("avtotest_theme") === "dark";

function applyTheme(dark) {
  isDark = dark;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  localStorage.setItem("avtotest_theme", dark ? "dark" : "light");

  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.className = dark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

function initTheme() {
  // Also check system preference if no saved preference
  if (!localStorage.getItem("avtotest_theme")) {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme(isDark);

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => applyTheme(!isDark));
  }
}

/* ==================== NAVBAR ==================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const scrollTopBtn = document.getElementById("scrollTop");

  // Scroll-based effects
  const handleScroll = () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
    if (scrollTopBtn)
      scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Hamburger menu
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }

  // Scroll to top button
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ==================== SECTION NAV DOTS ==================== */
function initSectionNav() {
  const dots = document.querySelectorAll(".snav-dot");
  const sections = document.querySelectorAll("section[id]");

  if (!dots.length || !sections.length) return;

  // Click to scroll
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const target = document.getElementById(dot.dataset.target);
      if (target) {
        const navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-h",
          ),
        );
        const top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // IntersectionObserver to update active dot
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          dots.forEach((dot) => {
            dot.classList.toggle("active", dot.dataset.target === id);
          });
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-10% 0px -55% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==================== ACTIVE NAV LINKS ==================== */
function initActiveNavLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute("href").replace("#", "");
            link.classList.toggle("active", href === id);
          });
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: "-10% 0px -50% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==================== SCROLL REVEAL ==================== */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ==================== DESKTOP SCREENSHOT SLIDER ==================== */
function initDesktopSlider() {
  const track = document.getElementById("sliderTrack");
  const items = document.querySelectorAll(".screenshot-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsWrap = document.getElementById("sliderDots");

  if (!track || !items.length || !dotsWrap) return;

  let currentIndex = 0;

  // Create dots
  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  // Click on any screenshot item → go to it
  items.forEach((item, i) => {
    item.addEventListener("click", () => goToSlide(i));
  });

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    updateSlider();
  }

  function updateSlider() {
    const GAP = 20;
    const ITEM_W = 200; // fixed CSS width, not offsetWidth (scale doesn't affect layout width)

    // Active class on items
    items.forEach((item, i) =>
      item.classList.toggle("active", i === currentIndex),
    );

    // Active class on dots
    const dots = dotsWrap.querySelectorAll(".slider-dot");
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentIndex),
    );

    // Center the active item in the viewport
    // track starts at padding-left: 20px inside slider-viewport
    const viewportW = track.parentElement.offsetWidth;
    const trackPad = 20; // matches CSS padding: 0 20px on slider-track
    const itemStep = ITEM_W + GAP;

    // Position of active item center from track start (including left padding)
    const activeCenterFromTrackStart = trackPad + currentIndex * itemStep + ITEM_W / 2;

    // We want activeCenterFromTrackStart + offset = viewportW / 2
    const offset = viewportW / 2 - activeCenterFromTrackStart;

    track.style.transform = `translateX(${offset}px)`;

    // Button states
    if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? "0.4" : "1";
    if (nextBtn)
      nextBtn.style.opacity =
        currentIndex === items.length - 1 ? "0.4" : "1";
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) goToSlide(currentIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentIndex < items.length - 1) goToSlide(currentIndex + 1);
    });
  }

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && currentIndex > 0) goToSlide(currentIndex - 1);
    if (e.key === "ArrowRight" && currentIndex < items.length - 1)
      goToSlide(currentIndex + 1);
  });

  window.addEventListener("resize", updateSlider);
  updateSlider();
}

/* ==================== MOBILE GALLERY ==================== */
const mobileGalleryLabels = {
  0: "screenshots_home",
  1: "screenshots_test",
  2: "screenshots_results",
  3: "screenshots_stats",
  4: "screenshots_search",
};
let activeMobileIndex = 0;

function updateMobileGalleryLabel() {
  const labelEl = document.getElementById("mgActiveLabel");
  const dots = document.querySelectorAll(".mg-dot");
  const items = document.querySelectorAll(".mg-item");
  if (!labelEl) return;

  const t = translations[currentLang] || translations.uz;
  const key = mobileGalleryLabels[activeMobileIndex];
  labelEl.textContent = t[key] || "";

  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === activeMobileIndex),
  );
  items.forEach((item, i) =>
    item.classList.toggle("active", i === activeMobileIndex),
  );
}

function initMobileGallery() {
  const scrollEl = document.getElementById("mobileGalleryScroll");
  const dots = document.querySelectorAll(".mg-dot");
  const items = document.querySelectorAll(".mg-item");

  if (!scrollEl) return;

  // Scroll event — detect active item using snap positions
  let scrollTimer = null;
  scrollEl.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const containerCenter = scrollEl.scrollLeft + scrollEl.offsetWidth / 2;
        let closestIndex = 0;
        let closestDist = Infinity;

        items.forEach((item, i) => {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const dist = Math.abs(containerCenter - itemCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
          }
        });

        if (closestIndex !== activeMobileIndex) {
          activeMobileIndex = closestIndex;
          updateMobileGalleryLabel();
        }
      }, 50);
    },
    { passive: true },
  );

  // Dots click → scroll to item
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      const item = items[i];
      if (item) {
        const targetLeft =
          item.offsetLeft - (scrollEl.offsetWidth - item.offsetWidth) / 2;
        scrollEl.scrollTo({ left: targetLeft, behavior: "smooth" });
        activeMobileIndex = i;
        updateMobileGalleryLabel();
      }
    });
  });

  // Touch swipe detection (fallback for non-snap browsers)
  let touchStartX = 0;
  scrollEl.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );

  updateMobileGalleryLabel();
}

/* ==================== LOADER ==================== */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  // Hide after 2 seconds (or when page loaded)
  const hide = () => {
    setTimeout(() => loader.classList.add("hidden"), 300);
  };

  if (document.readyState === "complete") {
    hide();
  } else {
    window.addEventListener("load", hide);
    // Fallback
    setTimeout(hide, 2500);
  }
}

/* ==================== FEATURE CARD STAGGER ==================== */
function initFeatureStagger() {
  document.querySelectorAll(".feature-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });
}

/* ==================== SMOOTH ANCHOR SCROLLING ==================== */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-h",
          ),
        );
        const top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ==================== HERO REVEAL ==================== */
function initHeroReveal() {
  const heroContent = document.querySelector(".hero-content.reveal");
  const heroMockup = document.querySelector(".hero-mockup.reveal");

  if (heroContent) setTimeout(() => heroContent.classList.add("visible"), 400);
  if (heroMockup) setTimeout(() => heroMockup.classList.add("visible"), 650);

  // Glass cards: switch to continuous levitate after entrance animation ends
  document.querySelectorAll(".glass-card").forEach((card) => {
    card.addEventListener("animationend", () => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
      card.classList.remove("glass-card"); // remove entrance animation class
      card.classList.add("levitate");
    }, { once: true });
  });
}

/* ==================== INIT ==================== */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTheme();
  initLanguageSwitcher();
  initNavbar();
  initSectionNav();
  initActiveNavLinks();
  initScrollReveal();
  initDesktopSlider();
  initMobileGallery();
  initFeatureStagger();
  initSmoothAnchors();
  initHeroReveal();
});