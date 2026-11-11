// ATM Travels (atm-travels.org) Complete Clone Application Data & Logic

const LOGO_URL = 'https://atm-travels.org/wp-content/uploads/2026/11/ATM-main-Logo-color.png';

const UPCOMING_EVENTS = [
  {
    id: 'italy-croatia-medjugorje',
    tag: 'Upcoming pilgrimage',
    title: 'Children and Family Pilgrimage to Italy, Croatia and Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-08-28-at-9.58.14-PM-768x960.jpeg',
    subtitle: 'A Journey of Faith, Saints & Sacred Places — "Walk with the Saints. Grow in Faith. Be Transformed."',
    tiers: [
      { label: 'Registration Deposit (Nonrefundable, due by Dec 30, 2026 — Total Fee $1,910)', price: 500 },
      { label: 'Second Installment — Double Room (Due by May 17, 2027)', price: 1410 },
      { label: 'Second Installment — Single Room (Due by May 17, 2027)', price: 1910 }
    ]
  },
  {
    id: 'medjugorje-family',
    tag: 'Upcoming pilgrimage',
    title: 'Children and Family Pilgrimage to Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/Gemini_Generated_Image_kia46pkia46pkia4-768x1095.jpg',
    subtitle: 'Double room: $1,350 + $39.45 fees · Single room: $1,475 + $43.08 fees',
    tiers: [
      { label: 'Registration Deposit (Due by Jan 31, 2027)', price: 500 },
      { label: 'Double Room Second Installment (Due by May 17, 2027)', price: 850 },
      { label: 'Single Room Second Installment (Due by May 17, 2027)', price: 975 }
    ]
  },
  {
    id: 'mothers-retreat-2027',
    tag: 'Upcoming Retreat',
    title: 'Mother’s Retreat 2027',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-05-at-2.42.40-AM-768x994.jpeg',
    subtitle: 'A dedicated spiritual retreat for mothers seeking prayerful renewal, fellowship, and peace.',
    tiers: [
      { label: 'Registration Deposit (Due by March 30, 2027)', price: 500 },
      { label: 'Second Installment (Due by July 25, 2027)', price: 1500 },
      { label: 'Third Installment / Balance', price: 1550 }
    ]
  },
  {
    id: 'youth-retreat-2027',
    tag: 'Upcoming Youth & Family Retreat',
    title: 'Youth & Family Spiritual Retreat 2027',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp',
    subtitle: 'Intentional time for spiritual rejuvenation and cultivating a disciplined life of prayer.',
    tiers: [
      { label: 'Registration Deposit (Due by March 30, 2027)', price: 100 },
      { label: 'Second Installment (Due by July 25, 2027)', price: 490 },
      { label: 'Full Payment Option', price: 500 }
    ]
  }
];

const PRODUCTS = [
  {
    slug: 'a-mothers-heart',
    name: "A MOTHER'S HEART",
    subtitle: 'Calendula & Pine Needle Soap · 5 oz',
    price: 5.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-10.42.58-PM.jpeg',
    description: 'Nourish and cleanse your skin with this gentle, naturally inspired soap, thoughtfully made with natural and organic ingredients including Calendula & Pine Needle extract. Hand-molded with a Marian relief emblem to bring warmth, intention, and natural beauty to your daily routine.'
  },
  {
    slug: 'balm-of-good-samaritan-1oz',
    name: 'Balm of Good Samaritan 1oz',
    subtitle: 'Handcrafted Botanical Balm · 1 oz',
    price: 14.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-29-at-3.29.03-PM.jpeg',
    description: 'Traditional aromatic botanical balm crafted with essential oils, beeswax, and soothing herbal infusions to comfort and protect skin naturally.'
  },
  {
    slug: 'balm-of-saint-michael-2oz',
    name: 'Balm of Saint Michael 2oz',
    subtitle: 'Nourishing Herbal Balm · 2 oz',
    price: 13.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-29-at-3.29.04-PM.jpeg',
    description: 'Restorative herbal balm formulated in small batches with pure botanical extracts to soothe dry skin and support daily wellness.'
  },
  {
    slug: 'calendula-body-butter-8oz',
    name: 'Calendula Body Butter – 8 oz',
    subtitle: 'Whipped Botanical Moisture · 8 oz',
    price: 24.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-12.35.08-AM.jpeg',
    description: 'Rich, velvety body butter infused with golden calendula blossoms to deeply hydrate and soften skin all day.'
  },
  {
    slug: 'calendula-lip-repair',
    name: 'Calendula Lip Repair',
    subtitle: 'Soothing Botanical Lip Balm',
    price: 2.00,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/g1.jpeg',
    description: 'Gentle everyday lip repair balm made with calendula-infused oil and natural beeswax for soft, protected lips.'
  },
  {
    slug: 'calendula-oil-7oz',
    name: 'CALENDULA OIL 7oz',
    subtitle: 'Pure Infused Botanical Oil · 7 oz',
    price: 19.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/a1.jpeg',
    description: 'Slow-infused golden calendula oil crafted for skin nourishment, gentle massage, and daily holistic care.'
  },
  {
    slug: 'calendula-salve-2oz',
    name: 'CALENDULA SALVE 2oz',
    subtitle: 'Concentrated Soothing Salve · 2 oz',
    price: 14.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-29-at-3.37.08-PM.jpeg',
    description: 'All-purpose calendula salve designed to calm dry, chapped, or sensitive skin with pure botanical care.'
  },
  {
    slug: 'calendula-geranium-massage-oil-1oz',
    name: 'Calendula/Geranium massage oil 1oz',
    subtitle: 'Aromatic Botanical Blend · 1 oz',
    price: 14.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/p3.jpeg',
    description: 'Delicate blend of calendula infusion and uplifting geranium essential oil for calming therapeutic massage.'
  },
  {
    slug: 'calendula-geranium-massage-oil-travel',
    name: 'Calendula/Geranium massage oil 1oz (Travel)',
    subtitle: 'Pilgrimage Travel Edition · 1 oz',
    price: 9.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg',
    description: 'Compact travel-ready bottle of our signature Calendula & Geranium soothing oil, ideal for pilgrimages and retreats.'
  },
  {
    slug: 'guadalupe-colored-necklace',
    name: 'Guadalupe colored necklace',
    subtitle: 'Devotional Keepsake Jewelry',
    price: 33.00,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-31-at-7.08.42-PM-1.jpeg',
    description: 'Artisan Our Lady of Guadalupe devotional pendant necklace with vibrant enamel detailing and gold-tone chain.'
  }
];

