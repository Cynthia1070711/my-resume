/**
 * ==========================================================================
 * ALAN'S WEB RESUME - MAIN CONTROLLER (APPLE-INSPIRED EDITION)
 * Theme Switcher, Featured/Full Gallery, Lightbox, Counters,
 * 4 Interactive Project Simulators (YDA 9:16, Overlay, Office Tools, Printer).
 * ==========================================================================
 */

// 1. Complete Commercial Design Gallery (49 Assets)
const galleryItems = [
  { id: 1, file: "公車_1.png", title: "全版公車車體廣告", cat: "transit", desc: "高雄市區大眾運輸雙側全包覆動態視覺，高對比遠距清晰辨識設計。" },
  { id: 2, file: "大型背板_1.png", title: "年度新品發表會大型背板", cat: "billboard", desc: "跨度 8 米大型活動主視覺背板，超高解析輸出與舞台燈光對比調校。" },
  { id: 3, file: "大廳看板.png", title: "總代理大廳形象看板", cat: "billboard", desc: "高質感企業門面視覺，結合金屬光澤與品牌速度感。" },
  { id: 4, file: "新勁戰XR_內頁.png", title: "新勁戰 XR 雜誌跨頁特刊", cat: "magazine", desc: "雙頁沉浸式車款介紹，融合科技質感與動力圖解排版。" },
  { id: 5, file: "車頭插牌_1.png", title: "展間新車立體車頭插牌 (一)", cat: "transit", desc: "門市實車陳列專用立體插牌，精準卡榫刀模設計。" },
  { id: 6, file: "立牌_1.png", title: "門市落地促銷立牌 (一)", cat: "exhibition", desc: "1:1 等身比例落地展架，強化補助金額視覺衝擊。" },
  { id: 7, file: "海報_1.png", title: "全台連鎖促銷主視覺海報 (一)", cat: "poster", desc: "全通路經銷門市同步張貼，汰舊換新最高補助海報。" },
  { id: 8, file: "一卡通_1.png", title: "通路專屬客製品牌一卡通", cat: "card", desc: "品牌專屬票卡設計，向量線條與防偽印刷邊界處理。" },
  { id: 9, file: "雜誌_1.png", title: "二輪主流雜誌全頁廣告 (一)", cat: "magazine", desc: "專業汽機車雜誌內頁精選特刊，印刷級細膩網點校正。" },
  { id: 10, file: "雜誌_2.png", title: "二輪主流雜誌全頁廣告 (二)", cat: "magazine", desc: "年度強檔促銷車款廣告，高對比排版強化購車誘因。" },
  { id: 11, file: "雜誌_3.png", title: "二輪主流雜誌全頁廣告 (三)", cat: "magazine", desc: "年輕族群分期零利率專案推廣雜誌廣告。" },
  { id: 12, file: "雜誌_4.png", title: "二輪主流雜誌全頁廣告 (四)", cat: "magazine", desc: "旗艦車款尊榮特仕版雜誌專刊介紹。" },
  { id: 13, file: "雜誌_5.png", title: "二輪主流雜誌全頁廣告 (五)", cat: "magazine", desc: "賽道競技版車款上市震撼視覺特刊。" },
  { id: 14, file: "雜誌_6.png", title: "二輪主流雜誌全頁廣告 (六)", cat: "magazine", desc: "開學季學生購車專屬補助廣告。" },
  { id: 15, file: "雜誌7.png", title: "二輪主流雜誌全頁廣告 (七)", cat: "magazine", desc: "原廠精品配件與改裝套案推廣專頁。" },
  { id: 16, file: "雜誌8.png", title: "二輪主流雜誌全頁廣告 (八)", cat: "magazine", desc: "年度歲末年終感恩回饋特刊。" },
  { id: 17, file: "車頭插牌_2.png", title: "展間新車立體車頭插牌 (二)", cat: "transit", desc: "高彩度促銷亮點標示，強化進店顧客第一視覺焦點。" },
  { id: 18, file: "立牌_2.png", title: "門市落地促銷立牌 (二)", cat: "exhibition", desc: "活動專用快速組裝摺疊立牌，抗反光霧面處理。" },
  { id: 19, file: "立牌_3.png", title: "門市落地促銷立牌 (三)", cat: "exhibition", desc: "新車上市形象展架，搭配金屬拉絲背景質感。" },
  { id: 20, file: "立牌_4.png", title: "門市落地促銷立牌 (四)", cat: "exhibition", desc: "女性專屬輕巧車款溫馨柔和調性立牌。" },
  { id: 21, file: "立牌_5.png", title: "門市落地促銷立牌 (五)", cat: "exhibition", desc: "原廠機油保養套餐活動門市宣傳展架。" },
  { id: 22, file: "小吊旗_1.png", title: "經銷門市促銷小吊旗", cat: "exhibition", desc: "全通路門市天花板懸掛雙面吊旗，打造熱絡促銷氛圍。" },
  { id: 23, file: "海報_2.png", title: "全台連鎖促銷主視覺海報 (二)", cat: "poster", desc: "夏日出遊季限定購車好禮主視覺海報。" },
  { id: 24, file: "海報_3.png", title: "全台連鎖促銷主視覺海報 (三)", cat: "poster", desc: "全車系購車分期零利率零元交車專案海報。" },
  { id: 25, file: "海報_4.png", title: "全台連鎖促銷主視覺海報 (四)", cat: "poster", desc: "新春開運紅包加碼贈送節慶海報。" },
  { id: 26, file: "海報_51.png", title: "全台連鎖促銷主視覺海報 (五)", cat: "poster", desc: "原廠保固升級與道路救援服務宣導海報。" },
  { id: 27, file: "布旗_1.jpg", title: "店頭迎賓直立式布旗", cat: "poster", desc: "戶外耐候防風布旗，高飽和度色彩與動態文字排版。" },
  { id: 28, file: "橫布旗_1.png", title: "門市店招橫幅布條 (一)", cat: "poster", desc: "經銷門市外觀跨幅宣傳布旗，遠距離極佳辨識度。" },
  { id: 29, file: "橫布旗_2.png", title: "門市店招橫幅布條 (二)", cat: "poster", desc: "限時特惠促銷跨幅布條，粗體字型與醒目標價。" },
  { id: 30, file: "橫布旗_3.png", title: "門市店招橫幅布條 (三)", cat: "poster", desc: "暑期購車狂歡節店頭布條設計。" },
  { id: 31, file: "橫布旗_4.png", title: "門市店招橫幅布條 (四)", cat: "poster", desc: "開學季專案優惠門市外觀宣傳布條。" },
  { id: 32, file: "橫布旗_5.png", title: "門市店招橫幅布條 (五)", cat: "poster", desc: "電動二輪購車政府高額補助宣傳布條。" },
  { id: 33, file: "橫布旗_6.png", title: "門市店招橫幅布條 (六)", cat: "poster", desc: "原廠試乘體驗送好禮主題布條。" },
  { id: 34, file: "橫布旗_7.jpg", title: "門市店招橫幅布條 (七)", cat: "poster", desc: "老車汰舊換新回饋專案橫幅布條。" },
  { id: 35, file: "橫布旗_8.png", title: "門市店招橫幅布條 (八)", cat: "poster", desc: "購車抽大獎活動店頭宣傳布條。" },
  { id: 36, file: "文宣_1.png", title: "全通路促銷宣傳摺頁 (一)", cat: "poster", desc: "三摺頁購車指南，詳盡規格對照與分期試算表。" },
  { id: 37, file: "文宣_2.jpg", title: "全通路促銷宣傳摺頁 (二)", cat: "poster", desc: "精美手冊型車款型錄，圖文並茂的產品特色介紹。" },
  { id: 38, file: "文宣_3.jpg", title: "全通路促銷宣傳摺頁 (三)", cat: "poster", desc: "門市櫃台促銷夾頁，簡潔條列購車五大好禮。" },
  { id: 39, file: "文宣_4.jpg", title: "全通路促銷宣傳摺頁 (四)", cat: "poster", desc: "學生購車專屬優惠方案傳單。" },
  { id: 40, file: "文宣_5.jpg", title: "全通路促銷宣傳摺頁 (五)", cat: "poster", desc: "原廠精裝版特仕車專屬文宣夾頁。" },
  { id: 41, file: "文宣_6.jpg", title: "全通路促銷宣傳摺頁 (六)", cat: "poster", desc: "車主回廠免費健檢活動說明傳單。" },
  { id: 42, file: "文宣_7.jpg", title: "全通路促銷宣傳摺頁 (七)", cat: "poster", desc: "重車級安全配備介紹與推廣文宣。" },
  { id: 43, file: "文宣_8.jpg", title: "全通路促銷宣傳摺頁 (八)", cat: "poster", desc: "年終購車感謝祭活動說明 DM。" },
  { id: 44, file: "螢幕輸出1_.jpg", title: "門市數位電子看板視覺 (一)", cat: "billboard", desc: "YDA 輪播系統適配之 9:16 全高清動態促銷底圖。" },
  { id: 45, file: "螢幕輸出_2.jpg", title: "門市數位電子看板視覺 (二)", cat: "billboard", desc: "新車動態焦點展示畫面，適配大螢幕高亮彩輸出。" },
  { id: 46, file: "螢幕輸出_3.jpg", title: "門市數位電子看板視覺 (三)", cat: "billboard", desc: "分期零利率專案電視牆輪播視覺。" },
  { id: 47, file: "螢幕輸出_4.jpg", title: "門市數位電子看板視覺 (四)", cat: "billboard", desc: "節慶祝福與營業時間公佈輪播圖。" },
  { id: 48, file: "貼紙_1.jpg", title: "車身與安全帽品牌專屬防水貼紙", cat: "card", desc: "抗 UV 防水耐磨車貼設計，高識別度幾何圖騰。" },
  { id: 49, file: "手環_1.jpg", title: "車主大會師專屬紀念手環", cat: "card", desc: "品牌車主活動紀念硅膠手環圖樣設計。" }
];

