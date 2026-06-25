import { readFileSync, writeFileSync } from 'fs';

let html = readFileSync('index.html', 'utf8');

const b64 = path => readFileSync(path).toString('base64');
const base = 'C:/Users/RobKozak/OneDrive - FortisureIT/Tuff Road Rugs/';
const m1 = b64(base + 'Market1.heic');
const m2 = b64(base + 'Market2.heic');
const m4 = b64(base + 'Market4.jpg');
const w1 = b64(base + 'Working1.heic');

// ── 1. HERO CSS ──────────────────────────────────────────────────────────────
html = html.replace(
  `  .hero{min-height:88vh;display:flex;align-items:center;padding:80px 40px;gap:60px;border-bottom:1px solid #1e1b18;}
  .hero-text{flex:1;max-width:520px;}
  .eyebrow{font-size:11px;letter-spacing:3.5px;color:#C96A20;margin-bottom:18px;}
  .hero-title{font-size:52px;font-weight:700;line-height:1.1;color:#f0ebe3;margin-bottom:20px;}
  .hero-title em{color:#C96A20;font-style:normal;}
  .hero-sub{font-size:15px;color:#9a9088;line-height:1.8;max-width:420px;margin-bottom:32px;}
  .hero-btns{display:flex;gap:14px;flex-wrap:wrap;}
  .btn-warm{background:#C96A20;color:#fff;border:none;padding:14px 28px;border-radius:8px;font-size:12px;letter-spacing:1.5px;cursor:pointer;font-weight:600;text-decoration:none;display:inline-block;transition:background .2s;}
  .btn-warm:hover{background:#b05c18;}
  .btn-ghost{background:transparent;color:#c8bfb5;border:1px solid #3a3530;padding:14px 28px;border-radius:8px;font-size:12px;letter-spacing:1.5px;cursor:pointer;text-decoration:none;display:inline-block;transition:border-color .2s,color .2s;}
  .btn-ghost:hover{border-color:#C96A20;color:#C96A20;}
  .hero-img{width:420px;height:420px;border-radius:16px;overflow:hidden;flex-shrink:0;border:1px solid #2a2520;}`,
  `  .hero{display:flex;align-items:center;justify-content:center;padding:80px 40px;gap:60px;border-bottom:1px solid #1e1b18;}
  .hero-inner{display:flex;align-items:center;gap:60px;max-width:1200px;width:100%;}
  .hero-text{flex:1;min-width:0;}
  .eyebrow{font-size:11px;letter-spacing:3.5px;color:#C96A20;margin-bottom:18px;}
  .hero-title{font-size:64px;font-weight:700;line-height:1.05;color:#f0ebe3;margin-bottom:24px;}
  .hero-title em{color:#C96A20;font-style:normal;}
  .hero-sub{font-size:16px;color:#9a9088;line-height:1.8;margin-bottom:36px;}
  .hero-btns{display:flex;gap:14px;flex-wrap:wrap;}
  .btn-warm{background:#C96A20;color:#fff;border:none;padding:14px 28px;border-radius:8px;font-size:12px;letter-spacing:1.5px;cursor:pointer;font-weight:600;text-decoration:none;display:inline-block;transition:background .2s;}
  .btn-warm:hover{background:#b05c18;}
  .btn-ghost{background:transparent;color:#c8bfb5;border:1px solid #3a3530;padding:14px 28px;border-radius:8px;font-size:12px;letter-spacing:1.5px;cursor:pointer;text-decoration:none;display:inline-block;transition:border-color .2s,color .2s;}
  .btn-ghost:hover{border-color:#C96A20;color:#C96A20;}
  .hero-carousel{flex:1;min-width:0;max-width:520px;height:480px;border-radius:16px;overflow:hidden;flex-shrink:0;border:1px solid #2a2520;position:relative;}
  .hero-carousel img{width:100%;height:100%;object-fit:cover;object-position:center;position:absolute;top:0;left:0;opacity:0;transition:opacity .7s ease;}
  .hero-carousel img.active{opacity:1;}
  .carousel-btn{position:absolute;top:50%;transform:translateY(-50%);background:rgba(15,14,12,.55);border:1px solid rgba(201,106,32,.4);color:#C96A20;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;font-size:16px;line-height:1;transition:background .2s;}
  .carousel-btn:hover{background:rgba(201,106,32,.75);color:#fff;}
  .carousel-prev{left:10px;}
  .carousel-next{right:10px;}
  .carousel-dots{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:7px;z-index:10;}
  .carousel-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.35);cursor:pointer;transition:background .2s;}
  .carousel-dot.active{background:#C96A20;}`
);

// ── 2. ORDER SECTION CSS ─────────────────────────────────────────────────────
html = html.replace(
  `  /* ORDER FORM */
  .order-section{background:#100e0c;}
  .order-wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}
  .order-intro h3{font-size:18px;font-weight:600;color:#f0ebe3;margin-bottom:12px;}
  .order-intro p{font-size:13px;color:#7a7268;line-height:1.75;margin-bottom:20px;}
  .order-samples{display:grid;grid-template-columns:1fr 1fr;gap:8px;border-radius:10px;overflow:hidden;}
  .order-samples img{width:100%;height:160px;object-fit:cover;display:block;}`,
  `  /* ORDER FORM */
  .order-section{background:#100e0c;}
  .order-text{margin-bottom:32px;}
  .order-text h3{font-size:18px;font-weight:600;color:#f0ebe3;margin-bottom:12px;}
  .order-text p{font-size:13px;color:#7a7068;line-height:1.75;margin-bottom:12px;}
  .order-wrap{display:flex;gap:40px;align-items:stretch;}
  .order-samples{flex:0 0 calc(50% - 20px);border-radius:10px;overflow:hidden;}
  .order-samples img{width:100%;height:100%;object-fit:cover;object-position:center 40%;display:block;border-radius:10px;}`
);

