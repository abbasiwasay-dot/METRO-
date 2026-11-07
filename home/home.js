/* ==========================================================================
   Metro — shared helpers (cart, product registry, cards, header/footer behaviour)
   ========================================================================== */
const METRO_CATALOG = [
  {"code":"10601259","type":"Heels","category":"women","price":1999,"discount":50,"image":"10601259_10_01.webp","hover":"s71.webp","colors":["10601259_10_01.webp","10601259_11_01.webp","10601259_30_01.webp"]},
  {"code":"10350841","type":"Wedges","category":"women","price":5999,"oldPrice":7499,"payNow":2300,"image":"l2.webp","hover":"s841.webp","colors":["l2.webp","l2-2.webp","l2-3.webp"]},
  {"code":"10350839","type":"Wedges","category":"women","price":5999,"oldPrice":7499,"payNow":2300,"image":"l3.webp","hover":"s839.webp","colors":["l3.webp","l3-2.webp","l3-3.webp"]},
  {"code":"40450621","type":"Slides","category":"women","price":1999,"discount":25,"image":"40450621_17_01.webp","hover":"new-in-s11.webp","colors":["40450621_01_01.webp|Brown","40450621_02_01.webp|Black","40450621_17_01.webp|Maroon"]},
  {"code":"10350887","type":"Wedges","category":"women","price":1999,"discount":30,"image":"10350887_06_01.webp","hover":"s31.webp","colors":["10350887_06_01.webp"]},
  {"code":"10350879","type":"Wedges","category":"women","price":1999,"discount":50,"image":"10350879_02_01.webp","hover":"s41.webp","colors":["10350879_02_01.webp","123_0026_DSC_9566.webp"]},
  {"code":"10350878","type":"Wedges","category":"women","price":5599,"discount":25,"payNow":2146,"image":"10350878_02_01.webp","hover":"s51.webp","colors":["10350878_02_01.webp","10350878_11_01.webp"]},
  {"code":"10400745","type":"Heels","category":"women","price":4999,"discount":25,"payNow":1916,"image":"10400745_32_01.webp","hover":"s81.webp","stock":8,"sold":{"count":13,"hours":23},"viewers":73,"colors":["10400745_32_01.webp|Silver","10400745_11_01.webp|Gold","10400745_10_01.webp|Green"]},
  {"code":"10650997","type":"Heels","category":"women","price":1999,"discount":25,"image":"10650997_02_01.webp","hover":"s971.webp","colors":["10650997_02_01.webp"]},
  {"code":"40450573","type":"Slides","category":"women","price":1999,"discount":30,"image":"40450573_03_01.webp","hover":"sale-s91.webp","colors":["40450573_03_01.webp|White","40450573_06_01.webp","40450573_08_01.webp","40450573_30_01.webp"]},
  {"code":"40100777","type":"Slides","category":"women","price":1999,"image":"40100777_02_01.webp","hover":"s777.webp","colors":["40100777_01_01.webp","40100777_02_01.webp"]},
  {"code":"40701461","type":"Slides","category":"women","price":1999,"image":"40701461_07_01.webp","hover":"s467.webp","colors":["40701461_07_01.webp|Green","40701461_17_01.webp|Maroon"]},
  {"code":"30200762","type":"Slides","category":"men","price":1999,"discount":50,"image":"30200762_01_01.webp","colors":["30200762_01_01.webp|Brown"]},
  {"code":"30200760","type":"Slides","category":"men","price":1999,"discount":25,"image":"30200760_01_01.webp","colors":["30200760_01_01.webp","30200760_02_01.webp"]},
  {"code":"30602287","type":"Slides","category":"men","price":1999,"discount":25,"image":"30602287_01_01.webp","colors":["30602287_01_01.webp|Brown","30602287_02_01.webp|Black"]},
  {"code":"30550384","type":"Slides","category":"men","price":1999,"discount":50,"image":"30550384_02_01.webp","colors":["30550384_01_01.webp|Brown","30550384_02_01.webp|Black"]},
  {"code":"30602286","type":"Slides","category":"men","price":1999,"discount":30,"image":"30602286_01_01.webp","colors":["30602286_01_01.webp|Brown","30602286_02_01.webp|Black"]},
  {"code":"30100569","type":"Slides","category":"men","price":1999,"discount":30,"image":"30100569_01_01.webp","colors":["30100569_01_01.webp","30100569_02_01.webp"]},
  {"code":"30800311","type":"Slides","category":"men","price":1999,"image":"30800311_01_01.webp","colors":["30800311_01_01.webp","30800311_02_01.webp"]},
  {"code":"30550383","type":"Slides","category":"men","price":1999,"image":"30550383_01_01.webp","colors":["30550383_01_01.webp","30550383_02_01.webp"]},
  {"code":"30200753","type":"Slides","category":"men","price":1999,"image":"30200753_01_01.webp","colors":["30200753_01_01.webp","30200753_02_01.webp"]},
  {"code":"30401202","type":"Slides","category":"men","price":1999,"image":"30401202_14_01.webp","colors":["30401202_14_01.webp"]},
  {"code":"20503643","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20503643_02_01.webp","colors":["20503643_02_01.webp","20503643_16_01.webp","20503643_17_01.webp"]},
  {"code":"20302825","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20302825_10_01.webp","colors":["20302825_10_01.webp","20302825_30_01.webp"]},
  {"code":"20503637","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20503637_02_01.webp","colors":["20503637_02_01.webp","20503637_03_01.webp"]},
  {"code":"20302823","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20302823_30_01.webp","colors":["20302823_30_01.webp"]},
  {"code":"20302816","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20302816_11_01.webp","colors":["20302816_11_01.webp"]},
  {"code":"20100987","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20100987_04_01.webp","colors":["20100987_04_01.webp"]},
  {"code":"20302814","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20302814_04_01.webp","colors":["20302814_04_01.webp","20302814_11_01.webp"]},
  {"code":"20302813","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20302813_10_01.webp","colors":["20302813_10_01.webp"]},
  {"code":"20302803","type":"Clutches","category":"bags","price":1999,"payNow":766,"image":"20302803_11_03.webp","colors":["20302803_11_03.webp","20302803_10_03.jpg"]},
  {"code":"20100954","type":"Clutches","category":"bags","price":1999,"discount":30,"payNow":766,"image":"20100954_20_01.webp","colors":["20100954_20_01.webp","20100954_05_01.webp","20100954_13_01.webp"]},
  {"code":"20503532","type":"Clutches","category":"bags","price":1999,"discount":50,"payNow":766,"image":"20503532_03_01.webp","colors":["20503532_03_01.webp"]},
  {"code":"20100962","type":"Clutches","category":"bags","price":1999,"discount":25,"payNow":766,"image":"20100962_10_01.jpg","colors":["20100962_10_01.jpg","20100962_11_01.webp"]},
  {"code":"20100960","type":"Clutches","category":"bags","price":1999,"discount":25,"payNow":766,"image":"20100960_10_01.webp","colors":["20100960_10_01.webp","20100960_11_01.webp"]},
  {"code":"20503546","type":"Clutches","category":"bags","price":1999,"discount":50,"payNow":766,"image":"20503546_17_01.webp","colors":["20503546_17_01.webp","20503546_11_01.webp"]},
  {"code":"20503488","type":"Clutches","category":"bags","price":1999,"discount":30,"payNow":766,"image":"20503488_05_01.webp","colors":["20503488_05_01.webp","20503488_14_01.webp"]},
  {"code":"miami","type":"Perfume","category":"fragrance","name":"MIAMI 50ml For Her","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitled_design_8.webp","hover":"78500002_02.webp","colors":["Untitled_design_8.webp"]},
  {"code":"bloom","type":"Perfume","category":"fragrance","name":"BLOOM 50ml For Her","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitled_design_9.webp","hover":"78600006_02.webp","colors":["Untitled_design_9.webp"]},
  {"code":"afternoon","type":"Perfume","category":"fragrance","name":"AFTERNOON 50ml For Her","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitled_design_10.webp","hover":"78600005_02.webp","colors":["Untitled_design_10.webp"]},
  {"code":"marbella","type":"Perfume","category":"fragrance","name":"MARBELLA 50ml For Her","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitled_design_11.webp","hover":"78600004_02.webp","colors":["Untitled_design_11.webp"]},
  {"code":"beach-day","type":"Perfume","category":"fragrance","name":"BEACH DAY 50ml For Her","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitled_design_12.webp","hover":"78600003_02.webp","colors":["Untitled_design_12.webp"]},
  {"code":"imagination","type":"Perfume","category":"fragrance","name":"IMAGINATION 50ml For Him","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitled_design_19.webp","hover":"78100130_02.webp","colors":["Untitled_design_19.webp"]},
  {"code":"sun-song","type":"Perfume","category":"fragrance","name":"SUN SONG 50ml Unisex","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitled_design_16_7e7d5759-b93a-46af-8290-0e997f4ea8e8.webp","hover":"78500001_02.webp","colors":["Untitled_design_16_7e7d5759-b93a-46af-8290-0e997f4ea8e8.webp"]},
  {"code":"L01","type":"Heels","category":"luxe","name":"Luxe Heels For Women-01","price":6399,"oldPrice":7999,"image":"l1.webp","lifestyle":"r1.webp","colors":["l1.webp","l1-2.webp","l1-3.webp"]},
  {"code":"L02","type":"Heels","category":"luxe","name":"Luxe Heels For Women-02","price":6399,"oldPrice":7999,"image":"l2.webp","lifestyle":"r2.webp","colors":["l2.webp","l2-2.webp","l2-3.webp"]},
  {"code":"L03","type":"Heels","category":"luxe","name":"Luxe Heels For Women-03","price":6399,"oldPrice":7999,"image":"l3.webp","lifestyle":"r3.webp","colors":["l3.webp","l3-2.webp","l3-3.webp"]},
  {"code":"L04","type":"Heels","category":"luxe","name":"Luxe Heels For Women-04","price":6399,"oldPrice":7999,"image":"l4.webp","lifestyle":"r4.webp","colors":["l4.webp","l4-2.webp","l4-3.webp"]},
  {"code":"L05","type":"Heels","category":"luxe","name":"Luxe Heels For Women-05","price":6399,"oldPrice":7999,"image":"l5.webp","lifestyle":"r5.webp","colors":["l5.webp","l5-2.webp","l5-3.webp"]},
  {"code":"L06","type":"Heels","category":"luxe","name":"Luxe Heels For Women-06","price":6399,"oldPrice":7999,"image":"l6.webp","lifestyle":"r6.webp","colors":["l6.webp","l6-2.webp","l6-3.webp","l6-4.webp"]},
  {"code":"L07","type":"Heels","category":"luxe","name":"Luxe Heels For Women-07","price":6399,"oldPrice":7999,"image":"l7.webp","lifestyle":"r7.webp","colors":["l7.webp","l7-2.webp","l7-3.webp"]},
  {"code":"L08","type":"Heels","category":"luxe","name":"Luxe Heels For Women-08","price":6399,"oldPrice":7999,"image":"l8.webp","lifestyle":"r8.webp","colors":["l8.webp","l8-2.webp","l8-3.webp"]},
  {"code":"L09","type":"Heels","category":"luxe","name":"Luxe Heels For Women-09","price":6399,"oldPrice":7999,"image":"l9.webp","lifestyle":"r9.webp","colors":["l9.webp","l9-2.webp"]},
  {"code":"L10","type":"Heels","category":"luxe","name":"Luxe Heels For Women-10","price":6399,"oldPrice":7999,"image":"l10.webp","lifestyle":"r10.webp","colors":["l10.webp","l10-2.webp","l10-3.webp"]},
  {"code":"10601246","type":"Heels","category":"women","price":5600,"payNow":2120,"image":"10601246_17_01.webp","hover":"newin4.webp","colors":["10601246_17_01.webp"]},
  {"code":"10400710","type":"Heels","category":"women","price":4999,"payNow":1916,"image":"10400710_02_01.webp","hover":"newin1.webp","colors":["10400710_02_01.webp"]},
  {"code":"10400700","type":"Heels","category":"women","price":5700,"payNow":2300,"image":"newin21.webp","hover":"newin2.webp","colors":["newin21.webp"]},
  {"code":"10400728","type":"Heels","category":"women","price":5900,"payNow":2250,"image":"10400728_02_01.webp","hover":"newin3.webp","colors":["10400728_02_01.webp"]},
  {"code":"signature","type":"Perfume","category":"fragrance","name":"SIGNATURE 50ml","price":1999,"oldPrice":3000,"payNow":1533,"image":"Untitleddesign_20.webp","hover":"78600001_02.webp","colors":["Untitleddesign_20.webp"]},
  {"code":"S1","type":"Wedges","category":"women","price":4999,"payNow":1916,"image":"s1.webp","hover":"s12.webp","colors":["s1.webp"]},
  {"code":"S2","type":"Wedges","category":"women","price":5700,"payNow":2300,"image":"s2.webp","hover":"s21.webp","colors":["s2.webp"]},
  {"code":"S3","type":"Wedges","category":"women","price":5900,"payNow":2250,"image":"s3.webp","hover":"s31.webp","colors":["s3.webp"]},
  {"code":"S4","type":"Wedges","category":"women","price":5600,"payNow":2120,"image":"s4.webp","hover":"s41.webp","colors":["s4.webp"]},
  {"code":"S5","type":"Wedges","category":"women","price":5600,"payNow":2120,"image":"s5.webp","hover":"s51.webp","colors":["s5.webp"]},
  {"code":"S9","type":"Wedges","category":"women","price":5600,"payNow":2120,"image":"s9.webp","hover":"s91.webp","colors":["s9.webp"]},
  {"code":"S10","type":"Wedges","category":"women","price":5600,"payNow":2120,"image":"s10.webp","hover":"s101.webp","colors":["s10.webp"]},
  {"code":"S11","type":"Wedges","category":"women","price":5600,"payNow":2120,"image":"s11.webp","hover":"s111.webp","colors":["s11.webp"]},
  {"code":"M1","type":"Footwear","category":"men","price":4999,"payNow":1916,"image":"m1.webp","hover":"m12.webp","colors":["m1.webp"]},
  {"code":"M2","type":"Footwear","category":"men","price":5700,"payNow":2300,"image":"m2.webp","hover":"m21.webp","colors":["m2.webp"]},
  {"code":"M3","type":"Footwear","category":"men","price":5900,"payNow":2250,"image":"m3.webp","hover":"m31.webp","colors":["m3.webp"]},
  {"code":"M4","type":"Footwear","category":"men","price":5600,"payNow":2120,"image":"m4.webp","hover":"m41.webp","colors":["m4.webp"]},
  {"code":"M5","type":"Footwear","category":"men","price":5600,"payNow":2120,"image":"m55.webp","hover":"m51.webp","colors":["m55.webp"]},
  {"code":"M6","type":"Footwear","category":"men","price":5600,"payNow":2120,"image":"m6.webp","hover":"m61.webp","colors":["m6.webp"]},
  {"code":"M7","type":"Footwear","category":"men","price":5600,"payNow":2120,"image":"m7.webp","hover":"m71.webp","colors":["m7.webp"]},
  {"code":"M8","type":"Footwear","category":"men","price":5600,"payNow":2120,"image":"m8.webp","hover":"m81.webp","colors":["m8.webp"]},
  {"code":"40450620","type":"Slides","category":"women","price":1999,"discount":30,"image":"40450620_30_01.webp","hover":"s61.webp","colors":["40450620_30_01.webp"]},
  {"code":"40450604","type":"Slides","category":"women","price":1999,"discount":50,"image":"40450604_02_01.webp","hover":"sale-s10.webp","colors":["40450604_02_01.webp","40450604_06_01.webp"]}
];