let activeList = [...galleryItems];
let currentLightboxIndex = 0;

// 2. Animate Counter Values (Apple Spring Physics)
window.animateCounter = function(el) {
  if (el.dataset.animated === "true") return;
  el.dataset.animated = "true";
  const target = parseFloat(el.getAttribute("data-target")) || 0;
  const suffix = el.getAttribute("data-suffix") || "";
  const prefix = el.getAttribute("data-prefix") || "";
  const duration = 1600;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Apple-style easeOutCubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easeOut * target);

    el.textContent = prefix + currentValue.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = prefix + target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(updateCount);
};

// 3. Document Initialization
document.addEventListener("DOMContentLoaded", () => {
  try { initTheme(); } catch (e) { console.error("initTheme error:", e); }
  try { initNavbar(); } catch (e) { console.error("initNavbar error:", e); }
  
  if (document.getElementById("featuredGalleryContainer")) {
    try { renderFeaturedGallery(); } catch (e) { console.error("renderFeaturedGallery error:", e); }
  }
  if (document.getElementById("fullGalleryContainer")) {
    try {
      renderFullGallery("all", "");
      initFullGalleryFilters();
    } catch (e) { console.error("fullGallery error:", e); }
  }

  try { initLightbox(); } catch (e) { console.error("initLightbox error:", e); }
  try { initYdaSimulator(); } catch (e) { console.error("initYdaSimulator error:", e); }
  try { initExtensionSimulator(); } catch (e) { console.error("initExtensionSimulator error:", e); }
  try { initOfficeToolsSimulator(); } catch (e) { console.error("initOfficeToolsSimulator error:", e); }
  try { initPrinterHelperSimulator(); } catch (e) { console.error("initPrinterHelperSimulator error:", e); }
  try { initToastAndCopy(); } catch (e) { console.error("initToastAndCopy error:", e); }
  try { initBackToTop(); } catch (e) { console.error("initBackToTop error:", e); }
});

