const A = "assets/images/";
const S = "assets/solutions/";
const ABILIX_DOWNLOAD_ROOT = "http://en.abilix.com";

const images = {
  homeHero: A + "g16w5sdf45.png",
  leader: A + "img-001-removebg-preview.png",
  wer: A + "15c8130d-936d-4ef2-9ca3-d8b31afdcf84.png",
  productHero: A + "bcd0058e-fa0a-4069-8530-68585a88dcb6.png",
  age4: A + "产品宣传ai图.png",
  age7: A + "1ee33c5a-9f2c-4499-8313-final1111.png",
  age13: A + "d7d4f430-ffe2-4c6d-9678-abfb7f7dd540.png",
  curriculum: A + "733dde62-d3a1-4b8a-917b-fe95c96b060d.png",
  curriculumDiagram: A + "06c00cfd-1c95-4a63-921d-ced56972e473.png",
  resources: A + "d7d4f430-ffe2-4c6d-9678-abfb7f7dd540.png",
  xiaoxing: A + "6ccc952d-6b6b-4dfb-8396-db3a54cab7ee.png",
  xiaoxingRobot: A + "18b0e2ef-adfa-4b2b-ba64-b5974d3a5f08.png",
  children: A + "8696de9c-2f55-4ebf-8bcd-b63f9391ef53.png",
  inquiry: A + "90079b55-28eb-4ace-91b8-adc8c3b23b7c.png",
  creation: A + "c2ea85b1-fcc2-4a1b-a5ec-50f157c065fb.png",
  evidence: A + "733dde62-d3a1-4b8a-917b-fe95c96b060d.png",
  bundle: A + "e40b44c7-7f48-4dd0-b363-5b00c4a5b595.png"
};