const Metro = (() => {
  'use strict';

  // Base path detection for GitHub Pages vs Localhost
  const repo = window.location.hostname.includes('github.io') ? '/METRO-' : '';
  
  const LINKS = {
    home: repo + '/home/homepage.html',
    product: repo + '/productpage/product.html',
    cart: repo + '/cartpage/cart.html',
    checkout: repo + '/checkoutpage/checkout.html',
  };
  const SHIPPING = { fee: 100, freeFrom: 3500 };
  const MAX_QTY = 10;
  const IMAGES = repo + '/images/';
  const INSTALLMENT_RATIO = 0.383;
  const KEYS = { cart: 'metro.cart', registry: 'metro.products', recent: 'metro.recent', wishlist: 'metro.wishlist' };

  const range = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => String(from + i));
  const CATEGORIES = {
    women: { label: 'Women', url: repo + '/women/women.html', audience: 'women', sizes: range(36, 41) },
    men: { label: 'Men', url: repo + '/men/men.html', audience: 'men', sizes: range(40, 45) },
    bags: { label: 'Bags', url: repo + '/bag/bag.html', audience: 'women', sizes: [] },
    fragrance: { label: 'Fragrance', url: repo + '/fragrance/fragrance.html', audience: '', sizes: [] },
    luxe: { label: 'Luxe Edition', url: repo + '/luxe-edition/luxe-edition.html', audience: 'women', sizes: range(36, 41) },
  };

  /* ---- tiny utilities ---- */
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ESC[c]);
  const money = (n) => 'Rs.' + Math.round(n).toLocaleString('en-US');
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const read = (key, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (e) {
      return fallback;
    }
  };
  const write = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* storage blocked — ignore */
    }
  };

  /* ---- products ---- */
  function product(raw) {
    const cat = CATEGORIES[raw.category] || { label: '', audience: '', url: '#' };
    const colors = raw.colors.map((entry, i) => {
      const [image, label] = entry.split('|');
      const shade = image.match(/_(\d{2})_\d{2}/);
      return { image: IMAGES + image, name: label || 'Style ' + (i + 1), code: shade ? shade[1] : '' };
    });

    let discount = raw.discount || 0;
    let oldPrice = raw.oldPrice || 0;
    if (oldPrice && !discount) discount = Math.round(100 * (1 - raw.price / oldPrice));
    else if (discount && !oldPrice) oldPrice = Math.round(raw.price / (1 - discount / 100) / 100) * 100;

    const name = raw.name || `${raw.type} for ${cat.audience}-${raw.code}`;
    return {
      id: slug(`${raw.type}-${raw.code}`),
      code: raw.code,
      type: raw.type,
      name,
      category: raw.category,
      categoryLabel: cat.label,
      categoryUrl: cat.url,
      price: raw.price,
      oldPrice,
      discount,
      payNow: raw.payNow || Math.round(raw.price * INSTALLMENT_RATIO),
      colors,
      image: raw.image ? IMAGES + raw.image : colors[0].image,
      hover: raw.hover ? IMAGES + raw.hover : '',
      lifestyle: raw.lifestyle ? IMAGES + raw.lifestyle : '',
      sizes: cat.sizes,
      stock: raw.stock || 20,
      sold: raw.sold || null,
      viewers: raw.viewers || 0,
      description: cat.audience ? `${raw.type} for ${cat.audience}` : name,
    };
  }

  const defaultColor = (p) => Math.max(0, p.colors.findIndex((c) => c.image === p.image));
  const productUrl = (p, color = 0) => `${LINKS.product}?id=${encodeURIComponent(p.id)}${color ? '&color=' + color : ''}`;

  function register(list) {
    const all = read(KEYS.registry, {});
    list.forEach((p) => {
      all[p.id] = p;
    });
    write(KEYS.registry, all);
  }
  const lookup = (id) => read(KEYS.registry, {})[id] || null;

  /* ---- product card ---- */
  function card(p) {
    const url = productUrl(p, defaultColor(p));
    const current = defaultColor(p);
    const price = p.discount
      ? `<p class="price price--sale"><del>${money(p.oldPrice)}</del><ins>${money(p.price)}</ins></p>`
      : `<p class="price"><ins>${money(p.price)}</ins></p>`;
    const swatches =
      p.colors.length > 1
        ? `<ul class="swatches" aria-label="Colours">${p.colors
            .map(
              (c, i) => `<li><button class="swatch" type="button" data-color="${i}" aria-pressed="${i === current}" aria-label="${esc(c.name)}" title="${esc(c.name)}"><img src="${esc(c.image)}" alt="" loading="lazy"></button></li>`
            )
            .join('')}</ul>`
        : '';

    return `<article class="product-card" data-id="${esc(p.id)}">
      <div class="product-card__media">
        <a class="product-card__link" href="${esc(url)}" data-product-link aria-label="${esc(p.name)}">
          <img class="product-card__img product-card__img--main" src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" width="380" height="380">
        </a>
        ${p.discount ? `<span class="badge">-${p.discount}%</span>` : ''}
        ${wishButton(p)}
      </div>
      <div class="product-card__info">
        <h3 class="product-card__title"><a href="${esc(url)}" data-product-link>${esc(p.name)}</a></h3>
        ${price}
        <p class="installment"><img src="${IMAGES}baadmay-short-logo.webp" alt="" width="16" height="16"><span>Pay only ${money(p.payNow)} now</span></p>
        ${swatches}
      </div>
    </article>`;
  }

  function bindCards(container, byId) {
    container.addEventListener('click', (event) => {
      const swatch = event.target.closest('.swatch');
      const cardEl = event.target.closest('.product-card');
      if (!swatch || !cardEl) return;
      const p = byId(cardEl.dataset.id);
      const index = Number(swatch.dataset.color);
      if (!p || !p.colors[index]) return;
      $('.product-card__img--main', cardEl).src = p.colors[index].image;
      $$('.swatch', cardEl).forEach((s) => s.setAttribute('aria-pressed', String(s === swatch)));
      $$('[data-product-link]', cardEl).forEach((a) => a.setAttribute('href', productUrl(p, index)));
    });
  }

  /* ---- horizontal rail (home page + product page) ---- */
  function railHTML(inner, label) {
    return `<div class="rail" data-rail>
      <button class="rail__btn rail__btn--prev" type="button" data-rail-prev aria-label="Previous ${esc(label)}"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
      <div class="rail__track" data-rail-track>${inner}</div>
      <button class="rail__btn rail__btn--next" type="button" data-rail-next aria-label="Next ${esc(label)}"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
    </div>`;
  }

  function initRails(root = document) {
    $$('[data-rail]', root).forEach((rail) => {
      if (rail.dataset.ready) return;
      rail.dataset.ready = 'true';
      const track = $('[data-rail-track]', rail);
      const prev = $('[data-rail-prev]', rail);
      const next = $('[data-rail-next]', rail);
      const update = () => {
        prev.disabled = track.scrollLeft <= 2;
        next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      };
      const page = (dir) => track.scrollBy({ left: dir * track.clientWidth * 0.85, behavior: 'smooth' });
      prev.addEventListener('click', () => page(-1));
      next.addEventListener('click', () => page(1));
      track.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    });
  }

  /* ---- toast ---- */
  function toast(message, type = 'success') {
    let region = $('#toast-region');
    if (!region) {
      region = document.createElement('div');
      region.id = 'toast-region';
      region.className = 'toast-region';
      region.setAttribute('role', 'status');
      region.setAttribute('aria-live', 'polite');
      document.body.appendChild(region);
    }
    const el = document.createElement('div');
    el.className = 'toast toast--' + type;
    el.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}" aria-hidden="true"></i><span>${esc(message)}</span>`;
    region.appendChild(el);
    setTimeout(() => {
      el.classList.add('is-leaving');
      setTimeout(() => el.remove(), 320);
    }, 3000);
  }

  /* ---- cart ---- */
  const cart = {
    items: () => read(KEYS.cart, []).filter((i) => i && i.qty > 0).map((i) => ({ ...i, image: IMAGES + String(i.image || '').split('/').pop() })),
    count: () => cart.items().reduce((sum, i) => sum + i.qty, 0),
    save(items) {
      write(KEYS.cart, items);
      updateBadge();
      document.dispatchEvent(new CustomEvent('metro:cart'));
    },
    add(p, colorIndex, size, qty) {
      const key = [p.id, colorIndex, size].join('|');
      const max = Math.min(MAX_QTY, p.stock);
      const items = cart.items();
      const found = items.find((i) => i.key === key);
      if (found) found.qty = Math.min(max, found.qty + qty);
      else {
        items.push({
          key,
          id: p.id,
          name: p.name,
          price: p.price,
          image: p.colors[colorIndex].image,
          color: p.colors[colorIndex].name,
          size,
          qty: Math.min(max, qty),
          max,
          url: productUrl(p, colorIndex),
        });
      }
      cart.save(items);
    },
    setQty(key, qty) {
      const items = cart.items();
      const line = items.find((i) => i.key === key);
      if (!line) return;
      if (qty <= 0) return cart.remove(key);
      line.qty = Math.min(line.max, qty);
      cart.save(items);
    },
    remove: (key) => cart.save(cart.items().filter((i) => i.key !== key)),
    clear: () => cart.save([]),
    totals(items = cart.items()) {
      const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
      const delivery = subtotal === 0 || subtotal >= SHIPPING.freeFrom ? 0 : SHIPPING.fee;
      return { subtotal, delivery, total: subtotal + delivery, remainingForFree: Math.max(0, SHIPPING.freeFrom - subtotal) };
    },
  };

  function updateBadge() {
    const count = cart.count();
    $$('[data-cart-count]').forEach((el) => {
      el.textContent = count > 99 ? '99+' : count;
      el.hidden = count === 0;
    });
  }

  const recent = {
    ids: () => read(KEYS.recent, []),
    push(id) {
      write(KEYS.recent, [id, ...recent.ids().filter((x) => x !== id)].slice(0, 10));
    },
  };

  /* ---- wishlist ---- */
  const wishlist = {
    items: () =>
      read(KEYS.wishlist, [])
        .filter((i) => i && i.id)
        .map((i) => ({ ...i, image: IMAGES + String(i.image || '').split('/').pop() })),
    has: (id) => wishlist.items().some((i) => i.id === id),
    save(items) {
      write(KEYS.wishlist, items);
      syncWishlist();
    },
    toggle(p) {
      const items = wishlist.items();
      const index = items.findIndex((i) => i.id === p.id);
      if (index >= 0) {
        items.splice(index, 1);
        wishlist.save(items);
        return false;
      }
      const color = defaultColor(p);
      items.unshift({
        id: p.id,
        name: p.name,
        price: p.price,
        oldPrice: p.oldPrice,
        discount: p.discount,
        image: p.colors[color].image,
        url: productUrl(p, color),
      });
      wishlist.save(items);
      return true;
    },
    remove: (id) => wishlist.save(wishlist.items().filter((i) => i.id !== id)),
    clear: () => wishlist.save([]),
  };

  function paintHeart(btn, on) {
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
    const icon = $('i', btn);
    if (icon) icon.className = (on ? 'fa-solid' : 'fa-regular') + ' fa-heart';
  }

  function wishButton(p) {
    const on = wishlist.has(p.id);
    return `<button class="wish-btn" type="button" data-wish="${esc(p.id)}" aria-pressed="${on}" aria-label="${on ? 'Remove from wishlist' : 'Add to wishlist'}"><i class="${on ? 'fa-solid' : 'fa-regular'} fa-heart" aria-hidden="true"></i></button>`;
  }

  function syncWishlist() {
    const items = wishlist.items();
    $$('[data-wish-count]').forEach((el) => {
      el.textContent = items.length > 99 ? '99+' : items.length;
      el.hidden = items.length === 0;
    });
    $$('[data-wish]').forEach((btn) => paintHeart(btn, items.some((i) => i.id === btn.dataset.wish)));
    renderWishlist(items);
  }

  function renderWishlist(items) {
    const list = $('#wishlist-items');
    if (!list) return;
    $('#wishlist-count').textContent = items.length ? ` (${items.length})` : '';
    $('#wishlist-clear').hidden = items.length === 0;
    list.innerHTML = items.length
      ? items
          .map((i) => {
            const price = i.discount && i.oldPrice
              ? `<del>${money(i.oldPrice)}</del> <ins>${money(i.price)}</ins>`
              : `<ins>${money(i.price)}</ins>`;
            return `<li class="wish-item">
              <a class="wish-item__img" href="${esc(i.url)}" tabindex="-1" aria-hidden="true"><img src="${esc(i.image)}" alt="" loading="lazy"></a>
              <div class="wish-item__info">
                <a class="wish-item__name" href="${esc(i.url)}">${esc(i.name)}</a>
                <p class="wish-item__price">${price}</p>
                <a class="btn btn--outline wish-item__view" href="${esc(i.url)}">View product</a>
              </div>
              <button class="wish-item__remove" type="button" data-wish-remove="${esc(i.id)}" aria-label="Remove ${esc(i.name)} from wishlist"><i class="fa-regular fa-trash-can" aria-hidden="true"></i></button>
            </li>`;
          })
          .join('')
      : `<li class="drawer__empty"><i class="fa-regular fa-heart" aria-hidden="true"></i><h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it here.</p></li>`;
  }

  let wishlistOpener = null;
  function setWishlistOpen(open) {
    if (!$('#wishlist-drawer')) {
      document.body.insertAdjacentHTML(
        'beforeend',
        `<div class="drawer-backdrop" data-wishlist-close hidden></div>
        <aside class="drawer" id="wishlist-drawer" role="dialog" aria-modal="true" aria-labelledby="wishlist-title" hidden>
          <div class="drawer__head">
            <h2 id="wishlist-title">Wishlist<span id="wishlist-count"></span></h2>
            <button class="icon-btn" type="button" data-wishlist-close aria-label="Close wishlist"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
          </div>
          <ul class="drawer__list" id="wishlist-items"></ul>
          <div class="drawer__foot"><button class="btn btn--outline btn--block" type="button" id="wishlist-clear">Clear wishlist</button></div>
        </aside>`
      );
    }
    const drawer = $('#wishlist-drawer');
    if (open) wishlistOpener = document.activeElement;
    drawer.hidden = !open;
    $('.drawer-backdrop').hidden = !open;
    document.body.classList.toggle('has-drawer', open);
    if (open) {
      renderWishlist(wishlist.items());
      $('.icon-btn[data-wishlist-close]', drawer).focus();
    } else if (wishlistOpener) {
      wishlistOpener.focus();
    }
  }

  /* ---- search ---- */
  const SEARCH_ALIASES = {
    heels: 'shoes footwear', wedges: 'shoes footwear', slides: 'shoes footwear sandals chappal',
    footwear: 'shoes', clutches: 'bag bags purse', perfume: 'fragrance scent',
  };
  const SEARCH_LINKS = [
    ...Object.values(CATEGORIES),
    { label: 'Sale', url: repo + '/sale/sale.html' },
    { label: 'New in', url: repo + '/new-in/new-in.html' },
  ];
  let catalog = null;
  const getCatalog = () => catalog || (catalog = METRO_CATALOG.map((raw) => product(raw)));
  const findProduct = (id) => lookup(id) || getCatalog().find((p) => p.id === id) || null;
  const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function searchCatalog(query) {
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean).map((t) => new RegExp('(^|[^a-z0-9])' + escapeRe(t)));
    if (!tokens.length) return [];
    return getCatalog().filter((p) => {
      const hay = [
        p.name, p.type, p.description, p.code, p.categoryLabel, p.category,
        SEARCH_ALIASES[String(p.type).toLowerCase()] || '',
        p.discount ? 'sale discount' : '',
        ...p.colors.map((c) => c.name).filter((n) => !/^Style \d/.test(n)),
      ].join(' ').toLowerCase();
      return tokens.every((re) => re.test(hay));
    });
  }

  let searchHits = [];
  function renderSearch(query) {
    const box = $('#search-results');
    if (!box) return;
    const q = query.trim();
    if (!q) {
      searchHits = [];
      box.innerHTML = `<p class="search-results__hint">Popular categories</p><div class="search-chips">${SEARCH_LINKS.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join('')}</div>`;
      return;
    }
    searchHits = searchCatalog(q);
    if (!searchHits.length) {
      box.innerHTML = `<p class="search-results__hint">No products found for “${esc(q)}”. Try “heels”, “bag” or “perfume”.</p>`;
      return;
    }
    const shown = searchHits.slice(0, 8);
    box.innerHTML =
      shown
        .map((p) => {
          const price = p.discount ? `<del>${money(p.oldPrice)}</del> ${money(p.price)}` : money(p.price);
          return `<a class="search-result" href="${esc(productUrl(p, defaultColor(p)))}" data-search-id="${esc(p.id)}">
            <img src="${esc(p.image)}" alt="" loading="lazy">
            <span class="search-result__text"><span class="search-result__name">${esc(p.name)}</span><span class="search-result__cat">${esc(p.categoryLabel)}</span></span>
            <span class="search-result__price">${price}</span>
          </a>`;
        })
        .join('') +
      (searchHits.length > shown.length ? `<p class="search-results__hint">Showing ${shown.length} of ${searchHits.length} — type more to narrow it down.</p>` : '');
  }

  function setSearchOpen(open) {
    const header = $('.site-header');
    if (!header) return;
    let panel = $('#site-search');
    if (!panel) {
      header.insertAdjacentHTML(
        'beforeend',
        `<div class="site-search" id="site-search" hidden>
          <form class="site-search__field" role="search" autocomplete="off">
            <input type="search" id="search-input" placeholder="Search heels, wedges, bags, perfume…" aria-label="Search products">
            <button type="submit" aria-label="Search"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></button>
          </form>
          <div class="search-results" id="search-results" aria-live="polite"></div>
        </div>`
      );
      panel = $('#site-search');
      const input = $('#search-input');
      input.addEventListener('input', () => renderSearch(input.value));
      $('form', panel).addEventListener('submit', (e) => {
        e.preventDefault();
        renderSearch(input.value);
        const first = searchHits[0];
        if (first) {
          register([first]);
          location.href = productUrl(first, defaultColor(first));
        }
      });
      panel.addEventListener('click', (e) => {
        const link = e.target.closest('[data-search-id]');
        const hit = link && searchHits.find((p) => p.id === link.dataset.searchId);
        if (hit) register([hit]);
      });
    }
    panel.hidden = !open;
    $$('[data-open-search]').forEach((b) => b.setAttribute('aria-expanded', String(open)));
    if (open) {
      renderSearch($('#search-input').value);
      $('#search-input').focus();
    }
  }

  /* ---- header / footer behaviour ---- */
  function init() {
    const toggle = $('.nav-toggle');
    const nav = $('#site-nav');
    if (toggle && nav) {
      const setOpen = (open) => {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        toggle.firstElementChild.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      };
      toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
      document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
      document.addEventListener('click', (e) => !e.target.closest('.site-header') && setOpen(false));
    }

    const form = $('[data-newsletter]');
    if (form) {
      const error = $('.newsletter__error', form);
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.elements.email;
        if (!input.value.trim() || !input.checkValidity()) {
          error.textContent = 'Please enter a valid email address.';
          error.hidden = false;
          input.focus();
          return;
        }
        error.hidden = true;
        form.reset();
        toast('Thanks for subscribing!');
      });
    }

    updateBadge();
    syncWishlist();
    window.addEventListener('storage', () => {
      updateBadge();
      syncWishlist();
    });

    document.addEventListener('click', (e) => {
      const t = e.target;
      if (t.closest('[data-open-search]')) {
        const panel = $('#site-search');
        setSearchOpen(!panel || panel.hidden);
        return;
      }
      if (t.closest('[data-open-wishlist]')) return setWishlistOpen(true);
      if (t.closest('[data-wishlist-close]')) return setWishlistOpen(false);
      if (t.closest('#wishlist-clear')) {
        wishlist.clear();
        return toast('Wishlist cleared');
      }
      const remove = t.closest('[data-wish-remove]');
      if (remove) return wishlist.remove(remove.dataset.wishRemove);

      const heart = t.closest('[data-wish]');
      if (heart) {
        let p = lookup(heart.dataset.wish);
        if (!p) {
          p = findProduct(heart.dataset.wish);
          if (p) register([p]);
        }
        if (!p) return;
        toast(wishlist.toggle(p) ? `${p.name} added to your wishlist` : 'Removed from your wishlist');
        return;
      }
      const panel = $('#site-search');
      if (panel && !panel.hidden && !t.closest('.site-header')) setSearchOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const drawer = $('#wishlist-drawer');
      if (drawer && !drawer.hidden) return setWishlistOpen(false);
      const panel = $('#site-search');
      if (panel && !panel.hidden) setSearchOpen(false);
    });
  }

  function listing(products) {
    const grid = $('#grid');
    const countEl = $('#count');
    const sortEl = $('#sort');
    const panel = $('#filterPanel');
    const filterBtn = $('#filterToggle');
    const minEl = $('#minPrice');
    const maxEl = $('#maxPrice');
    const chips = $$('[data-discount-chip]');
    const byId = (id) => products.find((p) => p.id === id);

    const state = { sort: 'featured', layout: '4', min: null, max: null, discount: null };
    const num = (v) => (v === '' || v === null || Number.isNaN(Number(v)) ? null : Number(v));

    const sorters = {
      featured: (a, b) => products.indexOf(a) - products.indexOf(b),
      'title-ascending': (a, b) => a.name.localeCompare(b.name),
      'title-descending': (a, b) => b.name.localeCompare(a.name),
      'price-ascending': (a, b) => a.price - b.price,
      'price-descending': (a, b) => b.price - a.price,
      'created-descending': (a, b) => products.indexOf(b) - products.indexOf(a),
      'created-ascending': (a, b) => products.indexOf(a) - products.indexOf(b),
    };

    function render() {
      const list = products
        .filter((p) => (state.min === null || p.price >= state.min) && (state.max === null || p.price <= state.max))
        .filter((p) => !state.discount || (p.discount >= state.discount[0] && p.discount <= state.discount[1]))
        .sort(sorters[state.sort]);

      grid.dataset.layout = state.layout;
      grid.innerHTML = list.length
        ? list.map(card).join('')
        : `<div class="empty-state"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i><h2>No products found</h2><p>Try changing or clearing your filters.</p><button class="btn btn--outline" type="button" data-reset>Clear filters</button></div>`;
      countEl.textContent = `${list.length} ${list.length === 1 ? 'product' : 'products'}`;
    }

    sortEl.addEventListener('change', () => {
      state.sort = sortEl.value;
      render();
    });

    $$('.layout-btn').forEach((btn) =>
      btn.addEventListener('click', () => {
        state.layout = btn.dataset.layout;
        $$('.layout-btn').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        render();
      })
    );

    filterBtn.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      filterBtn.setAttribute('aria-expanded', String(!panel.hidden));
    });

    const onPrice = () => {
      state.min = num(minEl.value);
      state.max = num(maxEl.value);
      render();
    };
    minEl.addEventListener('input', onPrice);
    maxEl.addEventListener('input', onPrice);

    chips.forEach((chip) =>
      chip.addEventListener('click', () => {
        const wasActive = chip.getAttribute('aria-pressed') === 'true';
        chips.forEach((c) => c.setAttribute('aria-pressed', 'false'));
        state.discount = wasActive ? null : [Number(chip.dataset.min), Number(chip.dataset.max)];
        if (!wasActive) chip.setAttribute('aria-pressed', 'true');
        render();
      })
    );

    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-reset]')) return;
      Object.assign(state, { min: null, max: null, discount: null });
      minEl.value = '';
      maxEl.value = '';
      chips.forEach((c) => c.setAttribute('aria-pressed', 'false'));
      render();
    });

    bindCards(grid, byId);
    render();
  }

  return {
    LINKS, SHIPPING, MAX_QTY, CATEGORIES,
    esc, money, $, $$, clamp, read, write,
    product, register, lookup, defaultColor, productUrl,
    card, bindCards, railHTML, initRails, toast,
    cart, recent, wishlist, findProduct, init, listing,
  };
})();


