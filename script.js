// =====================================================
// EDIT BAGIAN INI SAJA UNTUK MENGUBAH WEBSITE
// =====================================================

const STORE_NAME = "ECO CLICK";

// Masukkan nomor WhatsApp dengan format internasional.
// Contoh Indonesia: 6281234567890
const WHATSAPP_NUMBER = "6288226182095";

// Masukkan username Instagram tanpa tanda @
const INSTAGRAM_USERNAME = "ecow.click";

// =====================================================
// DATA PRODUK
// Tambahkan / hapus produk dari bagian ini.
// Satu produk = satu foto.
// =====================================================

const products = [
  {
    id: 1,
    name: "Eco Click Charm",
    price: "",
    image: "prod1.JPG",
    description: "Pilih gelang sesuai seleramu. Setiap gelang punya warna dan cerita tersendiri. Manik Handmade pilihan. Ringan & nyaman di pakai. Cocok untuk daily look, Sekolah, atau Kado."
  }
];

// =====================================================
// BAGIAN DI BAWAH INI TIDAK PERLU DIEDIT
// =====================================================

document.title = '${STORE_NAME} | Koleksi Gelang';

function setGlobalInfo() {
  document.querySelectorAll(".brand").forEach(el => el.textContent = STORE_NAME);
  document.querySelectorAll("#footerStoreName").forEach(el => el.textContent = STORE_NAME);
  document.querySelectorAll(".copyright").forEach(el => {
    el.innerHTML = '©️ ${new Date().getFullYear()} ${STORE_NAME}';
  });

  const instagramLink = document.getElementById("instagramLink");
  if (instagramLink) {
    instagramLink.textContent = '@${INSTAGRAM_USERNAME}';
    instagramLink.href = 'https://instagram.com/${INSTAGRAM_USERNAME}';
  }

  const whatsappLink = document.getElementById("whatsappLink");
  if (whatsappLink) {
    whatsappLink.'href = https://wa.me/${WHATSAPP_NUMBER}';
  }
}

function formatWhatsAppMessage(productName) {
  return 'Halo, saya tertarik dengan Gelang Eco-Click🤗. Apakah masih tersedia?';
}

function getWhatsAppUrl(productName) {
  const message = encodeURIComponent(formatWhatsAppMessage(productName));
  return 'https://wa.me/${WHATSAPP_NUMBER}?text=${message}';
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (!products.length) {
    grid.innerHTML = '<p class="empty">Belum ada produk.</p>';
    return;
  }

  grid.innerHTML = products.map(product => `
    <a class="product-card" href="detail.html?id=${product.id}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-image">
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
        <a href="index.html" class="primary-btn">Kembali ke Koleksi</a>
      </div>
    `;
    return;
  }

  document.title = '${product.name} | ${STORE_NAME}';

  container.innerHTML = `
    <div class="detail-image-wrap">
      <img src="${product.image}" alt="${product.name}" class="detail-image">
    </div>

    <div class="detail-content">
      <p class="eyebrow">KOLEKSI GELANG</p>
      <h1>${product.name}</h1>
      <p class="detail-price">${product.price}</p>
      <div class="divider"></div>
      <p class="detail-description">${product.description}</p>

      <div class="contact-box">
        <p class="contact-label">Pesan sekarang</p>
        <p class="contact-number">${WHATSAPP_NUMBER}</p>
        <a class="whatsapp-btn" href="${getWhatsAppUrl(product.name)}" target="_blank" rel="noopener">
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  `;
}

setGlobalInfo();
renderProducts();
renderDetail();