const INITIAL_REVIEWS = [
  {
    id: 101,
    title: 'MOTHER’S RETREAT 2026',
    date: 'September 2026',
    rating: 5,
    text: 'Saying this retreat was amazing feels like such an understatement. Weks puts her whole heart into everything she does! This past September was my first trip to Rosa Mystica in New York, and it was so beautifully planned, featuring truly inspiring spiritual leaders. This retreat gave us mothers permission to forgive ourselves for everything we’ve been carrying and beating ourselves up over. Every mother, stepmother, and mother-to-be needs to experience one of these retreats at Rosa Mystica—the location is simply perfect. Thank you, Weks, for your incredible faithfulness. God bless you!',
    initials: 'AM',
    author: 'Anke Mbapeh',
    email: 'bebesenait@gmail.com',
    avatarClass: 'avatar-gold'
  },
  {
    id: 102,
    title: 'Children’s Prayers',
    date: 'October 2026',
    rating: 5,
    text: 'Being a part of ATM KIDS for over five years has completely transformed our family’s faith life. From nightly Rosary calls on Zoom and weekly Adoration to saint studies, Bible study, and Marian consecrations, my children’s spiritual growth has been incredible. They now take full ownership of their faith and look forward to 8:00 PM Zoom every night. Weks, thank you for building this incredible village for our children and for leading by example alongside your own wonderful kids. ATM KIDS is a true blessing to parents everywhere!',
    initials: 'AM',
    author: 'Anke Mbapeh',
    email: 'bebesenait@gmail.com',
    avatarClass: 'avatar-peach'
  },
  {
    id: 103,
    title: 'An Unforgettable, Spiritually Renewing Retreat for Mothers!',
    date: 'September 2026',
    rating: 5,
    text: 'My experience at the Rosa Mystica mother’s retreat in September with April-Marie Traveling Mary pilgrimages was deeply moving. Anchored in the beautiful theme “She is Our Mother,” the schedule was masterfully planned with Holy Mass, Adoration, Confession, learning sessions, and invaluable 1-on-1 spiritual guidance. Getting up close with sacred relics and experiencing the healing session touched my heart, while closing our time sharing experiences around a bonfire was incredibly enriching. Top it off with amazing food and a warm reception—I couldn’t have asked for more. I am so grateful and already looking forward to next year!',
    initials: 'AJ',
    author: 'Ayangyangka Jumbam',
    email: 'ayang.jumbam@gmail.com',
    avatarClass: 'avatar-pink'
  },
  {
    id: 104,
    title: 'The Gold Standard for Pilgrimages',
    date: 'October 2026',
    rating: 5,
    text: 'ATM Travels is absolutely wonderful. I’ve taken my children on pilgrimage to Medjugorje twice with them, and everything was completely seamless from start to finish. She focuses so much on the spiritual growth of the kids, tailoring activities so children of all ages feel included. Her local team on the ground in Medjugorje is top-notch, taking care of everything from airport pickups and meals to daily excursions. Every detail is thoughtfully planned, and her prices are among the best you’ll find anywhere. I’m already looking forward to our next pilgrimage with them. Thank you, ATM Travels—may our Lord continue to bless your ministry!',
    initials: 'AM',
    author: 'Anke Mbapeh',
    email: 'bebesenait@gmail.com',
    avatarClass: 'avatar-gold'
  },
  {
    id: 1,
    title: 'Amazing',
    date: 'September 14, 2026',
    rating: 5,
    text: 'Weks is ever so kind, patient and thoughtful. We got little packages to help us during the pilgrimage. I would never have thought of buying a book to write down when I had those intimate moments with God. Vickie Smith was such an added blessing. Will do it again God willing.',
    initials: 'RR',
    author: 'Ramy RA',
    avatarClass: 'avatar-peach'
  },
  {
    id: 2,
    title: 'Medjugorje July 2026 continued',
    date: 'August 23, 2026',
    rating: 5,
    text: 'God blessed our pilgrimage with many miracles. Wex and Vickie were encouraging prayer angels throughout this spiritual retreat. The trip was well planned and organized for adults, teens, and children. This pilgrimage was truly welcoming for everyone. I would recommend ATM for pilgrimages. Once you receive graces during a pilgrimage regular vacation will seem boring',
    initials: 'JJ',
    author: 'Jacqueline JA',
    avatarClass: 'avatar-pink'
  },
  {
    id: 3,
    title: 'Medjugorje July 2026',
    date: 'August 22, 2026',
    rating: 5,
    text: 'This pilgrimage to Medjugorje was full of love and presence of Jesus and Our Lady. Lodging began home with cheerful greetings and homemade meals served family style. Apporition Hill, Blue Cross, and Oasis of Peace are a short walk from our lodging. Our guide, Julie, provided historical context, recommendations, arranged side retreats to Surmanci, Zadar',
    initials: 'JJ',
    author: 'Jacqueline JA',
    avatarClass: 'avatar-pink'
  }
];

const GALLERY_ARCHIVE = [
  {
    title: 'Apparition Hill & Blue Cross Walk',
    location: 'Medjugorje Pilgrimage',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-04-at-9.45.19-AM-1.jpeg'
  },
  {
    title: 'Sacred Chapel & Morning Rosary',
    location: 'Croatia & Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp'
  },
  {
    title: 'Children & Family Prayer Gathering',
    location: 'Italy & Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-08-28-at-9.58.14-PM-768x960.jpeg'
  },
  {
    title: 'Marian Shrine Procession',
    location: 'Medjugorje Summer Journey',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/Gemini_Generated_Image_kia46pkia46pkia4-768x1095.jpg'
  },
  {
    title: 'Mother’s Spiritual Fellowship',
    location: 'Retreat Archive',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-05-at-2.42.40-AM-768x994.jpeg'
  },
  {
    title: 'Handcrafted Pilgrimage Care Packages',
    location: 'Dacula, Georgia',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg'
  }
];

const BLOG_POSTS = [
  {
    id: 'preparing-your-heart-for-medjugorje',
    category: 'SPIRITUAL PREPARATION',
    date: 'November 2026',
    title: 'Preparing Mind, Spirit, and Luggage for a Family Pilgrimage',
    excerpt: 'Why a pilgrimage with children and family is unlike an ordinary vacation — and practical ways to cultivate intentional prayer before departure.',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-04-at-9.45.19-AM-1.jpeg'
  },
  {
    id: 'landmarks-of-medjugorje',
    category: 'SACRED DESTINATIONS',
    date: 'October 2026',
    title: 'A Guide to Apparition Hill, Cross Mountain, and Oasis of Peace',
    excerpt: 'Historical context and walking reflections on the sacred landmarks a short walk from our family-style lodging in Medjugorje.',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp'
  },
  {
    id: 'botanical-care-on-the-journey',
    category: 'WELLNESS & CARE',
    date: 'October 2026',
    title: 'The Story Behind Our Handcrafted Calendula & Good Samaritan Balms',
    excerpt: 'How traditional botanical oils, soaps, and salves support daily self-care and comfort travelers along the way.',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg'
  }
];