// Theme Management (Default Light + Dark Toggle)
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("alan_theme") || "light";

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("alan_theme", isDark ? "dark" : "light");
      updateThemeIcon(isDark);
    });
    updateThemeIcon(document.documentElement.classList.contains("dark"));
  }
}

function updateThemeIcon(isDark) {
  const iconLight = document.getElementById("themeIconLight");
  const iconDark = document.getElementById("themeIconDark");
  if (iconLight && iconDark) {
    if (isDark) {
      iconLight.classList.add("hidden");
      iconDark.classList.remove("hidden");
    } else {
      iconLight.classList.remove("hidden");
      iconDark.classList.add("hidden");
    }
  }
}

// Navigation Bar
function initNavbar() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// 4. Featured Gallery on Homepage (8 Selected Items - 2 Rows)
function renderFeaturedGallery() {
  const container = document.getElementById("featuredGalleryContainer");
  if (!container) return;

  const featuredIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const featuredList = galleryItems.filter(item => featuredIds.includes(item.id));

  container.innerHTML = featuredList.map((item, index) => `
    <div class="gallery-card group cursor-pointer apple-card overflow-hidden" onclick="openFeaturedLightbox(${index})">
      <div class="relative aspect-video sm:aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img 
          src="assets/gallery/${item.file}" 
          alt="${item.title}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'><rect fill=\'%23f1f5f9\' width=\'400\' height=\'300\'/><text fill=\'%2364748b\' font-size=\'14\' x=\'50%\' y=\'50%\' text-anchor=\'middle\'>${encodeURIComponent(item.title)}</text></svg>'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
          <span class="text-white text-xs font-semibold flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            點擊放大檢視
          </span>
        </div>
      </div>
      <div class="p-3.5">
        <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">${item.title}</h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">${item.desc}</p>
      </div>
    </div>
  `).join("");
}