const products = [
  { name: "Xiaoxing", age: "4-6", image: images.xiaoxingRobot, text: "Your own customizable AI robot companion for creative learning.", detail: true, badge: "New!" },
  { name: "Modular H1-S", age: "7-12", image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png", text: "Six-face attachment, powerful brain, voice and image recognition." },
  { name: "Krypton 8", age: "7-12", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", text: "Unlock imagination through structures, transmission, dynamics and STEM kits." },
  { name: "School Krypton 201", age: "13-18", image: A + "0d23e4fe-1d11-42c0-8e77-7d179d104666.png", text: "Scratch, C, Python, AI module interface and classroom sensors." },
  { name: "Modular H1-B", age: "4-6", image: A + "588bc550-185b-4e1f-8376-235aed024885.png", text: "Modular robot kit for creative STEM learning." },
  { name: "C203", age: "7-12", image: A + "g4a5a54f-esd4f4-02.png", text: "Free-build robot car, program and test own solution in WER contest." },
  { name: "Krypton 6", age: "7-12", image: A + "77c3cccc-ad08-43e5-ba90-0b6ad01207e5.png", text: "A versatile robot kit designed for hands-on STEM education experiences." },
  { name: "Transmission Kit", age: "13-18", image: A + "9c57f744-1e50-4fdf-bf8e-8faa5619fa73.png", text: "Multiple-DOF humanoid design, action editor and reconfigurable projects." }
];

const solutionItems = [
  { title: "K12 Schools", category: "Institutional learning", image: S + "k12-schools.png", description: "Full lab spaces, teaching resources and robotics systems for schools and universities." },
  { title: "Training Centers", category: "After-school education", image: S + "training-centers.png", description: "Course operation, project activities and community learning centers for after-school robotics." },
  { title: "Store & Kiosk", category: "Retail experience", image: S + "store-kiosk.png", description: "Product experience spaces that connect retail, demonstration and learning services." },
  { title: "Home Learning", category: "Family education", image: S + "home-learning.png", description: "Household product lines and guided learning paths for family robotics education." }
];

const educationFunctions = [
  { image: S + "function-contests.jpg", text: "Launch science & technology activities and contests" },
  { image: S + "function-global-education.jpg", text: "STEM education · Maker education · IoT education" },
  { image: S + "function-technology.jpg", text: "Technological education & innovative teaching" },
  { image: S + "function-school-image.jpg", text: "Display school image and innovative education revolution achievement" },
  { image: S + "function-quality.jpg", text: "Establish omni-directional quality-oriented education based on Multiple Intelligences Theory" }
];

const faqItems = [
  { question: "How to delete the programs inside the Ccon102 controller?", answer: "The Ccon102 controller is like a mobile U disk. First, connect it to a computer. Next, open the “My Computer” folder on the computer desktop. Finally, open the “Removable Disks” folder, find the programs you want to remove, and delete them." },
  { question: "What is the right way to charge batteries?", answer: "First, remove the batteries from the controller. Next, connect the configurator and the batteries to charge the batteries separately." },
  { question: "How to tell whether a battery is fully charged?", answer: "There is an indicator on the charger. A red light means charging is in progress; a green light means the battery is fully charged. For safe use, a single charge should not exceed 12 hours." },
  { question: "How many programs can the Ccon102 controller store?", answer: "The controller has 3.96 MB of memory. A program is usually 150 KB to 500 KB, so a controller can store up to about 27 programs." },
  { question: "Can the Ccon102 controllers communicate with each other?", answer: "Yes." },
  { question: "When a user uses the C language in VJC to do programming, can they convert the program directly into a flow diagram?", answer: "A program written in C cannot be converted into a flow diagram. However, a flow diagram can be completely converted into a corresponding program written in C." },
  { question: "To which port should the H1-100 sensor be connected on the Ccon101 controller?", answer: "It should be connected to the Motor port." },
  { question: "How frequently should the H series battery be charged?", answer: "The set uses a lithium battery. If it is not used for a long time, it is recommended that the battery be charged once a month." },
  { question: "Is the car required to always patrol the line in the game? May the non-line based approach be used to navigate the car?", answer: "Yes. You may use the “Start Motor” module in the program. In this case, the car is navigated according to time rather than the navigation line." },
  { question: "Why is there no navigation line for the car?", answer: "The initial setup of the program is “Collect from the Environment”." },
  { question: "Will the reflection of the game map affect the navigation line for the car?", answer: "There is some impact, but normal line navigation is not affected because the luminosity of the gray sensor under the car is strong enough and navigation is primarily controlled by that sensor." },
  { question: "What are the differences between the C202 game set and the C203 game set?", answer: "Both are game sets officially designated by WER. The C202 has two closed-loop motors and one DC motor, while the C203 has three DC motors. The C202 uses a metal universal wheel, while the C203 uses a guide wheel. The C202 controller uses rechargeable batteries, while the C203 controller uses AA batteries." }
];

const downloadItems = [
  { id: 106, name: "Abilix Krypton2.2.11.3.apk", size: "318 M", type: "apk", date: "2023-08-15", category: "software", path: "/file_upload/20220216/Abilix Krypton2.2.11.3.apk" },
  { id: 105, name: "AbilixScratch3.0_setup_v1.0.3.4_20200610", size: "159 M", type: "exe", date: "2022-03-08", category: "software", path: "/file_upload/20220216/AbilixScratch3.0_setup_v1.0.3.4_20200610.exe" },
  { id: 96, name: "Abilix Chart 3.0_v1.1.2.5_20200618", size: "147 M", type: "exe", date: "2022-02-15", category: "software", path: "/file_upload/20200226/abilixChart3.0_setup_v1.1.2.5_20200618.exe" },
  { id: 104, name: "VJC5.1_RU_1.2_Setup(20200507)", size: "44 M", type: "rar", date: "2020-05-13", category: "software", path: "/file_upload/202005/VJC5.1_RU_1.2_Setup(20200507).rar" },
  { id: 103, name: "H_VJC5.1_PC_5.1.0.24_20200326", size: "44 M", type: "zip", date: "2020-03-26", category: "software", path: "/file_upload/20200325/H_VJC5.1_PC_5.1.0.24_20200326.zip" },
  { id: 102, name: "Catalogue of Abilix educational robot products", size: "13 M", type: "pdf", date: "2020-03-26", category: "brochure", path: "/file_upload/20200325/Catalogue of Abilix educational robot products.pdf" },
  { id: 101, name: "User manual of Abilix Krypton App", size: "3 M", type: "pdf", date: "2020-03-26", category: "manual", path: "/file_upload/User manual of Abilix Krypton App.pdf" },
  { id: 100, name: "Spec of Krypton series (v2)", size: "2 M", type: "pdf", date: "2020-03-26", category: "specification", path: "/file_upload/20200325/Specification of Krypton V2.pdf" },
  { id: 99, name: "Spec of Krypton series", size: "1 M", type: "pdf", date: "2020-03-26", category: "specification", path: "/file_upload/20200325/Specification of Krypton.pdf" },
  { id: 97, name: "Abilix Chart_v2.0.2.40_PC", size: "137 M", type: "zip", date: "2020-03-25", category: "software", path: "/file_upload/20200325/Abilix_Chart_Setup_2.0.2.40.zip" },
  { id: 94, name: "C_VJC 4.3_PC_20190429", size: "45 M", type: "exe", date: "2019-04-30", category: "software", path: "/file_upload/20190307/VJC4.3 EN Setup(20190429).exe" },
  { id: 92, name: "Abilix Scratch 1.0.1.3_mac", size: "16 M", type: "zip", date: "2018-07-31", category: "software", path: "/file_upload/20200325/Abilix Scratch-mac-1.0.1.3.zip" },
  { id: 93, name: "Abilix Scratch 1.0.1.3_pc", size: "29 M", type: "zip", date: "2018-07-31", category: "software", path: "/file_upload/20200325/Abilix_Scratch_Setup_1.0.1.3.zip" },
  { id: 91, name: "Abilix Chart_v2.0.2.13_MAC", size: "252 M", type: "zip", date: "2018-05-14", category: "software", path: "/file_upload/20180511/Abilix_Chart_Setup_mac_2.0.2.13_en.zip" },
  { id: 81, name: "Krypton Building manuals.rar", size: "552 M", type: "rar", date: "2017-06-27", category: "manual", path: "/file_upload/20170627/Krypton Building manuals.rar" },
  { id: 59, name: "C202 Building Manual v1.0.pdf", size: "27 M", type: "pdf", date: "2016-08-03", category: "manual", path: "/file_upload/201608/C202 Building Manual v1.0.pdf" },
  { id: 58, name: "C201 Building Manual v1.0.pdf", size: "30 M", type: "pdf", date: "2016-08-03", category: "manual", path: "/file_upload/201608/C201 Building Manual v1.0.pdf" },
  { id: 57, name: "Spec of H1-S.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of H1-S.pdf" },
  { id: 56, name: "Spec of H1-B.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of H1-B.pdf" },
  { id: 55, name: "Spec of C1-X.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-X.pdf" },
  { id: 54, name: "Spec of C1-T.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-T.pdf" },
  { id: 53, name: "Spec of C1-S.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-S.pdf" },
  { id: 52, name: "Spec of C1-P.pdf", size: "1 M", type: "pdf", date: "2016-07-29", category: "specification", path: "/file_upload/201607/29/Spec of C1-P.pdf" },
  { id: 51, name: "C_VJC 4.0/6.0_Spanish_PC", size: "148 M", type: "rar", date: "2016-07-22", category: "software", path: "/file_upload/201607/Spanish_VJC_c.rar" },
  { id: 50, name: "C1-X-Building Manual.zip", size: "57 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/C1-X-Building Manual.zip" },
  { id: 49, name: "C1-T Building Manual.zip", size: "91 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/C1-T Building Manual.zip" },
  { id: 48, name: "C1-P Building Manual", size: "100 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/C1-P Building Manual.zip" },
  { id: 47, name: "H1-B building manual.zip", size: "45 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/H1-B building manual.zip" },
  { id: 46, name: "H1-S building manual", size: "137 M", type: "zip", date: "2016-07-11", category: "manual", path: "/file_upload/201607/H1-S building manual.zip" },
  { id: 45, name: "H1-S Parts list.pdf", size: "2 M", type: "pdf", date: "2016-07-11", category: "material", path: "/file_upload/201607/H1-S Parts list.pdf" },
  { id: 44, name: "H1-B-Part-list.pdf", size: "2 M", type: "pdf", date: "2016-07-11", category: "material", path: "/file_upload/201607/H1-B-Part-list.pdf" },
  { id: 42, name: "H_VJC 5.1_PC", size: "45 M", type: "zip", date: "2016-07-08", category: "software", path: "/file_upload/201607/VJC_SetupEnV5.1.zip" },
  { id: 41, name: "C_VJC 4.2_PC", size: "315 M", type: "zip", date: "2016-07-08", category: "software", path: "/file_upload/201607/VJC_4.2_EN_SetUp_build20150226.zip" },
  { id: 33, name: "C1-X material list", size: "1 M", type: "zip", date: "2016-06-25", category: "material", path: "/file_upload/201606/115502.zip" },
  { id: 32, name: "C1-T material list", size: "1 M", type: "zip", date: "2016-06-25", category: "material", path: "/file_upload/201606/1155.zip" },
  { id: 31, name: "C1-S-material list 2", size: "1 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/11542.jpg" },
  { id: 30, name: "C1-S-material list 1", size: "2 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/1154.jpg" },
  { id: 25, name: "(C203) Building Manual", size: "19 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1132.pdf" },
  { id: 24, name: "C1-M Creative Course Medium Kit Building Manual", size: "66 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1131.pdf" },
  { id: 23, name: "C1-B Creative Course Beginner Kit Building Manual", size: "45 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1130.pdf" },
  { id: 22, name: "C1-S Building manual", size: "38 M", type: "pdf", date: "2016-06-25", category: "manual", path: "/file_upload/201606/1128.pdf" },
  { id: 21, name: "C1-P material list v1.0", size: "1 M", type: "zip", date: "2016-06-25", category: "material", path: "/file_upload/201606/1127.zip" },
  { id: 20, name: "C1-M-material list", size: "1 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/1126.jpg" },
  { id: 19, name: "C1-B-material list", size: "1 M", type: "jpg", date: "2016-06-25", category: "material", path: "/file_upload/201606/1125.jpg" },
  { id: 15, name: "Revolutionary Solutions For STEM Education", size: "4 M", type: "pdf", date: "2016-06-25", category: "brochure", path: "/file_upload/201606/1106.pdf" }
];

const routes = ["home", "products", "curriculum", "wer", "solutions", "resources", "resources-faq", "resources-download", "product"];
const routeLabel = { home: "Home", products: "Products", curriculum: "Curriculum", wer: "WER", solutions: "Solutions", resources: "Resources", "resources-faq": "Resources FAQ", "resources-download": "Resource Downloads", product: "Xiaoxing" };

function currentRoute() {
  const value = location.hash.replace(/^#\/?/, "").split("?")[0] || "home";
  return routes.includes(value) ? value : "home";
}

function link(route, label, className = "") {
  return `<a class="${className}" href="#/${route}" data-route="${route}">${label}</a>`;
}

function header(active) {
  return `<header class="site-header">
    <div class="header-inner">
      ${link("home", `<span class="logo-word">Abilix</span><span class="logo-tag">EDUCATIONAL ROBOT</span>`, "logo")}
      <button class="menu-button" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="primary-nav" aria-label="Primary navigation">
        ${["products", "solutions", "curriculum", "wer", "resources"].map(r => link(r, routeLabel[r], active === r ? "active" : "")).join("")}
        ${link("home", "About Abilix", "nav-pill")}
      </nav>
      <button class="bag" aria-label="Shopping bag"><span>Bag</span><b id="bag-count">0</b></button>
    </div>
  </header>`;
}

function footer() {
  const cols = ["Products", "Solutions", "Curriculum", "WER", "Resources"];
  return `<footer class="site-footer"><div class="footer-inner">
    <div class="footer-brand"><h3>Abilix</h3><p>Train Successful Intelligence. Bring Up Science &amp; Technology Accomplishment. Cultivate Technology Talents.</p></div>
    ${cols.map(c => `<div class="footer-col"><h4>${c}</h4><a href="#/${c.toLowerCase()}">Overview</a><a href="#/${c.toLowerCase()}">Details</a><a href="#/${c.toLowerCase()}">Support</a></div>`).join("")}
  </div></footer>`;
}

function pageHero({ eyebrow = "Educational Robotics", title, summary, image, extra = "" }) {
  return `<section class="page-hero" style="--hero-image:url('${image}')"><div class="hero-overlay"></div><div class="container hero-content"><p>${eyebrow}</p><h1>${title}</h1><div class="hero-summary">${summary}</div>${extra}</div></section>`;
}

function strapline(text) { return `<div class="strapline">${text}</div>`; }
function button(route, text, cls = "button") { return link(route, `${text}<span aria-hidden="true">→</span>`, cls); }

function homePage() {
  const cards = [
    ["K12 Schools", "Full lab spaces, teaching resources and robotics systems for schools and universities.", S + "k12-schools.png"],
    ["Training Centers", "Course operation, project activities and community learning centers for after-school robotics.", S + "training-centers.png"],
    ["Store & Kiosk", "Product experience spaces that connect retail, demonstration and learning services.", S + "store-kiosk.png"],
    ["Home Learning", "Household product lines and guided learning paths for family robotics education.", S + "home-learning.png"]
  ];
  const productFamilies = [
    { name: "Modular", image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png", text: "Product family card links to listing/detail template." },
    { name: "Krypton", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", text: "Product family card links to listing/detail template." },
    { name: "Creative", image: A + "77c3cccc-ad08-43e5-ba90-0b6ad01207e5.png", text: "Product family card links to listing/detail template." },
    { name: "School Krypton", image: A + "0d23e4fe-1d11-42c0-8e77-7d179d104666.png", text: "Product family card links to listing/detail template." }
  ];
  return `${header("home")}<main id="main">
    <section class="home-hero" aria-roledescription="carousel" aria-label="Abilix highlights"><div class="hero-slides" aria-hidden="true">${[0,1,2].map((_,i) => `<div class="hero-slide ${i===0?"active":""}" style="--hero-image:url('${images.homeHero}')"></div>`).join("")}</div><div class="hero-overlay"></div><div class="home-hero-copy">
      <p class="hero-kicker">Educational Robots · STEAM Curriculum · Global Competition</p><h1>AI Robots<br>Inspiring Young Minds<br>To Create</h1>
      <p>Abilix brings educational robots, classroom solutions, curriculum support and WER competition pathways into one premium learning ecosystem.</p><a href="#belief" class="scroll-cue arrow-glyph" aria-label="Scroll to next section">↓</a>
      <div class="hero-pagination" role="group" aria-label="Choose hero image">${[0,1,2].map((_,i) => `<button class="hero-page ${i===0?"active":""}" type="button" data-index="${i}" aria-label="Show slide ${i+1}" aria-current="${i===0?"true":"false"}"></button>`).join("")}</div>
    </div></section>
    <section id="belief" class="belief"><h2>More Than Knowing</h2><p>Students need more than knowledge<br>They need to create, to collaborate<br>To turn ideas into solutions</p><strong>Explore · Create · Solve</strong></section>
    <section class="section container solution-intro"><p class="eyebrow">ABILIX SOLUTION</p><h2>From Learning to Ability</h2><p>Abilix brings robots, curriculum, programming and real-world challenges<br>together in one connected learning system.</p><strong>Build · Program · Challenge · Grow</strong>
      <div class="solution-grid">${cards.map(c => `<a href="#/solutions" class="solution-card"><img src="${c[2]}" alt="${c[0]}"><h3>${c[0]}</h3><p>${c[1]}</p></a>`).join("")}</div>
      ${button("solutions", "Explore Solution")}
    </section>
    <section class="section container split leader"><div><h2>A Global Leader in Educational Robotics</h2><p>Founded in 1996, Abilix uses AI-powered educational robots to inspire creativity and develop future-ready skills.</p>${button("home", "Learn More")}</div><img src="${images.leader}" alt="Children exploring robots"></section>
    ${strapline("We create more than robots. We create a complete learning system.")}
    <section class="section container products-preview"><div class="product-center-heading"><h2>Product Center</h2><p>Bring Imagination to Life.<br>Make Creativity Visible.</p></div><div class="carousel-shell"><button class="carousel-arrow prev arrow-glyph" aria-label="Previous products">‹</button><div class="product-strip">${productFamilies.map(p => `<article class="family-card"><div class="family-image"><img src="${p.image}" alt="${p.name} educational robot family"></div><div class="family-copy"><div><h3>${p.name}</h3><p>${p.text}</p></div>${link("products", "Learn More", "mini-button family-button")}</div></article>`).join("")}</div><button class="carousel-arrow next arrow-glyph" aria-label="Next products">›</button></div></section>
    <section class="section container split wer-promo"><img src="${images.wer}" alt="WER global robotics competition"><div><h2>Turn competition into a<br>global learning ecosystem.</h2><p>Contest introduction · Past works · Champion stories · Registration · Live events · Global map</p>${button("wer", "Learn More")}</div></section>
    <section class="section container stats"><div><h2>A robotics education<br>company built as a complete<br>learning system.</h2><p>From the brand manual: Abilix provides STEAM-ready robot products, systematic school labs, home learning centers, teaching materials and WER competition pathways.</p></div><div class="stat-grid">${[["600+","patented technologies"],["120+","robot types"],["100+","teaching materials"],["50+","countries & regions"],["40K+","schools & institutes"],["500K+","WER contestants yearly"]].map(s => `<div><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join("")}</div></section>
    <section class="closing"><h2>Empowering Every Child to Create the Future<br>Inspiring Young Creators Worldwide Since 1996</h2></section>
  </main>${footer()}`;
}

function productCard(p) {
  return `<article class="product-card" data-age="${p.age}"><div class="product-image"><img src="${p.image}" alt="${p.name}">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}</div><h3>${p.name}</h3><p>${p.text}</p><div class="card-actions"><a href="${p.detail ? "#/product" : "#/products"}" class="mini-button">Shop Now</a><button class="favorite" aria-label="Add ${p.name} to favorites">♡</button></div></article>`;
}

function productsPage() {
  return `${header("products")}<main id="main">${pageHero({ title: "Products", summary: "Browse product families or filter by age. Each card leads into product details with product information and Add to Bag.", image: images.productHero })}${strapline("We Build More Than Robots. We Inspire Creators.")}
    <section class="section container catalog"><div class="filter-tabs" role="tablist" aria-label="Filter products by age"><button class="active" data-filter="all">All Products</button><button data-filter="4-6">Age 4-6</button><button data-filter="7-12">Age 7-12</button><button data-filter="13-18">Age 13-18</button></div><div class="catalog-grid">${products.map(productCard).join("")}</div><div class="catalog-arrows"><button class="catalog-prev" aria-label="Previous page">‹</button><button class="catalog-next" aria-label="Next page">›</button></div></section>
    <section class="section container ages"><h2>Products by Age</h2><div class="age-row"><img src="${images.age4}" alt="Parent and child learning with Xiaoxing"><div><h3>Age 4-6</h3><strong>Explore &amp; Create</strong><p>Develop creativity and hands-on skills through playful construction, basic robotics, and imaginative building experiences.</p></div></div><div class="age-row reverse"><img src="${images.age7}" alt="Student programming a robot"><div><h3>Age 7-12</h3><strong>Build &amp; Program</strong><p>Learn robotics, programming, and STEAM concepts through modular building, sensors, and interactive robot control projects.</p></div></div><div class="age-row"><img src="${images.age13}" alt="Teen students engineering robots"><div><h3>Age 13-18</h3><strong>Innovate &amp; Engineer</strong><p>Explore AI, engineering, and advanced robotics through programming, intelligent applications, and innovation-driven projects.</p></div></div></section>
    <section class="closing"><h2>Built for Creativity. Designed for the Future.</h2><p>Abilix connects technology with learning, giving every child the opportunity to become a creator of the future.</p></section>
  </main>${footer()}`;
}

function curriculumPage() {
  const levels = ["Creative construction and observation","Computational thinking and logic","Programming, sensors and control","AI applications and project practice","Engineering innovation and teamwork","Competition, presentation and problem solving"];
  return `${header("curriculum")}<main id="main">${pageHero({ title: "Curriculum", summary: "Abilix combines robots, programming software, teacher resources and course materials into a structured AI literacy system.", image: images.curriculum })}${strapline("Connect every product to a clear learning pathway")}
    <section class="section container curriculum"><h2>Learning journey timeline</h2><p>Horizontal curriculum map can show semester/module<br>progression and matching product kits.</p><div class="level-list">${levels.map((l,i) => `<button class="level-item" aria-expanded="false"><span>L${i+1}</span><strong>${l}</strong><em>View pathway</em></button>`).join("")}</div>
      <div class="curriculum-features"><div><h2>Curriculum Features</h2><h3>Project Guidance from Easy to Difficult</h3><ul><li>Training Trial and Error Learning</li><li>Training the Abilities of Innovation, Analysis and Practice</li><li>Training the Abilities to Understand, Be Close to and Apply the Technology</li></ul></div><img src="${images.curriculumDiagram}" alt="Project-based teaching process diagram"></div></section>
  </main>${footer()}`;
}

function werPage() {
  return `${header("wer")}<main id="main">${pageHero({ title: "WER", summary: "Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.", image: images.wer })}${strapline("Connect every product to a clear learning pathway")}
    <section class="section container external-card"><h2>External website target</h2><p class="external-url">http://en.wergame.org/</p><p>Interaction: CTA opens external WER website in a new tab. Keep a short local overview before redirect.</p><a class="button" href="http://en.wergame.org/" target="_blank" rel="noopener">Go to WER site <span>↗</span></a></section>
  </main>${footer()}`;
}

function solutionsPage() {
  return `${header("solutions")}<main id="main">${pageHero({ title: "Solutions", summary: "Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.", image: A + "beaa1fc5-9bae-43b2-9812-70ce931516d8.png" })}${strapline("Connect every product to a clear learning pathway")}
    <div class="container solutions-mode-tabs" role="tablist" aria-label="Solutions page sections"><button class="solution-mode-tab active" type="button" role="tab" aria-selected="true" data-panel="introduction">Introduction</button><button class="solution-mode-tab" type="button" role="tab" aria-selected="false" data-panel="environments">Explore four environments</button></div>
    <section class="solution-mode-panel solution-introduction container" data-panel="introduction" role="tabpanel">
      <h2>Abilix Educational Robot Integrated Practical Education Base Solution</h2>
      <p>The Integrated Practical Activities Course is a required subject introduced by the Ministry of Education in Document No. 4 (2017) for primary and secondary schools across China. It encourages students to learn through real-life situations, using research, hands-on projects, and practical experiences to develop their overall skills.</p>
      <p>To help schools solve common challenges such as limited course content, educational equipment, and qualified teachers, the Abilix Educational Robot Integrated Practical Education Base offers a one-day, 8-hour program centered on artificial intelligence and robotics. The course helps students build knowledge in AI, robotics, programming, sensors, and other technology fields while developing creativity, analytical thinking, practical skills, and independent learning abilities.</p>
      <img src="${S}practice-base.png" alt="Abilix artificial intelligence creator practice base">
      <p>On weekends, the Abilix Educational Robot Practice Base is also open to the public, offering SITA Project Courses based on the BY and BH series.</p>
      <p>The SITA Project Course is an innovative program built on the SITA educational approach, focusing on developing success skills and technology literacy. The SITA educational approach was created by Dr. Yun Weimin and Professor Jake Mendelssohn. Its main goal is to develop balanced success skills - including creativity, analytical thinking, and practical ability - while improving technology literacy, nurturing future technology talent, and helping children build knowledge independently.</p>
      <p>With its world-leading SITA educational approach, advanced AI and robotics practical courses, and an educational robotics platform featuring hundreds of built-in inventions, the Abilix Educational Robot Practice Base is set to become a leader in AI and robotics practical education.</p>
      <img src="${S}practice-classroom.png" alt="Abilix educational robotics classroom">
    </section>
    <div class="solution-mode-panel" data-panel="environments" role="tabpanel" hidden>
      <section id="solution-scenes" class="solutions-scroll" aria-labelledby="solution-scenes-title"><div class="solutions-sticky container"><h2 id="solution-scenes-title">Solutions</h2><div class="vertical-tabs-layout"><div class="vertical-tabs" role="tablist" aria-label="Solution environments">${solutionItems.map((s,i) => `<button role="tab" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-index="${i}" class="vertical-tab ${i===0?"active":""}"><span>${String(i+1).padStart(2,"0")}</span><strong>${s.title}</strong></button>`).join("")}</div><div class="solution-stage" aria-live="polite"><div class="solution-image">${solutionItems.map((s,i) => `<figure class="solution-scene ${i===0?"active":""}" data-index="${i}"><img src="${s.image}" alt="${s.title}"></figure>`).join("")}<div class="solution-image-shade"></div><span><b id="solution-current">01</b> /04</span></div><div class="solution-copy" id="solution-copy"><p>${solutionItems[0].category}</p><h2>${solutionItems[0].title}</h2><div>${solutionItems[0].description}</div></div></div></div><div class="solutions-progress" aria-hidden="true"><span></span></div></div></section>
      <section class="section container education-functions"><h2>Five Educational Functions</h2><div>${educationFunctions.map(item => `<article><img src="${item.image}" alt=""><p>${item.text}</p></article>`).join("")}</div></section>
    </div>
  </main>${footer()}`;
}

function resourcesHero() {
  return `${pageHero({ title: "Resources", summary: "Downloads, media and partner support library.", image: images.resources })}${strapline("Connect every product to a clear learning pathway")}`;
}

function resourcesPage() {
  const resources = [
    ["FAQ", "Resource category", images.xiaoxingRobot, "#/resources-faq"], ["Downloading", "Resource category", A + "52c8e6b6-18f9-4ee9-bbec-6dc375b0621d.png", "#/resources-download"], ["Brochures", "Resource category", images.curriculum],
    ["Manuals", "Resource category", images.bundle], ["News", "Resource category", images.children], ["Videos", "Resource category", images.wer],
    ["What students build", "Content module", A + "78c67788-44eb-46da-a062-e0f918d7bf79.png"], ["Curriculum connection", "Content module", images.curriculum], ["Related products", "Content module", images.bundle]
  ];
  return `${header("resources")}<main id="main">${resourcesHero()}
    <section class="section container resources"><label class="search"><span>Search</span><input id="resource-search" type="search" placeholder="Search resources..." autocomplete="off"></label><div class="resource-grid">${resources.map(r => r[3] ? `<a href="${r[3]}" class="resource-card" data-search="${r[0].toLowerCase()}"><img src="${r[2]}" alt=""><h3>${r[0]}</h3><p>${r[1]}</p></a>` : `<button class="resource-card" data-search="${r[0].toLowerCase()}"><img src="${r[2]}" alt=""><h3>${r[0]}</h3><p>${r[1]}</p></button>`).join("")}</div><p class="no-results" hidden>No resources match your search.</p></section>
  </main>${footer()}`;
}

function resourcesFaqPage() {
  return `${header("resources")}<main id="main">${resourcesHero()}<section class="section container resource-detail"><a class="resource-back" href="#/resources" aria-label="Back to Resources">‹ <span>Resources</span></a><label class="search"><span>Search</span><input id="faq-search" type="search" placeholder="Search resources..." autocomplete="off"></label><div id="faq-list" class="faq-list"></div><p class="no-results" hidden>No FAQs match your search.</p><nav id="faq-pagination" class="resource-pagination" aria-label="FAQ pages"></nav></section></main>${footer()}`;
}

function resourcesDownloadPage() {
  return `${header("resources")}<main id="main">${resourcesHero()}<section class="section container resource-detail"><a class="resource-back" href="#/resources" aria-label="Back to Resources">‹ <span>Resources</span></a><div class="download-controls"><label><span class="sr-only">Resource category</span><select id="download-category"><option value="all">All</option><option value="software">Software</option><option value="material">Material</option><option value="specification">Specification</option><option value="manual">Manual</option><option value="brochure">Brochure</option></select></label><label class="download-search"><span aria-hidden="true">⌕</span><input id="download-search" type="search" placeholder="Search resources..." autocomplete="off"></label></div><div class="download-table-wrap"><table class="download-table"><thead><tr><th>ID</th><th>File Name</th><th>Size</th><th>Type</th><th>Date of uploading</th><th><span class="sr-only">Download</span></th></tr></thead><tbody id="download-body"></tbody></table></div><p class="no-results" hidden>No downloads match your filters.</p><nav id="download-pagination" class="resource-pagination" aria-label="Download pages"></nav></section></main>${footer()}`;
}

function productPage() {
  const gallery = [images.xiaoxing, images.xiaoxingRobot, images.bundle, images.curriculum];
  const courses = ["Large Language Model Application Training","Questioning Ability Training","Inquiry-Based Civilization Knowledge","Critical Thinking Ability Training","Aesthetic Ability Training","Value Judgment Ability Training"];
  return `${header("product")}<main id="main">${strapline("We Build More Than Robots. We Inspire Creators.")}<section class="section container product-detail"><div class="gallery"><div class="main-image"><img id="main-product-image" src="${gallery[0]}" alt="Xiaoxing AI Educational Robot Companion"></div><div class="thumbnails">${gallery.map((g,i)=>`<button class="thumb ${i===0?"active":""}" data-src="${g}"><img src="${g}" alt="Xiaoxing view ${i+1}"></button>`).join("")}</div></div><div class="buy-panel"><h1>Xiaoxing <button class="favorite" aria-label="Add Xiaoxing to favorites">♡</button></h1><h2>AI Educational Robot Companion</h2><p class="rating">4.9 / 5 &nbsp; <a href="#reviews">128 verified reviews</a></p><strong class="price">US$ 599.00</strong><p>Taxes and shipping calculated at checkout.</p><p>A customizable AI learning companion combining natural conversation, creative building, and guided learning experiences for curious young minds.</p><h3>IN THE BOX</h3><p>Xiaoxing robot · Modular building set · Charging cable · Learning access</p><div class="purchase"><div class="quantity"><button data-delta="-1" aria-label="Decrease quantity">−</button><span id="quantity">1</span><button data-delta="1" aria-label="Increase quantity">+</button></div><button class="add-bag">Add to bag</button></div><button class="buy-now">Buy it now</button><p class="stock">● In stock · Ready to ship</p><dl class="policies"><dt>SHIPPING</dt><dd>Tracked delivery with regional options</dd><dt>RETURNS</dt><dd>30-day return window</dd><dt>SCHOOLS</dt><dd>Institutional purchasing support available</dd></dl></div></section>
    <section class="blue-section"><div class="container split"><div><h2>Curriculum Leads<br>Xiaoxing Enables</h2><p>Xiaoxing is the learning interface for a six-course AI education system. The curriculum defines the goals; the robot turns them into dialogue, construction, and reflection.</p><div class="process-pills"><span>COURSE</span><b>+</b><span>ACTIVITY</span><b>+</b><span>ROBOT</span></div></div><img src="${images.children}" alt="Children learning with Xiaoxing"></div></section>
    <section class="section container courses"><div><p class="eyebrow">THE OFFICIAL CURRICULUM</p><h2>Six Courses<br>One Education System</h2><img src="${images.curriculum}" alt="Official curriculum books"></div><div><p>The six courses develop AI application ability and the human judgment needed to use AI thoughtfully, creatively, and responsibly.</p><ol>${courses.map(c=>`<li>${c}</li>`).join("")}</ol></div></section>
    <section class="soft-section"><div class="container"><p class="eyebrow">THE EDUCATION PROCESS</p><h2>How Xiaoxing Supports Every Stage.</h2><div class="four-steps">${[["SPARK CURIOSITY","Xiaoxing listens and develops the question."],["LEARN KNOWLEDGE","Xiaoxing connects inquiry with knowledge."],["BUILD TO CREATE","Xiaoxing becomes a model students build."],["SOLVE PROBLEMS","Xiaoxing helps test, reflect, and improve."]].map((s,i)=>`<div><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></div></section>
    <section class="section container intelligence"><p class="eyebrow">PRODUCT CAPABILITY / AI INTELLIGENCE</p><h2>AI Connects Questions With Knowledge</h2><div class="intelligence-grid"><div>${[["REASON","Understand context and explain relationships."],["RESEARCH","Explore knowledge across disciplines."],["APPLY","Use language, vision, 3D, music, or physics models."]].map(x=>`<div><strong>${x[0]}</strong><p>${x[1]}</p></div>`).join("")}</div><aside><p class="eyebrow">PRODUCT INTELLIGENCE</p><ul><li>DeepSeek V4</li><li>1.6T parameters</li><li>Abilix Agent 2.0</li><li>Multilingual voice</li><li>Fast response</li></ul></aside></div></section>
    <section class="section container reference"><p class="eyebrow">PRODUCT REFERENCE</p><h2>Built for Long-Term Learning</h2><div class="split"><ul><li>Xiaoxing AI Educational Robot</li><li>DeepSeek V4 · 1.6T parameters</li><li>Six official AI-era ability courses</li><li>1-on-1 Learning Advisor</li><li>Lifetime Q&amp;A Support</li><li>Setup &amp; Usage Guidance</li></ul><img src="${images.bundle}" alt="Xiaoxing education course bundle"></div></section>
    <section class="section container practice"><p class="eyebrow">CURRICULUM IN PRACTICE</p><h2>See Learning Become Action</h2><div class="practice-grid">${[[images.inquiry,"Student-led inquiry","A student question begins the investigation."],[images.creation,"Hands-on creation","Knowledge becomes a physical working model."],[images.evidence,"Evidence and judgment","Evidence guides discussion, revision, and judgment."]].map(x=>`<article><img src="${x[0]}" alt=""><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></section>
    <section class="section container recommendations"><div class="section-heading"><h2>You may also like</h2>${link("products","View all products →")}</div><div class="catalog-grid compact">${products.slice(6,8).concat(products.slice(1,2)).map(productCard).join("")}</div></section>
  </main>${footer()}`;
}

const pages = { home: homePage, products: productsPage, curriculum: curriculumPage, wer: werPage, solutions: solutionsPage, resources: resourcesPage, "resources-faq": resourcesFaqPage, "resources-download": resourcesDownloadPage, product: productPage };
let bagCount = 0;

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function render() {
  const route = currentRoute();
  bindPage.solutionCleanup?.();
  document.querySelector("#app").innerHTML = pages[route]();
  document.title = `${routeLabel[route]} - Abilix`;
  const bag = document.querySelector("#bag-count"); if (bag) bag.textContent = bagCount;
  bindCommon(); bindPage(route); window.scrollTo({ top: 0, behavior: "instant" });
}

function bindCommon() {
  const menu = document.querySelector(".menu-button"), nav = document.querySelector(".primary-nav");
  menu?.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  document.querySelector(".bag")?.addEventListener("click", () => showToast(bagCount ? `${bagCount} item${bagCount>1?"s":""} in your bag.` : "Your bag is empty."));
  document.querySelectorAll(".favorite").forEach(b => b.addEventListener("click", e => { e.preventDefault(); b.classList.toggle("active"); b.textContent = b.classList.contains("active") ? "♥" : "♡"; }));
}

function bindPage(route) {
  if (route === "home") {
    const slides = [...document.querySelectorAll(".hero-slide")], pages = [...document.querySelectorAll(".hero-page")];
    let heroIndex = 0;
    const showHero = index => { heroIndex = (index + slides.length) % slides.length; slides.forEach((s,i) => s.classList.toggle("active", i === heroIndex)); pages.forEach((p,i) => { p.classList.toggle("active", i === heroIndex); p.setAttribute("aria-current", String(i === heroIndex)); }); };
    pages.forEach((page,i) => page.addEventListener("click", () => showHero(i)));
    clearInterval(bindPage.heroTimer); bindPage.heroTimer = setInterval(() => showHero(heroIndex + 1), 5500);
    const strip = document.querySelector(".product-strip");
    document.querySelector(".carousel-arrow.prev")?.addEventListener("click", () => strip.scrollBy({ left: -340, behavior: "smooth" }));
    document.querySelector(".carousel-arrow.next")?.addEventListener("click", () => strip.scrollBy({ left: 340, behavior: "smooth" }));
  }
  if (route === "products") {
    const filter = value => document.querySelectorAll(".catalog-grid .product-card").forEach(c => c.hidden = value !== "all" && c.dataset.age !== value);
    document.querySelectorAll(".filter-tabs button").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".filter-tabs button").forEach(x=>x.classList.remove("active")); b.classList.add("active"); filter(b.dataset.filter); }));
    document.querySelector(".catalog-prev")?.addEventListener("click",()=>showToast("Showing the previous product group."));
    document.querySelector(".catalog-next")?.addEventListener("click",()=>showToast("Showing the next product group."));
  }
  if (route === "curriculum") document.querySelectorAll(".level-item").forEach(b => b.addEventListener("click",()=>{ const open=b.getAttribute("aria-expanded")==="true"; b.setAttribute("aria-expanded",String(!open)); b.classList.toggle("open",!open); b.querySelector("em").textContent=!open?"Robotics · Curriculum · Project practice":"View pathway"; }));
  if (route === "solutions") {
    const section = document.querySelector(".solutions-scroll"), sticky = document.querySelector(".solutions-sticky");
    const modeTabs = [...document.querySelectorAll(".solution-mode-tab")], modePanels = [...document.querySelectorAll(".solution-mode-panel")];
    modeTabs.forEach(tab => tab.addEventListener("click", () => { const panel = tab.dataset.panel; modeTabs.forEach(item => { const selected = item === tab; item.classList.toggle("active", selected); item.setAttribute("aria-selected", String(selected)); }); modePanels.forEach(item => item.hidden = item.dataset.panel !== panel); if (panel === "environments") requestAnimationFrame(() => { renderSolutionScroll(); section.scrollIntoView({ behavior: "smooth", block: "start" }); }); else scrollTo({ top: document.querySelector(".solutions-mode-tabs").offsetTop - 100, behavior: "smooth" }); }));
    const tabs = [...document.querySelectorAll(".vertical-tab")];
    const scenes = [...document.querySelectorAll(".solution-scene")], copy = document.querySelector("#solution-copy");
    let active = 0, ticking = false;
    const activate = i => { if(i===active)return; const previous=active,item=solutionItems[i];active=i;tabs.forEach((t,n)=>{t.classList.toggle("active",n===i);t.setAttribute("aria-selected",String(n===i));t.tabIndex=n===i?0:-1;});scenes.forEach((scene,n)=>{scene.classList.remove("was-active");if(n===previous)scene.classList.add("was-active");scene.classList.toggle("active",n===i);});copy.innerHTML=`<p>${item.category}</p><h2>${item.title}</h2><div>${item.description}</div>`;copy.classList.remove("changing");void copy.offsetWidth;copy.classList.add("changing");document.querySelector("#solution-current").textContent=String(i+1).padStart(2,"0");if(innerWidth<=640)tabs[i].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}); };
    const scrollToSolution = i => { const top=section.getBoundingClientRect().top+scrollY,scrollable=section.offsetHeight-innerHeight;scrollTo({top:top+scrollable*((i+.08)/solutionItems.length),behavior:"smooth"}); };
    const renderSolutionScroll = () => { const rect=section.getBoundingClientRect(),scrollable=section.offsetHeight-innerHeight,raw=scrollable>0?-rect.top/scrollable:0,progress=Math.max(0,Math.min(.9999,raw)),i=Math.min(solutionItems.length-1,Math.floor(progress*solutionItems.length)),local=progress*solutionItems.length-i;activate(i);sticky.style.setProperty("--solutions-progress",String(progress));scenes[i].style.setProperty("--scene-y",`${(local-.5)*-14}px`);ticking=false; };
    const requestSolutionRender = () => { if(!ticking){ticking=true;requestAnimationFrame(renderSolutionScroll);} };
    tabs.forEach((t,i)=>{t.addEventListener("click",()=>scrollToSolution(i));t.addEventListener("keydown",e=>{if(["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(e.key)){e.preventDefault();const next=(i+(["ArrowDown","ArrowRight"].includes(e.key)?1:-1)+tabs.length)%tabs.length;scrollToSolution(next);tabs[next].focus();}});});
    addEventListener("scroll",requestSolutionRender,{passive:true});addEventListener("resize",requestSolutionRender);bindPage.solutionCleanup=()=>{removeEventListener("scroll",requestSolutionRender);removeEventListener("resize",requestSolutionRender);bindPage.solutionCleanup=null;};renderSolutionScroll();
  }
  if (route === "resources") document.querySelector("#resource-search")?.addEventListener("input", e => { const q=e.target.value.trim().toLowerCase(); let visible=0; document.querySelectorAll(".resource-card").forEach(c=>{c.hidden=!c.dataset.search.includes(q);if(!c.hidden)visible++;}); document.querySelector(".no-results").hidden=visible!==0; });
  if (route === "resources-faq") {
    const list = document.querySelector("#faq-list"), pagination = document.querySelector("#faq-pagination"), noResults = document.querySelector(".no-results"), search = document.querySelector("#faq-search");
    let page = 1;
    const renderFaqs = () => { const query = search.value.trim().toLowerCase(), filtered = faqItems.filter(item => `${item.question} ${item.answer}`.toLowerCase().includes(query)), pageCount = Math.max(1, Math.ceil(filtered.length / 8)); page = Math.min(page, pageCount); const visible = filtered.slice((page - 1) * 8, page * 8); list.innerHTML = visible.map((item, index) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${(page-1)*8+index}"><span>${item.question}</span><b aria-hidden="true"></b></button><div class="faq-answer" id="faq-answer-${(page-1)*8+index}" hidden><p>${item.answer}</p></div></article>`).join(""); noResults.hidden = filtered.length !== 0; pagination.hidden = filtered.length === 0; pagination.innerHTML = `<button type="button" data-page="${page-1}" ${page===1?"disabled":""} aria-label="Previous page">‹</button>${Array.from({length:pageCount},(_,i)=>`<button type="button" data-page="${i+1}" class="${page===i+1?"active":""}" aria-current="${page===i+1?"page":"false"}">${i+1}</button>`).join("")}<button type="button" data-page="${page+1}" ${page===pageCount?"disabled":""} aria-label="Next page">›</button>`; };
    list.addEventListener("click", event => { const button = event.target.closest(".faq-question"); if (!button) return; const answer = button.nextElementSibling, open = button.getAttribute("aria-expanded") === "true"; list.querySelectorAll(".faq-question").forEach(item => { item.setAttribute("aria-expanded", "false"); item.nextElementSibling.hidden = true; }); button.setAttribute("aria-expanded", String(!open)); answer.hidden = open; });
    pagination.addEventListener("click", event => { const button = event.target.closest("button[data-page]"); if (!button || button.disabled) return; page = Number(button.dataset.page); renderFaqs(); list.scrollIntoView({ behavior: "smooth", block: "start" }); });
    search.addEventListener("input", () => { page = 1; renderFaqs(); });
    renderFaqs();
  }
  if (route === "resources-download") {
    const body = document.querySelector("#download-body"), pagination = document.querySelector("#download-pagination"), noResults = document.querySelector(".no-results"), search = document.querySelector("#download-search"), category = document.querySelector("#download-category");
    let page = 1;
    const renderDownloads = () => { const query = search.value.trim().toLowerCase(), selected = category.value, filtered = downloadItems.filter(item => (selected === "all" || item.category === selected) && `${item.id} ${item.name} ${item.size} ${item.type} ${item.date}`.toLowerCase().includes(query)), pageCount = Math.max(1, Math.ceil(filtered.length / 15)); page = Math.min(page, pageCount); const visible = filtered.slice((page - 1) * 15, page * 15); body.innerHTML = visible.map(item => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.size}</td><td>${item.type}</td><td>${item.date}</td><td><a href="${encodeURI(ABILIX_DOWNLOAD_ROOT + item.path)}" target="_blank" rel="noopener">Download</a></td></tr>`).join(""); noResults.hidden = filtered.length !== 0; document.querySelector(".download-table-wrap").hidden = filtered.length === 0; pagination.hidden = filtered.length === 0; pagination.innerHTML = `<button type="button" data-page="${page-1}" ${page===1?"disabled":""} aria-label="Previous page">‹</button>${Array.from({length:pageCount},(_,i)=>`<button type="button" data-page="${i+1}" class="${page===i+1?"active":""}" aria-current="${page===i+1?"page":"false"}">${i+1}</button>`).join("")}<button type="button" data-page="${page+1}" ${page===pageCount?"disabled":""} aria-label="Next page">›</button>`; };
    pagination.addEventListener("click", event => { const button = event.target.closest("button[data-page]"); if (!button || button.disabled) return; page = Number(button.dataset.page); renderDownloads(); document.querySelector(".download-controls").scrollIntoView({ behavior: "smooth", block: "start" }); });
    search.addEventListener("input", () => { page = 1; renderDownloads(); });
    category.addEventListener("change", () => { page = 1; renderDownloads(); });
    renderDownloads();
  }
  if (route === "product") {
    document.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));t.classList.add("active");document.querySelector("#main-product-image").src=t.dataset.src;}));
    let qty=1; document.querySelectorAll(".quantity button").forEach(b=>b.addEventListener("click",()=>{qty=Math.max(1,qty+Number(b.dataset.delta));document.querySelector("#quantity").textContent=qty;}));
    document.querySelector(".add-bag")?.addEventListener("click",()=>{bagCount+=qty;document.querySelector("#bag-count").textContent=bagCount;showToast(`${qty} Xiaoxing added to your bag.`);});
    document.querySelector(".buy-now")?.addEventListener("click",()=>showToast("Checkout is ready for integration in the production build."));
  }
}

window.addEventListener("hashchange", render);
render();