/* ---- Homepage ---- */
const SECTIONS = {
  "new-in": [
    {
      "code": "10400710",
      "type": "Heels",
      "category": "women",
      "price": 4999,
      "payNow": 1916,
      "image": "10400710_02_01.webp",
      "hover": "newin1.webp",
      "colors": [
        "10400710_02_01.webp"
      ]
    },
    {
      "code": "10400700",
      "type": "Heels",
      "category": "women",
      "price": 5700,
      "payNow": 2300,
      "image": "newin21.webp",
      "hover": "newin2.webp",
      "colors": [
        "newin21.webp"
      ]
    },
    {
      "code": "10400728",
      "type": "Heels",
      "category": "women",
      "price": 5900,
      "payNow": 2250,
      "image": "10400728_02_01.webp",
      "hover": "newin3.webp",
      "colors": [
        "10400728_02_01.webp"
      ]
    },
    {
      "code": "10601246",
      "type": "Heels",
      "category": "women",
      "price": 5600,
      "payNow": 2120,
      "image": "10601246_17_01.webp",
      "hover": "newin4.webp",
      "colors": [
        "10601246_17_01.webp"
      ]
    }
  ],
  "fragrance": [
    {
      "code": "signature",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "SIGNATURE 50ml",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitleddesign_20.webp",
      "hover": "78600001_02.webp",
      "colors": [
        "Untitleddesign_20.webp"
      ]
    },
    {
      "code": "miami",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "MIAMI 50ml For Her",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitled_design_8.webp",
      "hover": "78500002_02.webp",
      "colors": [
        "Untitled_design_8.webp"
      ]
    },
    {
      "code": "afternoon",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "AFTERNOON 50ml For Her",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitled_design_10.webp",
      "hover": "78600005_02.webp",
      "colors": [
        "Untitled_design_10.webp"
      ]
    },
    {
      "code": "marbella",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "MARBELLA 50ml For Her",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitled_design_11.webp",
      "hover": "78600004_02.webp",
      "colors": [
        "Untitled_design_11.webp"
      ]
    },
    {
      "code": "beach-day",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "BEACH DAY 50ml For Her",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitled_design_12.webp",
      "hover": "78600003_02.webp",
      "colors": [
        "Untitled_design_12.webp"
      ]
    },
    {
      "code": "sun-song",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "SUN SONG 50ml Unisex",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitled_design_16_7e7d5759-b93a-46af-8290-0e997f4ea8e8.webp",
      "hover": "78500001_02.webp",
      "colors": [
        "Untitled_design_16_7e7d5759-b93a-46af-8290-0e997f4ea8e8.webp"
      ]
    },
    {
      "code": "bloom",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "BLOOM 50ml For Her",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitled_design_9.webp",
      "hover": "78600006_02.webp",
      "colors": [
        "Untitled_design_9.webp"
      ]
    },
    {
      "code": "imagination",
      "type": "Perfume",
      "category": "fragrance",
      "price": 1999,
      "name": "IMAGINATION 50ml For Him",
      "oldPrice": 3000,
      "payNow": 1533,
      "image": "Untitled_design_19.webp",
      "hover": "78100130_02.webp",
      "colors": [
        "Untitled_design_19.webp"
      ]
    }
  ],
  "wedges": [
    {
      "code": "S1",
      "type": "Wedges",
      "category": "women",
      "price": 4999,
      "payNow": 1916,
      "image": "s1.webp",
      "hover": "s12.webp",
      "colors": [
        "s1.webp"
      ]
    },
    {
      "code": "S2",
      "type": "Wedges",
      "category": "women",
      "price": 5700,
      "payNow": 2300,
      "image": "s2.webp",
      "hover": "s21.webp",
      "colors": [
        "s2.webp"
      ]
    },
    {
      "code": "S3",
      "type": "Wedges",
      "category": "women",
      "price": 5900,
      "payNow": 2250,
      "image": "s3.webp",
      "hover": "s31.webp",
      "colors": [
        "s3.webp"
      ]
    },
    {
      "code": "S4",
      "type": "Wedges",
      "category": "women",
      "price": 5600,
      "payNow": 2120,
      "image": "s4.webp",
      "hover": "s41.webp",
      "colors": [
        "s4.webp"
      ]
    },
    {
      "code": "S5",
      "type": "Wedges",
      "category": "women",
      "price": 5600,
      "payNow": 2120,
      "image": "s5.webp",
      "hover": "s51.webp",
      "colors": [
        "s5.webp"
      ]
    },
    {
      "code": "S9",
      "type": "Wedges",
      "category": "women",
      "price": 5600,
      "payNow": 2120,
      "image": "s9.webp",
      "hover": "s91.webp",
      "colors": [
        "s9.webp"
      ]
    },
    {
      "code": "S10",
      "type": "Wedges",
      "category": "women",
      "price": 5600,
      "payNow": 2120,
      "image": "s10.webp",
      "hover": "s101.webp",
      "colors": [
        "s10.webp"
      ]
    },
    {
      "code": "S11",
      "type": "Wedges",
      "category": "women",
      "price": 5600,
      "payNow": 2120,
      "image": "s11.webp",
      "hover": "s111.webp",
      "colors": [
        "s11.webp"
      ]
    }
  ],
  "men": [
    {
      "code": "M1",
      "type": "Footwear",
      "category": "men",
      "price": 4999,
      "payNow": 1916,
      "image": "m1.webp",
      "hover": "m12.webp",
      "colors": [
        "m1.webp"
      ]
    },
    {
      "code": "M2",
      "type": "Footwear",
      "category": "men",
      "price": 5700,
      "payNow": 2300,
      "image": "m2.webp",
      "hover": "m21.webp",
      "colors": [
        "m2.webp"
      ]
    },
    {
      "code": "M3",
      "type": "Footwear",
      "category": "men",
      "price": 5900,
      "payNow": 2250,
      "image": "m3.webp",
      "hover": "m31.webp",
      "colors": [
        "m3.webp"
      ]
    },
    {
      "code": "M4",
      "type": "Footwear",
      "category": "men",
      "price": 5600,
      "payNow": 2120,
      "image": "m4.webp",
      "hover": "m41.webp",
      "colors": [
        "m4.webp"
      ]
    },
    {
      "code": "M5",
      "type": "Footwear","category": "men",
      "price": 5600,
      "payNow": 2120,
      "image": "m55.webp",
      "hover": "m51.webp",
      "colors": [
        "m55.webp"
      ]
    },
    {
      "code": "M6",
      "type": "Footwear",
      "category": "men",
      "price": 5600,
      "payNow": 2120,
      "image": "m6.webp",
      "hover": "m61.webp",
      "colors": [
        "m6.webp"
      ]
    },
    {
      "code": "M7",
      "type": "Footwear",
      "category": "men",
      "price": 5600,
      "payNow": 2120,
      "image": "m7.webp",
      "hover": "m71.webp",
      "colors": [
        "m7.webp"
      ]
    },
    {
      "code": "M8",
      "type": "Footwear",
      "category": "men",
      "price": 5600,
      "payNow": 2120,
      "image": "m8.webp",
      "hover": "m81.webp",
      "colors": [
        "m8.webp"
      ]
    }
  ]
};