// ── 3. MOBILE BREAKPOINTS ────────────────────────────────────────────────────
html = html.replace(
  `    .hero{flex-direction:column;padding:60px 20px;}
    .hero-img{width:100%;height:260px;}
    .hero-title{font-size:36px;}`,
  `    .hero{flex-direction:column;padding:60px 20px;}
    .hero-inner{flex-direction:column;}
    .hero-carousel{width:100%;max-width:100%;height:280px;}
    .hero-title{font-size:36px;}`
);
html = html.replace(
  `    .order-wrap{grid-template-columns:1fr;}`,
  `    .order-wrap{flex-direction:column;}`
);

// ── 4. HERO HTML ─────────────────────────────────────────────────────────────
// Extract existing hero base64
const heroB64Match = html.match(/<div class="hero-img"><img src="(data:image\/[^"]+)"[^>]*><\/div>/);
const existingB64 = heroB64Match[1];

const carousel = `<div class="hero-carousel" id="heroCarousel">
  <img src="${existingB64}" alt="Miles at a market event" class="active">
  <img src="data:image/jpeg;base64,${m1}" alt="Customer with Elsie rug">
  <img src="data:image/jpeg;base64,${m2}" alt="Miles at booth in sunglasses">
  <img src="data:image/jpeg;base64,${m4}" alt="Miles holding the Elsie rug">
  <button class="carousel-btn carousel-prev" onclick="carouselMove(-1)" aria-label="Previous">&#8249;</button>
  <button class="carousel-btn carousel-next" onclick="carouselMove(1)" aria-label="Next">&#8250;</button>
  <div class="carousel-dots">
    <div class="carousel-dot active" onclick="carouselGo(0)"></div>
    <div class="carousel-dot" onclick="carouselGo(1)"></div>
    <div class="carousel-dot" onclick="carouselGo(2)"></div>
    <div class="carousel-dot" onclick="carouselGo(3)"></div>
  </div>
</div>`;

html = html.replace(heroB64Match[0], carousel);

// Wrap hero content in .hero-inner
html = html.replace(
  `<section class="hero" style="border-bottom:1px solid #1e1b18;">\n  <div class="hero-text">`,
  `<section class="hero" style="border-bottom:1px solid #1e1b18;">\n  <div class="hero-inner">\n  <div class="hero-text">`
);
html = html.replace(
  `</div>\n</section>\n\n<!-- HOW IT WORKS -->`,
  `</div>\n  </div>\n</section>\n\n<!-- HOW IT WORKS -->`
);

// ── 5. ORDER SECTION HTML ────────────────────────────────────────────────────
const formMatch = html.match(/<form id="order-form"[\s\S]*?<\/form>/);
const formBlock = formMatch[0];

// Add "how did you hear" field before quote-preview
const updatedForm = formBlock.replace(
  `<div class="quote-preview"`,
  `<div>
          <label for="fhear">HOW DID YOU HEAR ABOUT US?</label>
          <select id="fhear" name="hear">
            <option value="">Select one...</option>
            <option>Instagram</option>
            <option>Word of mouth</option>
            <option>Market / Pop-up event</option>
            <option>Google search</option>
            <option>TikTok</option>
            <option>Other</option>
          </select>
        </div>
        <div class="quote-preview"`
);

const orderSection = `<div class="order-text">
    <h3>Let's build something together</h3>
    <p>Every rug starts with your idea. Fill out the form and Miles will be in touch personally to discuss your vision, confirm details, and get started. Turnaround times vary by complexity — all confirmed at time of order.</p>
    <p>Have an image in mind? Upload it and Miles will use it as a reference. The more detail you share, the better.</p>
  </div>
  <div class="order-wrap">
    <div class="order-samples">
      <img src="data:image/jpeg;base64,${w1}" alt="Miles crafting a custom rug">
    </div>
    ${updatedForm}
  </div>`;

html = html.replace(
  /<h2 class="sec-head">Request a custom rug<\/h2>[\s\S]*?(<\/section>\s*<!-- CTA BAND -->)/,
  `<h2 class="sec-head">Request a custom rug</h2>\n  ${orderSection}\n$1`
);

// ── 6. CAROUSEL JS ───────────────────────────────────────────────────────────
const carouselJs = `
// Hero carousel
(function(){
  let cur = 0;
  const imgs = document.querySelectorAll('#heroCarousel img');
  const dots = document.querySelectorAll('#heroCarousel .carousel-dot');
  let timer = setInterval(() => carouselMove(1), 4500);
  function show(n){
    imgs[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + imgs.length) % imgs.length;
    imgs[cur].classList.add('active');
    dots[cur].classList.add('active');
  }
  window.carouselMove = function(dir){ clearInterval(timer); show(cur+dir); timer = setInterval(()=>carouselMove(1),4500); };
  window.carouselGo   = function(n)  { clearInterval(timer); show(n);       timer = setInterval(()=>carouselMove(1),4500); };
})();`;

html = html.replace('</script>', carouselJs + '\n</script>');

writeFileSync('index.html', html, 'utf8');
console.log('Rebuild complete.');
