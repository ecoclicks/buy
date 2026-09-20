// =====================================================
// EDIT BAGIAN INI SAJA UNTUK MENGUBAH WEBSITE
// =====================================================

const STORE_NAME = "ECO CLICK";

const WHATSAPP_NUMBER = "6288226182095";

const INSTAGRAM_USERNAME = "ecow.click";

// =====================================================
// DATA PRODUK
// =====================================================

const products = [
  {
    id: 1,
    name: "Eco Click Charm",
    price: "",
    images: [
      "prod1.JPG"
    ],
    description: "Pilih gelang sesuai seleramu. Setiap gelang punya warna dan cerita tersendiri. Manik Handmade pilihan. Ringan & nyaman di pakai. Cocok untuk daily look, Sekolah, atau Kado."
  },

  {
    id: 2,
    name: "Nama Produk 2",
    price: "",
    images: [
      "prod2.JPG",
      "prod2-1.JPG",
      "prod2-2.JPG",
      "prod2-3.JPG"
    ],
    description: "Pilih gelang sesuai seleramu. Setiap gelang punya warna dan cerita tersendiri. Manik Handmade pilihan. Ringan & nyaman di pakai. Cocok untuk daily look, Sekolah, atau Kado."
  }
];

// =====================================================
// BAGIAN DI BAWAH INI TIDAK PERLU DIEDIT
// =====================================================

document.title = ${STORE_NAME} | Koleksi Gelang;

function setGlobalInfo() {
  document.querySelectorAll(".brand").forEach(el => {
    el.textContent = STORE_NAME;
  });

  document.querySelectorAll("#footerStoreName").forEach(el => {
    el.textContent = STORE_NAME;
  });

  document.querySelectorAll(".copyright").forEach(el => {
    el.innerHTML = ©️ ${new Date().getFullYear()} ${STORE_NAME};
  });

  const instagramLink = document.getElementById("instagramLink");

  if (instagramLink) {
    instagramLink.textContent = @${INSTAGRAM_USERNAME};
    instagramLink.href = https://instagram.com/${INSTAGRAM_USERNAME};
  }

  const whatsappLink = document.getElementById("whatsappLink");

  if (whatsappLink) {
    whatsappLink.href = https://wa.me/${WHATSAPP_NUMBER};
  }
}

function formatWhatsAppMessage(productName) {
  return Halo, saya tertarik dengan Gelang Eco-Click🤗. Apakah masih tersedia?;
}

function getWhatsAppUrl(productName) {
  const message = encodeURIComponent(
    formatWhatsAppMessage(productName)
  );

  return https://wa.me/${WHATSAPP_NUMBER}?text=${message};
}

function renderProducts() {
  const grid = document.getElementById("productGrid");

  if (!grid) return;

  if (!products.length) {
    grid.innerHTML = <p class="empty">Belum ada produk.</p>;
    return;
  }

  grid.innerHTML = products.map(product => `
    <a class="product-card" href="detail.html?id=${product.id}">
      <div class="product-image-wrap">
        <img
          src="${product.images[0]}"
          alt="${product.name}"
          class="product-image"
        >
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    </a>
  `).join("");
}

function renderDetail() {
  const container = document.getElementById("productDetail");

  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const product = products.find(item => item.id === id);

  if (!product) {
    container.innerHTML = `
      <div class="not-found">
        <h1>Produk tidak ditemukan</h1>
        <p>Produk yang kamu cari tidak tersedia.</p>
        <a href="index.html" class="primary-btn">
          Kembali ke Koleksi
        </a>
      </div>
    `;

    return;
  }

  document.title = ${product.name} | ${STORE_NAME};

  const images = product.images || [product.image];

  container.innerHTML = `
    <div class="detail-gallery">

      <div class="detail-image-wrap">
        <button class="gallery-btn gallery-prev" onclick="changeSlide(-1)">
          ‹
        </button>

        <img
          id="detailMainImage"
          src="${images[0]}"
          alt="${product.name}"
          class="detail-image"
        >

        <button class="gallery-btn gallery-next" onclick="changeSlide(1)">
          ›
        </button>
      </div>

      ${
        images.length > 1
        ? `
          <div class="detail-thumbnails">
            ${images.map((image, index) => `
              <button
                class="thumbnail-btn ${index === 0 ? "active" : ""}"
                onclick="goToSlide(${index})"
              >
                <img src="${image}" alt="${product.name} ${index + 1}">
              </button>
            `).join("")}
          </div>
        `
        : ""
      }

    </div>

    <div class="detail-content">
      <p class="eyebrow">KOLEKSI GELANG</p>

      <h1>${product.name}</h1>

      <p class="detail-price">${product.price}</p>

      <div class="divider"></div>

      <p class="detail-description">
        ${product.description}
      </p>

      <div class="contact-box">
        <p class="contact-label">Pesan sekarang</p>

        <p class="contact-number">
          ${WHATSAPP_NUMBER}
        </p>

        <a
          class="whatsapp-btn"
          href="${getWhatsAppUrl(product.name)}"
          target="_blank"
          rel="noopener"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  `;

  window.currentImages = images;
  window.currentSlide = 0;
}

function updateSlide() {
  const image = document.getElementById("detailMainImage");

  if (!image || !window.currentImages) return;

  image.src = window.currentImages[window.currentSlide];

  document.querySelectorAll(".thumbnail-btn").forEach((btn, index) => {
    btn.classList.toggle(
      "active",
      index === window.currentSlide
    );
  });
}

function changeSlide(direction) {
  if (!window.currentImages) return;

  window.currentSlide += direction;

  if (window.currentSlide < 0) {
    window.currentSlide = window.currentImages.length - 1;
  }

  if (window.currentSlide >= window.currentImages.length) {
    window.currentSlide = 0;
  }

  updateSlide();
}

function goToSlide(index) {
  window.currentSlide = index;
  updateSlide();
}

setGlobalInfo();
renderProducts();
renderDetail();