const sections = {};
Object.entries(SECTIONS).forEach(([key, list]) => {
  sections[key] = list.map((raw) => Metro.product(raw));
});
Metro.register(Object.values(sections).flat());

Metro.$$('[data-home-rail]').forEach((host) => {
  const list = sections[host.dataset.homeRail] || [];
  host.innerHTML = Metro.railHTML(list.map(Metro.card).join(''), host.dataset.label);
  Metro.bindCards(host, (id) => list.find((p) => p.id === id));
});
Metro.initRails();

/* Hero slider */
(function slider() {
  const root = Metro.$('.slider');
  const slides = Metro.$$('.slider__slide', root);
  const dotsHost = Metro.$('.slider__dots', root);
  if (slides.length < 2) return;

  let index = 0;
  let timer = null;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  dotsHost.innerHTML = slides
    .map((_, i) => `<button class="slider__dot" type="button" data-slide="${i}" aria-label="Go to slide ${i + 1}" aria-current="${i === 0}"></button>`)
    .join('');
  const dots = Metro.$$('.slider__dot', root);

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((el, i) => {
      el.classList.toggle('is-active', i === index);
      el.setAttribute('aria-hidden', String(i !== index));
    });
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
  }
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => { if (!reduceMotion && !timer) timer = setInterval(() => show(index + 1), 5000); };

  root.addEventListener('click', (e) => {
    if (e.target.closest('.slider__btn--prev')) show(index - 1);
    else if (e.target.closest('.slider__btn--next')) show(index + 1);
    else if (e.target.closest('[data-slide]')) show(Number(e.target.closest('[data-slide]').dataset.slide));
  });
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  start();
})();

Metro.init();