// Application State
const state = {
  route: '/',
  cart: [],
  reviews: [...INITIAL_REVIEWS],
  shopView: 'grid', // 'grid' | 'list'
  selectedRating: 5,
  singleProductQty: 1
};

// Fallback SVG generator for images if network fails
function handleImgError(imgEl, label = 'ATM Travels') {
  imgEl.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <rect width="100%" height="100%" fill="#0b1b3d"/>
    <circle cx="300" cy="250" r="80" fill="none" stroke="#d4af37" stroke-width="3"/>
    <text x="300" y="258" text-anchor="middle" fill="#ead8a0" font-family="Manrope, sans-serif" font-size="22" font-weight="600">ATM TRAVELS</text>
    <text x="300" y="380" text-anchor="middle" fill="#ffffff" font-family="Manrope, sans-serif" font-size="18">${label.replace(/[<>&"']/g, '')}</text>
  </svg>`;
  imgEl.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
window.handleImgError = handleImgError;

// Toast Helper
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3400);
}

// Navigation / Router
function navigate(path) {
  window.location.hash = path;
}
window.navigate = navigate;

function parseRoute() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  state.route = hash;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cart Management
function addToCart(productSlug, qty = 1, openInstantCheckout = false) {
  const product = PRODUCTS.find(p => p.slug === productSlug);
  if (!product) return;
  const existing = state.cart.find(item => item.slug === productSlug);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ ...product, qty });
  }
  updateCartUI();
  if (openInstantCheckout) {
    toggleCartDrawer(true);
  } else {
    showToast(`Added "${product.name}" to your cart.`);
  }
}
window.addToCart = addToCart;

function removeFromCart(slug) {
  state.cart = state.cart.filter(item => item.slug !== slug);
  updateCartUI();
}
window.removeFromCart = removeFromCart;

function updateCartUI() {
  const badge = document.getElementById('cart-count-badge');
  const totalCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
  if (badge) badge.textContent = totalCount;

  const body = document.getElementById('cart-drawer-body');
  const totalEl = document.getElementById('cart-subtotal-amount');
  if (!body || !totalEl) return;

  if (state.cart.length === 0) {
    body.innerHTML = `<p style="text-align:center; padding: 40px 0; color: var(--slate-text);">Your cart is currently empty.</p>`;
    totalEl.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  body.innerHTML = state.cart.map(item => {
    const lineTotal = item.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" onerror="handleImgError(this, '${item.name}')">
        <div style="flex-grow:1;">
          <div style="font-weight:600; font-size:15px; color:var(--navy-dark);">${item.name}</div>
          <div style="font-size:13px; color:var(--slate-text);">${item.qty} × $${item.price.toFixed(2)}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700; font-size:15px;">$${lineTotal.toFixed(2)}</div>
          <button onclick="removeFromCart('${item.slug}')" style="background:none; border:none; color:#b91c1c; font-size:12px; cursor:pointer; margin-top:4px;">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  totalEl.textContent = `$${subtotal.toFixed(2)}`;
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!drawer || !backdrop) return;
  if (open) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    updateCartUI();
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    closeModal();
  }
}
window.toggleCartDrawer = toggleCartDrawer;

function handleCheckoutSubmit() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty. Add a product first!');
    return;
  }
  state.cart = [];
  updateCartUI();
  toggleCartDrawer(false);
  showToast('Thank you! Your order has been received by ATM Travels.');
}
window.handleCheckoutSubmit = handleCheckoutSubmit;

// Pilgrimage Registration Modal
function openRegistrationModal(eventId) {
  const ev = UPCOMING_EVENTS.find(e => e.id === eventId) || UPCOMING_EVENTS[0];
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!modal || !backdrop) return;

  modal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:start; gap:16px; margin-bottom:18px;">
      <div>
        <span class="section-tag" style="margin-bottom:4px;">PILGRIMAGE REGISTRATION</span>
        <h3 style="font-size:22px;">${ev.title}</h3>
      </div>
      <button onclick="closeModal()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--slate-text);">&times;</button>
    </div>
    <p style="font-size:14.5px; margin-bottom:20px;">${ev.subtitle}</p>
    <form onsubmit="submitRegistrationForm(event, '${ev.title.replace(/'/g, "\\'")}')">
      <div class="form-group">
        <label class="form-label">Select Payment / Installment Option *</label>
        <select class="form-control" required>
          ${ev.tiers.map(t => `<option value="${t.price}">${t.label} — $${t.price.toLocaleString()}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Pilgrim Full Name *</label>
        <input type="text" class="form-control" placeholder="Enter full name as on passport" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email Address *</label>
        <input type="email" class="form-control" placeholder="you@example.com" required>
      </div>
      <div class="form-group">
        <label class="form-label">Phone Number *</label>
        <input type="tel" class="form-control" placeholder="+1 (404) 000-0000" required>
      </div>
      <div class="form-group">
        <label class="form-label">Family Members / Room Preference & Notes</label>
        <textarea class="form-control" style="min-height:80px;" placeholder="List accompanying children/family members or rooming requests..."></textarea>
      </div>
      <button type="submit" class="btn btn-navy btn-block">Complete Registration Request</button>
    </form>
  `;
  modal.classList.add('open');
  backdrop.classList.add('open');
}
window.openRegistrationModal = openRegistrationModal;

function closeModal() {
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (modal) modal.classList.remove('open');
  if (backdrop && (!drawer || !drawer.classList.contains('open'))) {
    backdrop.classList.remove('open');
  }
}
window.closeModal = closeModal;

function submitRegistrationForm(e, title) {
  e.preventDefault();
  closeModal();
  showToast(`Registration submitted for ${title}! Our Dacula, GA team will follow up shortly.`);
}
window.submitRegistrationForm = submitRegistrationForm;

// Page Renderers
function renderReviewsCards() {
  return state.reviews.map(r => `
    <div class="review-card">
      <div>
        <div class="review-meta-top">
          <div class="stars-row" aria-label="${r.rating} out of 5 stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <span class="review-date">${r.date}</span>
        </div>
        <div class="review-title">${r.title}</div>
        <p class="review-text">${r.text}</p>
      </div>
      <div class="review-author">
        <span class="avatar-circle ${r.avatarClass}">${r.initials}</span>
        <div>
          <div class="author-name">${r.author}</div>
          ${r.email ? `<div style="font-size:12.5px; color:var(--slate-text);">(${r.email})</div>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderHomePage() {
  const topThreeEvents = UPCOMING_EVENTS.slice(0, 3);
  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="section-tag light">WELCOME</span>
        <h1>April-Marie’s Traveling Mary</h1>
        <p class="hero-subtitle">a family-owned Catholic organization dedicated to fostering spiritual growth through pilgrimages.</p>
        <div class="hero-cta-group">
          <a href="#/events-and-pilgrimages" class="btn btn-white">Explore Pilgrimages</a>
          <a href="#/events-and-pilgrimages" class="btn btn-outline-white">View Events</a>
        </div>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="section">
      <div class="container">
        <div class="mission-box">
          <span class="section-tag">WHO WE ARE</span>
          <h2>Our Mission and What We Believe</h2>
          <p>Our mission is simple yet profound: to lead all to Christ through the Blessed Mother, with the aid of the prayers of pure children, as we journey together to sacred places..</p>
          <p>We believe that pilgrimage is more than travel. It is an opportunity to step away from the noise and distractions of everyday life, encounter God in a deeper way, renew our faith, and draw closer to Christ. Through our pilgrimages, we hope to encourage individuals and families to make intentional time for spiritual rejuvenation while cultivating a disciplined life of prayer between journeys</p>
          <a href="#/about" class="btn btn-outline-navy">Read About Us</a>
        </div>
      </div>
    </section>

    <!-- Upcoming Pilgrimages and Events -->
    <section class="section" style="padding-top: 20px;">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">UPCOMING</span>
          <h2>Upcoming pilgrimages and events</h2>
          <p>Explore all our upcoming event and register.</p>
        </div>
        <div class="cards-grid-3">
          ${topThreeEvents.map(ev => `
            <article class="event-card">
              <div class="event-card-img-wrap">
                <img src="${ev.image}" alt="${ev.title}" onerror="handleImgError(this, '${ev.title}')">
              </div>
              <div class="event-card-body">
                <div class="event-card-tag">${ev.tag}</div>
                <h3>${ev.title}</h3>
                <a href="#/events-and-pilgrimages" class="btn btn-outline-navy btn-block">View All Events</a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Store and Reviews / Featured Store Products -->
    <section class="section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">STORE AND REVIEWS</span>
          <h2>Featured store products and visitor reviews</h2>
        </div>
        <div class="featured-store-split">
          <div class="featured-store-image">
            <img src="https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg" alt="Featured Handcrafted Store Products" onerror="handleImgError(this, 'Featured Products')">
          </div>
          <div class="featured-store-text">
            <span class="section-tag">FEATURED PRODUCTS</span>
            <h3>Explore Our Featured Products</h3>
            <p>Discover our handcrafted collection of botanical oils, nourishing balms, soothing soaps, and wellness products made with thoughtfully selected ingredients. Each product is created to support your daily self-care routine with warmth, intention, and natural beauty.</p>
            <a href="#/product" class="btn btn-outline-navy">Shop All Products</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews From Pilgrimages -->
    <section class="section section-sky">
      <div class="container">
        <div class="section-header centered">
          <h2>Reviews From Pilgrimages</h2>
        </div>
        <div class="reviews-grid">
          ${renderReviewsCards()}
        </div>
      </div>
    </section>

    <!-- Share Your Experience -->
    <section class="section">
      <div class="container">
        <div class="share-cta-box">
          <h3>Share your experience</h3>
          <p>Submit your name, rating, and review.</p>
          <a href="#/reviews" class="btn btn-outline-navy">Write a Review</a>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <!-- About Us Hero & Welcome -->
    <section class="subpage-hero">
      <div class="container">
        <div class="about-split">
          <div>
            <span class="section-tag">ABOUT US</span>
            <h1 style="font-size:clamp(32px, 4vw, 48px); margin-bottom:12px;">Welcome to ATM Travels &amp; Pilgrimages (April-Marie’s Traveling Mary)</h1>
            <h3 style="color:var(--gold-accent); font-weight:600; font-size:20px; margin-bottom:22px;">Leading All to Christ Through the Blessed Mother</h3>
            <p style="margin-bottom:16px;">ATM Travels &amp; Pilgrimages is a family-owned Catholic organization dedicated to fostering spiritual growth and renewal through pilgrimages, retreats, prayer, and family faith formation.</p>
            <p style="margin-bottom:16px;">Our mission is simple yet profound: to lead all to Christ through the Blessed Mother, with the aid of the prayers of pure children, as we journey together to sacred places.</p>
            <p>We believe that pilgrimage is more than travel. It is an opportunity to step away from the noise and distractions of everyday life, encounter God in a deeper way, renew our faith, and draw closer to Christ. Through our pilgrimages, we hope to encourage individuals and families to make intentional time for spiritual rejuvenation while cultivating a disciplined life of prayer between journeys.</p>
          </div>
          <div>
            <img src="https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp" alt="Sacred Chapel" style="max-height:560px; width:100%; object-fit:cover; box-shadow:var(--shadow-soft);" onerror="handleImgError(this, 'ATM Travels Chapel')">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Love for Children & the Family + Background + More Than a Vacation -->
    <section class="section" style="padding-top:40px;">
      <div class="container">
        <div class="about-sections-stack">

          <!-- Our Love for Children & the Family -->
          <div class="about-content-card">
            <span class="section-tag">FAMILY FAITH FORMATION</span>
            <h2>Our Love for Children &amp; the Family</h2>
            <p>At ATM Travels &amp; Pilgrimages, we believe children have a beautiful and powerful role in the life of the Church. Their innocent and sincere prayers are precious.</p>
            <p>Through April-Marie’s Traveling Mary, we encourage children and families to rediscover the beauty of prayer—both together as a family and individually with God.</p>
            <p>Our desire is to help families pass the Catholic faith from one generation to the next, teaching children not only about their faith, but to live it, love it, and share it.</p>
            <p>A special part of our mission is April-Marie’s Traveling Mary, through which we seek to pass on our rich Catholic faith to the next generation. We encourage families to pray together, children to develop a personal relationship with God, and communities to rediscover the beauty of family and personal prayer. Through the Traveling Mary Mission, we hope to nurture young hearts in the faith and help children understand that they, too, have an important role in bringing others closer to Christ. We pray that through the Blessed Mother, families will grow closer to Christ and that children will discover that they, too, are called to be little missionaries of faith.</p>
          </div>

          <!-- Background -->
          <div class="about-content-card">
            <span class="section-tag">FOUNDATION</span>
            <h2>Background</h2>
            <p>ATM Travels &amp; Pilgrimages was born from our founder’s own transformative experiences of faith, particularly through pilgrimage to Medjugorje and participation in local retreats.</p>
            <p>Originally from Cameroon, West Africa, our founder felt a deep calling from Our Lady to share with others the spiritual graces and experiences that had touched her own life. She recognized that many within her community had limited exposure to Catholic pilgrimage opportunities and wanted to help make these experiences more accessible.</p>
            <p>With this desire in her heart, she began partnering directly with local communities and trusted individuals at pilgrimage destinations to create meaningful, faith-centered, and affordable pilgrimage experiences. What began as a personal experience of God's Grace grew into a mission to bring others on the journey.</p>
          </div>

          <!-- More Than a Vacation -->
          <div class="about-content-card">
            <span class="section-tag">SPIRITUAL ENCOUNTER</span>
            <h2>More Than a Vacation</h2>
            <p>At ATM Travels &amp; Pilgrimages, we believe a pilgrimage is not simply a vacation or a journey to see beautiful places. It is a spiritual encounter.</p>
            <p>It is a time to pray, to listen, to surrender, to heal, to grow, and to allow God to transform our hearts.</p>
            <p>We journey as pilgrims and disciples, seeking to encounter Christ more deeply and to return home renewed and better equipped to live out our call to evangelize.</p>
            <p>We invite you to prayerfully consider joining us on one of our upcoming pilgrimages, retreats, and faith-filled journeys. Whether traveling as an individual, with your family, or with our pilgrimage community, our desire is that every journey leads you closer to Christ.</p>
            <p>May God bless you abundantly, and may Our Lady guide your path, draw you ever closer to her Son, and lead you always to Christ.</p>
            <div class="about-poem-callout">
              <div>Come with an open heart.</div>
              <div>Come ready to pray.</div>
              <div>Come ready to encounter God.</div>
              <div>Your pilgrimage awaits.</div>
            </div>
            <p style="font-weight:500; color:var(--navy-dark);">May God bless you abundantly, and may Our Lady guide your path and always lead you to her Son, Jesus.</p>
            <div style="margin-top:22px;">
              <a href="#/events-and-pilgrimages" class="btn btn-navy">View Upcoming Pilgrimages</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- COMMUNITY OUTREACH -->
    <section class="section section-sky">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">MINISTRY &amp; MISSION</span>
          <h2>COMMUNITY OUTREACH</h2>
        </div>

        <div class="about-ministry-grid">
          <!-- Home Based Chapels -->
          <div class="about-ministry-card">
            <div class="ministry-bullet-badge">• Home Based Chapels</div>
            <h3>Home Based Chapels</h3>
            <p>Our faith is not meant to be lived only within the walls of a church. We encourage families to create a dedicated sacred space within their homes—a place set apart for daily prayer, reflection, and gathering as a family.</p>
            <p>This space does not need to be large or extravagant. What matters most is that it is intentionally set aside for the Lord and reflects a sincere commitment to meeting with Him each day. We offer guidance and assistance to families who desire to establish a home prayer space or home chapel, with care for Catholic tradition and reverence for the sacred.</p>
            <p>At its heart, a home chapel requires two things: a designated place for prayer and, most importantly, a willing heart that desires to spend time with the Lord each day.</p>
            <p>We believe that when families intentionally make room for God in their homes, they create an environment where prayer can flourish, faith can be nurtured, and children can learn to recognize God's presence in their everyday lives.</p>
            <p style="font-weight:600; color:var(--navy-dark);">Your home can become a place of prayer. Your family can become a little domestic church.</p>
            <p>If you desire assistance in creating your own sacred space, we are here to serve you.</p>
            <div style="margin-top:18px;">
              <a href="#/contact" class="btn btn-outline-navy btn-sm">Request Home Chapel Guidance</a>
            </div>
          </div>

          <!-- THE TRAVELING STATUES -->
          <div class="about-ministry-card">
            <div class="ministry-bullet-badge">• THE TRAVELING STATUES</div>
            <h3>THE TRAVELING STATUES</h3>
            <div style="font-weight:600; color:var(--gold-accent); margin-bottom:14px;">Bringing Our Lady Into the Home, Bringing Families Closer to Christ</div>
            <p>April-Marie’s Traveling Mary (ATM) is a Marian outreach ministry dedicated to promoting devotion to the Blessed Virgin Mary and, through Her, drawing souls closer to her Son, Jesus Christ.</p>
            <p>Through our Traveling Statues, statues of Our Lady visit families and remain in their homes for a designated period of time. During this special time, families are encouraged to intentionally set aside time each day for family prayer, the Holy Rosary, and other Marian devotions.</p>
            <p>The purpose is simple: to create a home where the family pauses, prays, and draws closer to God together. We hope that each visit of Our Lady will inspire families to make prayer a more consistent part of their daily lives and to continue these practices even after the statue moves on to its next home.</p>

            <div class="locations-box">
              <h4>Would You Like to Host Our Lady?</h4>
              <p style="font-size:14.5px; margin-bottom:10px;">The Traveling Statues are currently available in designated locations, including:</p>
              <div class="locations-pills">
                Georgia • Maryland • Delaware • North Carolina • Texas • Canada • Arizona • Oklahoma • Cameroon • Nigeria
              </div>
            </div>

            <p>If you would like to welcome a Traveling Statue into your home, please contact the State or Regional Ambassador serving your area.</p>
            <p>If your location is not currently represented and you feel called to help bring this ministry to families in your area, we invite you to prayerfully consider becoming a Traveling Mary Ambassador.</p>
            <p>Our desire is to see families united in prayer, children growing in love for Our Lady and Jesus, and homes becoming places where faith is lived every day. We pray that through the intercession of the Blessed Mother, countless families will rediscover the beauty of the Holy Rosary, grow in devotion, and be drawn ever closer to Christ.</p>

            <div class="about-poem-callout" style="margin-top:16px;">
              <div>Our Lady goes from home to home.</div>
              <div>Families gather.</div>
              <div>Children pray.</div>
              <div>Hearts are transformed.</div>
              <div>And all are led to Christ.</div>
            </div>
            <div style="margin-top:18px;">
              <a href="#/contact" class="btn btn-navy btn-sm">Host a Traveling Statue / Become an Ambassador</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHILDREN'S MINISTRY -->
    <section class="section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">YOUNG DISCIPLES</span>
          <h2>CHILDREN'S MINISTRY</h2>
        </div>

        <div class="about-ministry-grid">
          <!-- DAILY ROSARY -->
          <div class="about-ministry-card">
            <div class="ministry-bullet-badge">• DAILY ROSARY</div>
            <h3>DAILY ROSARY</h3>
            <p>As a Marian group, we gather daily to pray the Flame of Love Rosary, a devotion that our children have grown to cherish and embrace.</p>
            <p>It is especially beautiful to see our children take an active role in leading the Rosary. Through prayer, they are learning that they, too, have a mission—to know Christ, love Him, and help lead others to Him through the intercession of His Blessed Mother. At times, our prayer gatherings also incorporate Scripture readings and reflection, allowing the children to encounter God's Word alongside their Marian devotion.</p>
            <p>Throughout the year, our ministry calendar provides opportunities for the children to grow beyond the Rosary through teachings on the lives of the Saints, Confession, Eucharistic Adoration, consecrations and other aspects of our Catholic faith that help them grow in holiness and deepen their relationship with Christ.</p>
            <p>Our desire is to nurture children who not only know their faith, but love it, live it, and confidently share it with others. We warmly welcome families and anyone who feels called to join us in prayer. Come pray the Rosary with us. Bring your children.</p>
            <p>We believe that when we teach children to pray, we are helping build a foundation of faith that can last a lifetime.</p>

            <blockquote class="scripture-quote">
              “Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.”
              <cite>— Matthew 19:14</cite>
            </blockquote>

            <p style="font-weight:500; color:var(--navy-dark);">Through the prayers of our children, may many souls be drawn closer to Christ through the heart of His Blessed Mother.</p>
          </div>

          <!-- SEVEN CHILDREN -->
          <div class="about-ministry-card">
            <div class="ministry-bullet-badge">• SEVEN CHILDREN</div>
            <h3>SEVEN CHILDREN</h3>
            <p>Seven Children is an initiative within the ATM family, inspired by two pivotal events. During adoration, the founder experienced a profound call to encourage more people—especially children—to adore the Lord in the Blessed Sacrament. This call was reinforced by the Lord’s expressed longing for companionship: “because I am lonely.” In response, she established an adoration group specifically for children, recognizing that their pure prayers touch the Lord’s heart in a profound way.</p>
            <p>Additionally, drawing on her experience with the Seven Sisters Apostolate, she adapted its model for this new initiative. The program invites mothers to bring a child to adoration for 30 minutes on an assigned day each week. During this time, the child prays for priests, while the mother prays for the child’s vocation. The concept quickly resonated with many mothers, leading to the establishment of Seven Children. With the guidance of the founder’s spiritual director and the approval of the parish priest, Fr. Henry, the initiative was launched.</p>
            <p>Inspired by the life of Saint Carlo Acutis, who possessed a deep love for the Eucharist and serves as an exemplary role model for children, we hope to plant the beautiful seed of Eucharistic adoration in the hearts of our young people while praying for an increase in vocations among them.</p>
            <p style="font-weight:500; color:var(--navy-dark);">Please contact us if you feel called to join this inspiring mission. We look forward to welcoming you.</p>
            <div style="margin-top:18px;">
              <a href="#/contact" class="btn btn-outline-navy btn-sm">Join Seven Children Ministry</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section" style="padding-top:10px;">
      <div class="container">
        <div class="about-story-banner">
          <span class="section-tag light">THE ORIGIN OF TRAVELING MARY</span>
          <h2 style="color:var(--white); margin-bottom:22px;">Our Story</h2>
          <p>Sometime in late 2019, I repeatedly heard the words “Traveling Mary.” On February 27, 2020 I felt strongly that Our Lady was calling us to begin a Traveling Mary Mission so she could visit homes, be known, and inspire greater devotion. I also felt called to begin it in my daughter, April-Marie’s name. I took this request to prayer and shared it with a friend, who prayed about it as well.</p>
          <p>On February 29th, 2020, while in adoration, I felt Our Lady asking us to begin a ministry called “April Marie’s Traveling Mary” and to complete it by the feast of the Annunciation, on April-Marie’s seventh birthday. I asked Our Lady to lead me to a suitable traveling statue and sensed she wanted to travel under the title “Our Lady of Grace,” after our home chapel.</p>
          <p>My brother, Father Pontianus, was visiting from Italy, so I shared this with him. He encouraged me to obey. On March 6, 2020, I found a broken statue of Our Lady of Grace in the most unlikely place.</p>
          <p>On March 8, 2020 the statue was blessed by Fr Maurice and Fr Pontianus and began to travel from home to home. Less than two weeks later, the COVID-19 pandemic hit. Despite social distancing and fear, many families welcomed the Blessed Mother, and she continues to travel today.</p>
          <p style="margin-bottom:0;">With God’s and the Blessed Mother’s help, this ministry quickly spread to several states and countries, including Texas, Delaware, Oklahoma, Maryland, Arizona, North Carolina, Canada, Cameroon, and Nigeria. Many families have shared testimonials. ATM Travels and Pilgrimages grew from a desire to visit Medjugorje, to simple traveling statues and pilgrimages, all inspired by the Blessed Mother.</p>
        </div>
      </div>
    </section>
  `;
}

function renderEventsPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <span class="section-tag">SACRED JOURNEYS & RETREATS</span>
        <h1 style="margin-bottom:16px;">Events and Pilgrimages</h1>
        <p style="max-width:680px; margin-bottom:44px;">Explore upcoming family pilgrimages and retreats, review installment schedules and registration deadlines, and reserve your spot.</p>

        ${UPCOMING_EVENTS.map(ev => `
          <div class="pilgrimage-tier-card">
            <img src="${ev.image}" alt="${ev.title}" onerror="handleImgError(this, '${ev.title}')">
            <div>
              <span class="section-tag">${ev.tag}</span>
              <h2 style="font-size:30px; margin-bottom:12px;">${ev.title}</h2>
              <p style="margin-bottom:18px;">${ev.subtitle}</p>
              <ul class="tier-list">
                ${ev.tiers.map(t => `
                  <li>
                    <span style="font-weight:500; color:var(--navy-dark);">${t.label}</span>
                    <span class="tier-price">$${t.price.toLocaleString()}</span>
                  </li>
                `).join('')}
              </ul>
              <div style="display:flex; gap:14px; flex-wrap:wrap;">
                <button class="btn btn-navy" onclick="openRegistrationModal('${ev.id}')">Registration Form</button>
                <a href="#/contact" class="btn btn-outline-navy">Ask a Question</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderGalleryPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <span class="section-tag">PHOTOGRAPHIC ARCHIVE</span>
        <h1 style="margin-bottom:16px;">Past Events</h1>
        <p style="max-width:720px; margin-bottom:44px;">A look back at completed pilgrimages and group retreats, with photographs of landmarks, shared meals, and the landscapes travelers saw along the way.</p>

        <div class="gallery-grid">
          ${GALLERY_ARCHIVE.map(item => `
            <div class="gallery-card">
              <img src="${item.image}" alt="${item.title}" onerror="handleImgError(this, '${item.title}')">
              <div class="gallery-card-caption">
                <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text); margin-bottom:4px;">${item.location}</div>
                <h3 style="font-size:18px;">${item.title}</h3>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function setShopView(view) {
  state.shopView = view;
  renderApp();
}
window.setShopView = setShopView;

function renderProductPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <div class="featured-store-split" style="margin-bottom:64px;">
          <div class="featured-store-image">
            <img src="https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg" alt="Natural Care for a Better You" onerror="handleImgError(this, 'ATM Travels Store')">
          </div>
          <div class="featured-store-text">
            <span class="section-tag">HANDCRAFTED WELLNESS & DEVOTIONAL STORE</span>
            <h1 style="font-size:clamp(32px, 4vw, 48px); margin-bottom:18px;">Explore Our Featured Products</h1>
            <p>Discover our handcrafted collection of botanical oils, nourishing balms, soothing soaps, and wellness products made with thoughtfully selected ingredients. Each product is created to support your daily self-care routine with warmth, intention, and natural beauty.</p>
          </div>
        </div>

        <div class="shop-toolbar">
          <div style="font-weight:500; color:var(--navy-dark);">Showing all ${PRODUCTS.length} products</div>
          <div class="view-toggle-group">
            <button class="icon-btn ${state.shopView === 'grid' ? 'active' : ''}" onclick="setShopView('grid')">Grid View</button>
            <button class="icon-btn ${state.shopView === 'list' ? 'active' : ''}" onclick="setShopView('list')">List View</button>
          </div>
        </div>

        <div class="products-grid ${state.shopView === 'list' ? 'list-view' : ''}">
          ${PRODUCTS.map(p => `
            <article class="product-card">
              <div class="product-img-wrap" onclick="navigate('/item/${p.slug}')">
                <img src="${p.image}" alt="${p.name}" onerror="handleImgError(this, '${p.name}')">
              </div>
              <div class="product-card-body">
                <div class="product-title" onclick="navigate('/item/${p.slug}')">${p.name}</div>
                <div class="product-sub">${p.subtitle}</div>
                <div class="product-price">$${p.price.toFixed(2)}</div>
                <div class="product-actions">
                  <button class="btn btn-navy btn-sm" style="flex:1;" onclick="addToCart('${p.slug}', 1, true)">Buy Now</button>
                  <button class="btn btn-outline-navy btn-sm" style="flex:1;" onclick="addToCart('${p.slug}', 1, false)">Add To Cart</button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function changeSingleQty(delta) {
  state.singleProductQty = Math.max(1, state.singleProductQty + delta);
  const input = document.getElementById('single-qty-input');
  if (input) input.value = state.singleProductQty;
}
window.changeSingleQty = changeSingleQty;

function renderSingleProductPage(slug) {
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  state.singleProductQty = 1;
  return `
    <section class="subpage-hero">
      <div class="container">
        <div style="margin-bottom:24px;">
          <a href="#/product" style="color:var(--slate-text); font-weight:500;">&larr; Back to Product Catalog</a>
        </div>
        <div class="single-product-layout">
          <div>
            <img src="${product.image}" alt="${product.name}" style="width:100%; max-height:520px; object-fit:cover; border-radius:12px;" onerror="handleImgError(this, '${product.name}')">
          </div>
          <div>
            <span class="stock-badge">${product.stock}</span>
            <h1 style="font-size:36px; margin-bottom:8px;">${product.name}</h1>
            <div style="color:var(--slate-text); margin-bottom:16px;">${product.subtitle}</div>
            <div style="font-size:28px; font-weight:700; color:var(--navy-dark); margin-bottom:24px;">$${product.price.toFixed(2)}</div>
            <p style="margin-bottom:28px;">${product.description}</p>

            <div style="display:flex; align-items:center; flex-wrap:wrap; gap:14px; margin-bottom:32px;">
              <div class="qty-selector">
                <button type="button" class="qty-btn" onclick="changeSingleQty(-1)">−</button>
                <input id="single-qty-input" type="text" class="qty-input" value="1" readonly>
                <button type="button" class="qty-btn" onclick="changeSingleQty(1)">+</button>
              </div>
              <button class="btn btn-navy" onclick="addToCart('${product.slug}', state.singleProductQty, true)">Buy Now</button>
              <button class="btn btn-outline-navy" onclick="addToCart('${product.slug}', state.singleProductQty, false)">Add To Cart</button>
            </div>

            <div style="padding-top:24px; border-top:1px solid var(--border-gray);">
              <h3 style="font-size:18px; margin-bottom:12px;">Customer Reviews</h3>
              <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">
                <span class="icon-btn active">All (5★)</span>
                <span class="icon-btn">Newest</span>
                <span class="icon-btn">Highest Rating</span>
              </div>
              <p style="font-size:14.5px;">Handcrafted with care by ATM Travels in Dacula, Georgia. Have you tried ${product.name}? <a href="#/reviews" style="color:var(--navy-dark); font-weight:600; text-decoration:underline;">Write a review</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlogPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <span class="section-tag">ATM TRAVELS JOURNAL</span>
        <h1 style="margin-bottom:16px;">Notes for the Journey</h1>
        <p style="max-width:700px; margin-bottom:44px;">Practical preparation for mind, spirit, and luggage, historical background on sacred destinations, and updates from our coordinators.</p>

        <div class="cards-grid-3">
          ${BLOG_POSTS.map(post => `
            <article class="event-card">
              <div class="event-card-img-wrap" style="aspect-ratio:16/10;">
                <img src="${post.image}" alt="${post.title}" onerror="handleImgError(this, '${post.title}')">
              </div>
              <div class="event-card-body">
                <div class="event-card-tag">${post.category} · ${post.date}</div>
                <h3 style="font-size:20px; margin-bottom:12px;">${post.title}</h3>
                <p style="font-size:14.5px; margin-bottom:20px; flex-grow:1;">${post.excerpt}</p>
                <a href="#/events-and-pilgrimages" class="btn btn-outline-navy btn-sm">Explore Pilgrimages</a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast('Message sent! Our team in Dacula, Georgia will reply shortly.');
}
window.handleContactSubmit = handleContactSubmit;

function renderContactPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <div class="about-split" style="align-items:start;">
          <div>
            <span class="section-tag">CONTACT ATM TRAVELS</span>
            <h1 style="font-size:clamp(34px, 4.5vw, 52px); margin-bottom:20px;">Send us your questions</h1>
            <p style="margin-bottom:28px;">Ask about upcoming pilgrimages, event schedules, registration requirements, or store orders. Our team in Dacula, Georgia will reply with the details as they are confirmed.</p>

            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-icon-box">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text);">EMAIL</div>
                  <a href="mailto:info@atm-travels.org" style="font-size:17px; font-weight:500; color:var(--navy-dark);">info@atm-travels.org</a>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-icon-box">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text);">TEL:</div>
                  <a href="tel:+14045907020" style="font-size:17px; font-weight:500; color:var(--navy-dark);">+1-(404) 590-7020</a>
                </div>
              </div>
            </div>
          </div>

          <div class="form-card">
            <h3 style="margin-bottom:20px;">Direct Inquiry Form</h3>
            <form onsubmit="handleContactSubmit(event)">
              <div class="form-group">
                <label class="form-label">Your Name *</label>
                <input type="text" class="form-control" placeholder="Full name" required>
              </div>
              <div class="form-group">
                <label class="form-label">Your Email *</label>
                <input type="email" class="form-control" placeholder="you@example.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">Subject</label>
                <input type="text" class="form-control" placeholder="Pilgrimage registration, schedule, or store inquiry">
              </div>
              <div class="form-group">
                <label class="form-label">Message *</label>
                <textarea class="form-control" placeholder="How can our team in Dacula, Georgia assist you?" required></textarea>
              </div>
              <button type="submit" class="btn btn-navy btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function setStarRating(stars) {
  state.selectedRating = stars;
  const buttons = document.querySelectorAll('.star-picker-btn');
  buttons.forEach((btn, idx) => {
    if (idx < stars) {
      btn.classList.add('active');
      btn.textContent = '★';
    } else {
      btn.classList.remove('active');
      btn.textContent = '☆';
    }
  });
}
window.setStarRating = setStarRating;

function handleReviewSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('review-title-input').value.trim();
  const text = document.getElementById('review-body-input').value.trim();
  const name = document.getElementById('review-name-input').value.trim();
  const email = document.getElementById('review-email-input').value.trim();
  if (!title || !text || !name) return;

  const parts = name.split(/\s+/);
  const initials = (parts[0]?.[0] || 'A') + (parts[1]?.[0] || parts[0]?.[1] || 'T');

  state.reviews.unshift({
    id: Date.now(),
    title,
    date: 'November 11, 2026',
    rating: state.selectedRating,
    text,
    initials: initials.toUpperCase(),
    author: name,
    email,
    avatarClass: 'avatar-gold'
  });

  renderApp();
  showToast('Thank you! Your review has been published.');
}
window.handleReviewSubmit = handleReviewSubmit;

function renderReviewsPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">TESTIMONIALS &amp; EXPERIENCES</span>
          <h1>Reviews From Pilgrimages &amp; Retreats</h1>
          <p style="margin-top:10px;">Read 5-star reflections from mothers, families, and pilgrims who have journeyed with ATM Travels.</p>
        </div>

        <div class="reviews-grid" style="margin-bottom:72px;">
          ${renderReviewsCards()}
        </div>

        <div class="section-header centered" style="margin-bottom:28px;">
          <span class="section-tag">SHARE YOUR EXPERIENCE</span>
          <h2>Write a Review</h2>
        </div>

        <div class="form-card" style="margin: 0 auto 24px;">
          <form onsubmit="handleReviewSubmit(event)">
            <div class="form-group">
              <label class="form-label">Your overall rating</label>
              <div class="star-rating-picker" role="radiogroup" aria-label="Your overall rating">
                ${[1, 2, 3, 4, 5].map(num => `
                  <button type="button" class="star-picker-btn ${num <= state.selectedRating ? 'active' : ''}" onclick="setStarRating(${num})">
                    ${num <= state.selectedRating ? '★' : '☆'}
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-title-input">Title of your review</label>
              <input id="review-title-input" type="text" class="form-control" placeholder="Summarize your review or highlight an interesting detail" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-body-input">Your review</label>
              <textarea id="review-body-input" class="form-control" placeholder="Tell people your review" required></textarea>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-name-input">Your name</label>
              <input id="review-name-input" type="text" class="form-control" placeholder="Tell us your name" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-email-input">Your email</label>
              <input id="review-email-input" type="email" class="form-control" placeholder="Tell us your email" required>
            </div>

            <div class="form-group">
              <label class="toggle-row">
                <input type="checkbox" class="toggle-input" style="display:none;" required>
                <span class="toggle-switch"></span>
                <span style="font-size:15px; color:var(--navy-dark);">This review is based on my own experience and is my genuine opinion.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-navy">Submit Review</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast('Subscribed! Thank you for joining the ATM Travels newsletter.');
}
window.handleNewsletterSubmit = handleNewsletterSubmit;

function updateActiveNavLinks() {
  const links = document.querySelectorAll('.nav-link[data-route]');
  links.forEach(link => {
    const r = link.getAttribute('data-route');
    if (r === state.route || (r === '/product' && state.route.startsWith('/item/'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function renderApp() {
  const mainEl = document.getElementById('app-main');
  if (!mainEl) return;

  const r = state.route;
  if (r === '/' || r === '') {
    mainEl.innerHTML = renderHomePage();
  } else if (r === '/about') {
    mainEl.innerHTML = renderAboutPage();
  } else if (r === '/events-and-pilgrimages') {
    mainEl.innerHTML = renderEventsPage();
  } else if (r === '/gallery') {
    mainEl.innerHTML = renderGalleryPage();
  } else if (r === '/product') {
    mainEl.innerHTML = renderProductPage();
  } else if (r.startsWith('/item/')) {
    const slug = r.replace('/item/', '');
    mainEl.innerHTML = renderSingleProductPage(slug);
  } else if (r === '/blog') {
    mainEl.innerHTML = renderBlogPage();
  } else if (r === '/contact') {
    mainEl.innerHTML = renderContactPage();
  } else if (r === '/reviews') {
    mainEl.innerHTML = renderReviewsPage();
  } else {
    mainEl.innerHTML = renderHomePage();
  }

  updateActiveNavLinks();
}

window.addEventListener('hashchange', parseRoute);
window.addEventListener('DOMContentLoaded', () => {
  parseRoute();
  updateCartUI();
});