window.openFeaturedLightbox = function(index) {
  const featuredIds = [1, 2, 3, 4, 5, 6, 7, 8];
  activeList = galleryItems.filter(item => featuredIds.includes(item.id));
  openLightbox(index);
};

// 5. Full Gallery Page (平面設計成品分享 49 款)
function renderFullGallery(category, query) {
  const container = document.getElementById("fullGalleryContainer");
  const countSpan = document.getElementById("galleryCountSpan") || document.getElementById("galleryResultCount");
  if (!container) return;

  activeList = galleryItems.filter(item => {
    const matchCat = (!category || category === "all" || item.cat === category);
    const q = (query || "").toLowerCase();
    const matchSearch = (!q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (countSpan) {
    countSpan.textContent = activeList.length;
  }

  if (activeList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-200">未找到符合條件的作品</h4>
        <p class="text-xs text-slate-500 mt-1">請嘗試更換分類或清除搜尋關鍵字</p>
      </div>
    `;
    return;
  }

  container.innerHTML = activeList.map((item, index) => `
    <div class="gallery-card group cursor-pointer apple-card overflow-hidden" onclick="openLightbox(${index})">
      <div class="relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img 
          src="assets/gallery/${item.file}" 
          alt="${item.title}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'><rect fill=\'%23f1f5f9\' width=\'400\' height=\'300\'/><text fill=\'%2364748b\' font-size=\'14\' x=\'50%\' y=\'50%\' text-anchor=\'middle\'>${encodeURIComponent(item.title)}</text></svg>'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
          <span class="text-white text-xs font-semibold flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            點擊放大檢視
          </span>
        </div>
      </div>
      <div class="p-3.5">
        <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">${item.title}</h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">${item.desc}</p>
      </div>
    </div>
  `).join("");
}

function initFullGalleryFilters() {
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const searchInput = document.getElementById("gallerySearchInput");
  let currentCategory = "all";

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.className = "gallery-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 transition-all";
      });
      btn.className = "gallery-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-black transition-all shadow-sm";
      
      currentCategory = btn.getAttribute("data-filter") || btn.getAttribute("data-cat") || "all";
      renderFullGallery(currentCategory, searchInput ? searchInput.value.trim() : "");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderFullGallery(currentCategory, e.target.value.trim());
    });
  }
}

// 6. Lightbox Modal
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", prevLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextLightbox);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-backdrop")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
    if (e.key === "ArrowRight") nextLightbox();
  });
}

window.openLightbox = function(index) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDesc");
  const counter = document.getElementById("lightboxCounter");

  if (!modal || !activeList[index]) return;

  currentLightboxIndex = index;
  const item = activeList[index];

  if (img) img.src = `assets/gallery/${item.file}`;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.desc;
  if (counter) counter.textContent = `${index + 1} / ${activeList.length}`;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function prevLightbox() {
  if (currentLightboxIndex > 0) {
    openLightbox(currentLightboxIndex - 1);
  } else {
    openLightbox(activeList.length - 1);
  }
}

function nextLightbox() {
  if (currentLightboxIndex < activeList.length - 1) {
    openLightbox(currentLightboxIndex + 1);
  } else {
    openLightbox(0);
  }
}

// ==========================================================================
// 4 INTERACTIVE PROJECT SIMULATORS (YDA 9:16, OVERLAY, OFFICE TOOLS, PRINTER)
// ==========================================================================

// 1. YDA Signage Screen Simulator (9:16 Vertical Stand with 4 Real Artworks)
function initYdaSimulator() {
  const slides = [
    document.getElementById("ydaSlide0"),
    document.getElementById("ydaSlide1"),
    document.getElementById("ydaSlide2"),
    document.getElementById("ydaSlide3")
  ];
  const dots = document.querySelectorAll(".yda-dot");
  const prevBtn = document.getElementById("ydaPrevBtn");
  const nextBtn = document.getElementById("ydaNextBtn");
  const toggleBtn = document.getElementById("ydaToggleBtn");

  if (!slides[0]) return;

  let currentSlide = 0;
  let isPlaying = true;
  let timer = null;

  function showSlide(index) {
    slides.forEach((s, i) => {
      if (s) {
        if (i === index) {
          s.style.opacity = "1";
          s.style.pointerEvents = "auto";
        } else {
          s.style.opacity = "0";
          s.style.pointerEvents = "none";
        }
      }
    });
    dots.forEach((d, i) => {
      if (d) {
        if (i === index) {
          d.className = "w-2 h-2 rounded-full bg-blue-600 yda-dot cursor-pointer transition-all scale-125";
        } else {
          d.className = "w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 yda-dot cursor-pointer transition-all";
        }
      }
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoPlay() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextSlide, 3500);
    if (toggleBtn) {
      toggleBtn.textContent = "⏸ 輪播中";
      toggleBtn.className = "px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold transition-colors";
    }
  }

  function stopAutoPlay() {
    if (timer) clearInterval(timer);
    timer = null;
    if (toggleBtn) {
      toggleBtn.textContent = "▶ 點擊播放";
      toggleBtn.className = "px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-[11px] font-semibold transition-colors";
    }
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); if (isPlaying) startAutoPlay(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); if (isPlaying) startAutoPlay(); });
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      if (isPlaying) startAutoPlay();
      else stopAutoPlay();
    });
  }

  dots.forEach(d => {
    d.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-slide"), 10);
      if (!isNaN(idx)) {
        showSlide(idx);
        if (isPlaying) startAutoPlay();
      }
    });
  });

  startAutoPlay();
}

// 2. Extension Simulator (Adjacent Floating & Draggable Tags Controller)
function initExtensionSimulator() {
  const btnOriginal = document.getElementById("simBtnOriginal");
  const btnOverlay = document.getElementById("simBtnOverlay");
  const btnResetPos = document.getElementById("simBtnResetPos");
  const scanStatus = document.getElementById("simScanStatus");
  const scanDesc = document.getElementById("simScanDesc");
  const photoBox = document.getElementById("simPhotoBox");

  const tag1 = document.getElementById("dragTag1");
  const tag2 = document.getElementById("dragTag2");

  if (!btnOriginal || !btnOverlay || !tag1 || !tag2 || !photoBox) return;

  const defaultPos = {
    tag1: { left: "110px", top: "32px" },
    tag2: { left: "140px", top: "82px" }
  };

  function resetPositions() {
    tag1.style.left = defaultPos.tag1.left;
    tag1.style.top = defaultPos.tag1.top;
    tag2.style.left = defaultPos.tag2.left;
    tag2.style.top = defaultPos.tag2.top;
  }

  btnOriginal.addEventListener("click", () => {
    tag1.style.display = "none";
    tag2.style.display = "none";
    btnOriginal.className = "px-2.5 py-1 rounded-lg text-[11px] bg-blue-600 text-white font-semibold transition-all";
    btnOverlay.className = "px-2.5 py-1 rounded-lg text-[11px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all font-medium";
    
    if (scanStatus) {
      scanStatus.textContent = "❌ 原始模式：審查員需在左側照片與右側表格間來回眼球掃視 (1200px 跨距)";
      scanStatus.className = "text-xs text-rose-500 font-mono mt-2.5 font-semibold";
    }
    if (scanDesc) {
      scanDesc.textContent = "眼球反覆移動易造成疲勞，且照片字跡過小時易發生看錯行或漏看。";
    }
  });

  btnOverlay.addEventListener("click", () => {
    tag1.style.display = "flex";
    tag2.style.display = "flex";
    btnOverlay.className = "px-2.5 py-1 rounded-lg text-[11px] bg-blue-600 text-white font-semibold transition-all";
    btnOriginal.className = "px-2.5 py-1 rounded-lg text-[11px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all font-medium";
    
    if (scanStatus) {
      scanStatus.textContent = "✨ 鄰近懸浮已啟用：資料標籤懸浮於欄位旁側（零遮蔽），支援自由拖曳！";
      scanStatus.className = "text-xs text-blue-600 dark:text-sky-400 font-mono mt-2.5 font-semibold";
    }
    if (scanDesc) {
      scanDesc.textContent = "審查員在同一焦點比對「表單資料 ⇄ 照片字跡」，遇拍照歪斜可自由拖曳標籤對齊。";
    }
  });

  if (btnResetPos) {
    btnResetPos.addEventListener("click", () => {
      resetPositions();
      tag1.style.display = "flex";
      tag2.style.display = "flex";
      btnOverlay.className = "px-2.5 py-1 rounded-lg text-[11px] bg-blue-600 text-white font-semibold transition-all";
      btnOriginal.className = "px-2.5 py-1 rounded-lg text-[11px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all font-medium";
      if (scanStatus) {
        scanStatus.textContent = "🔄 標籤座標已重設至預設模板位置！";
        scanStatus.className = "text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-2.5 font-semibold";
      }
    });
  }

  // Generic Draggable Helper for Tags
  function makeDraggable(el) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let initialLeft = 0, initialTop = 0;

    el.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialLeft = el.offsetLeft;
      initialTop = el.offsetTop;
      el.style.zIndex = "30";
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      const newLeft = Math.max(0, Math.min(photoBox.clientWidth - el.offsetWidth, initialLeft + dx));
      const newTop = Math.max(0, Math.min(photoBox.clientHeight - el.offsetHeight, initialTop + dy));

      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    });

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        el.style.zIndex = "10";
        if (scanStatus) {
          scanStatus.textContent = "🖐️ 標籤位置微調完成！審查員可隨時自訂對齊角度。";
          scanStatus.className = "text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-2.5 font-semibold";
        }
      }
    });

    // Touch Support for Mobile
    el.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        initialLeft = el.offsetLeft;
        initialTop = el.offsetTop;
        el.style.zIndex = "30";
      }
    }, { passive: true });

    document.addEventListener("touchmove", (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;

      const newLeft = Math.max(0, Math.min(photoBox.clientWidth - el.offsetWidth, initialLeft + dx));
      const newTop = Math.max(0, Math.min(photoBox.clientHeight - el.offsetHeight, initialTop + dy));

      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    }, { passive: true });

    document.addEventListener("touchend", () => {
      if (isDragging) {
        isDragging = false;
        el.style.zIndex = "10";
      }
    });
  }

  makeDraggable(tag1);
  makeDraggable(tag2);
}

// 3. Office Tools Pipeline Simulator
function initOfficeToolsSimulator() {
  const tabPrint = document.getElementById("toolTabPrint");
  const tabMask = document.getElementById("toolTabMask");
  const tabGeo = document.getElementById("toolTabGeo");

  const viewPrint = document.getElementById("toolViewPrint");
  const viewMask = document.getElementById("toolViewMask");
  const viewGeo = document.getElementById("toolViewGeo");

  const btnPrint = document.getElementById("btnRunPrint");
  const btnMask = document.getElementById("btnRunMask");
  const btnGeo = document.getElementById("btnRunGeo");

  if (!tabPrint || !tabMask || !tabGeo) return;

  function switchTab(activeTab, activeView) {
    [tabPrint, tabMask, tabGeo].forEach(t => {
      if (t) t.className = "px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all shrink-0";
    });
    [viewPrint, viewMask, viewGeo].forEach(v => {
      if (v) v.classList.add("hidden");
    });

    activeTab.className = "px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-600 text-white transition-all shadow-sm shrink-0";
    activeView.classList.remove("hidden");
  }

  tabPrint.addEventListener("click", () => switchTab(tabPrint, viewPrint));
  tabMask.addEventListener("click", () => switchTab(tabMask, viewMask));
  tabGeo.addEventListener("click", () => switchTab(tabGeo, viewGeo));

  if (btnPrint) {
    btnPrint.addEventListener("click", () => {
      const box = document.getElementById("printOutputBox");
      const msg = document.getElementById("printStatusMsg");
      const field1 = document.getElementById("printPreviewField1");
      const field2 = document.getElementById("printPreviewField2");

      if (box && btnPrint) {
        btnPrint.disabled = true;
        btnPrint.textContent = "逐筆套印中...";
        box.classList.add("opacity-40");

        setTimeout(() => {
          if (field1) field1.textContent = "鳳山直營店 (已套印)";
          if (field2) field2.textContent = "左營示範門市 (已套印)";
          box.classList.remove("opacity-40");
        }, 150);

        setTimeout(() => {
          if (field1) field1.textContent = "高屏旗艦店 (完成)";
          if (field2) field2.textContent = "楠梓專賣店 (完成)";
          if (msg) {
            msg.innerHTML = `<span>✓ 已完成 120 筆 Excel 逐筆套印底圖！多頁 PDF 打包完成（耗時 0.22s）</span><span class="text-emerald-500 font-mono text-[9px]">PDF Ready</span>`;
          }
          btnPrint.disabled = false;
          btnPrint.textContent = "再次逐筆套印";
        }, 400);
      }
    });
  }

  if (btnMask) {
    btnMask.addEventListener("click", () => {
      const box = document.getElementById("maskOutputBox");
      const msg = document.getElementById("maskStatusMsg");
      if (box) {
        box.innerHTML = `
          <div class="flex items-center justify-between text-slate-700 dark:text-slate-200">
            <span>黃*賢 ｜ 0982-***-353 ｜ E123****89</span>
            <span class="text-emerald-500 font-bold text-[10px]">✓ 已脫敏合規</span>
          </div>
          <div class="flex items-center justify-between text-slate-700 dark:text-slate-200">
            <span>陳*美 ｜ 0912-***-456 ｜ A223****12</span>
            <span class="text-emerald-500 font-bold text-[10px]">✓ 已脫敏合規</span>
          </div>
        `;
        if (msg) {
          msg.textContent = "✓ 記憶體運算完成！敏感欄位已符合個資保護規範（耗時 0.05s）";
          msg.className = "text-[10px] text-emerald-600 dark:text-emerald-400 font-bold";
        }
      }
    });
  }

  if (btnGeo) {
    btnGeo.addEventListener("click", () => {
      const box = document.getElementById("geoOutputBox");
      if (box) {
        box.innerHTML = `
          <div class="text-slate-700 dark:text-slate-200 font-mono">
            高雄市楠梓區 ➔ <strong class="text-cyan-600 dark:text-cyan-400">Lat: 22.734512, Lng: 120.321845</strong>
          </div>
          <div class="text-slate-700 dark:text-slate-200 font-mono">
            高雄市三民區 ➔ <strong class="text-cyan-600 dark:text-cyan-400">Lat: 22.645120, Lng: 120.312450</strong>
          </div>
        `;
      }
    });
  }
}

// 4. Invoice Printer Diagnostic Live Simulator
function initPrinterHelperSimulator() {
  const btnDiag = document.getElementById("btnRunPrinterDiag");
  const lamp = document.getElementById("printerStatusLamp");
  const text = document.getElementById("printerStatusText");
  const logBox = document.getElementById("printerDiagLog");

  if (!btnDiag || !lamp || !text || !logBox) return;

  btnDiag.addEventListener("click", () => {
    btnDiag.disabled = true;
    btnDiag.textContent = "診斷修復中...";
    btnDiag.className = "px-3 py-1 rounded-lg bg-slate-700 text-slate-400 font-bold text-xs";

    // Step 1: Simulate Error Detected
    lamp.className = "w-2.5 h-2.5 rounded-full bg-rose-500 live-beacon";
    text.textContent = "發票印表機狀態：⚠️ 偵測到通訊異常與卡死佇列";
    logBox.innerHTML = `
      <div class="flex items-center justify-between text-rose-400">
        <span class="flex items-center gap-1.5">
          <span class="font-bold">!</span>
          <span>COM 埠監測：COM3 訊號無回應</span>
        </span>
        <span class="text-[10px] font-mono">TIMEOUT</span>
      </div>
      <div class="flex items-center justify-between text-amber-400">
        <span class="flex items-center gap-1.5">
          <span class="font-bold">!</span>
          <span>Windows Spooler 佇列：2 筆列印工作堵塞</span>
        </span>
        <span class="text-[10px] font-mono">BLOCKED</span>
      </div>
    `;

    // Step 2: Auto Recover
    setTimeout(() => {
      lamp.className = "w-2.5 h-2.5 rounded-full bg-amber-400 live-beacon";
      text.textContent = "發票印表機狀態：⚡ 正在重新喚醒背景服務並清理佇列...";
      logBox.innerHTML += `
        <div class="flex items-center justify-between text-sky-300 pt-1 border-t border-slate-800">
          <span>> 重新初始化 SerialPort 連線與 Spooler 佇列...</span>
          <span class="text-[10px] font-mono">RUNNING</span>
        </div>
      `;
    }, 1000);

    // Step 3: Done
    setTimeout(() => {
      lamp.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 live-beacon";
      text.textContent = "發票印表機狀態：🟢 正常就緒 (Ready to Print)";
      logBox.innerHTML = `
        <div class="flex items-center justify-between text-slate-300">
          <span class="flex items-center gap-1.5">
            <span class="text-emerald-400 font-bold">✓</span>
            <span>COM 埠監測：COM3 (9600-8-N-1) 已成功連線</span>
          </span>
          <span class="text-[10px] text-emerald-400 font-mono">RECOVERED</span>
        </div>
        <div class="flex items-center justify-between text-slate-300">
          <span class="flex items-center gap-1.5">
            <span class="text-emerald-400 font-bold">✓</span>
            <span>Windows Spooler 佇列：已清除釋放，0 筆堵塞</span>
          </span>
          <span class="text-[10px] text-emerald-400 font-mono">CLEARED</span>
        </div>
      `;
      btnDiag.disabled = false;
      btnDiag.textContent = "⚡ 再次執行診斷";
      btnDiag.className = "px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-sm";
    }, 2200);
  });
}

// 7. Toast & Copy Helpers
function initToastAndCopy() {
  const toast = document.getElementById("toastMsg");
  const toastText = document.getElementById("toastText");

  window.copyText = function(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (toast && toastText) {
          toastText.textContent = `已成功複製 ${label}：${text}`;
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
          }, 2400);
        }
      }).catch(() => {
        alert(`${label}：${text}`);
      });
    } else {
      alert(`${label}：${text}`);
    }
  };
}

// 8. Back to Top Button
function initBackToTop() {
  const backBtn = document.getElementById("backToTopBtn");
  if (!backBtn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      backBtn.classList.remove("opacity-0", "pointer-events-none");
      backBtn.classList.add("opacity-100", "pointer-events-auto");
    } else {
      backBtn.classList.add("opacity-0", "pointer-events-none");
      backBtn.classList.remove("opacity-100", "pointer-events-auto");
    }
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
