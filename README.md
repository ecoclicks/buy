# Website Gelang — Panduan Edit

Website ini dibuat hanya dengan HTML, CSS, dan JavaScript. Bisa diedit langsung di VS Code.

## Struktur

- `index.html` = halaman utama
- `detail.html` = halaman detail produk
- `style.css` = tampilan website
- `script.js` = data produk + pengaturan toko
- `images/` = tempat foto gelang

## 1. Ganti nama toko

Buka `script.js`, lalu ubah:

```js
const STORE_NAME = "NAMA TOKO";
```

## 2. Ganti nomor WhatsApp

Gunakan format internasional tanpa `+`, spasi, atau tanda `-`.

```js
const WHATSAPP_NUMBER = "628xxxxxxxxxx";
```

Contoh format:
`6281234567890`

## 3. Ganti Instagram

```js
const INSTAGRAM_USERNAME = "username";
```

Isi username tanpa `@`.

## 4. Ganti foto

Masukkan foto gelang ke folder:

`images/`

Lalu ubah nama file di data produk:

```js
image: "images/gelang-1.jpg"
```

## 5. Tambah produk

Copy salah satu produk di `script.js`, lalu ubah ID, nama, harga, foto, dan deskripsinya.

Contoh:

```js
{
  id: 4,
  name: "Gelang Baru",
  price: "Rp80.000",
  image: "images/gelang-4.jpg",
  description: "Deskripsi gelang baru."
}
```

Pastikan setiap produk punya `id` yang berbeda.

## 6. Hapus produk

Hapus seluruh blok `{ ... }` produk yang ingin dihilangkan.

## 7. Ubah harga/deskripsi

Edit langsung bagian:

```js
price: "Rp80.000",
description: "Deskripsi gelang."
```

## 8. Menjalankan website

Buka `index.html` di browser.

Untuk pengalaman edit yang lebih nyaman di VS Code, kamu juga bisa memakai extension Live Server.

## Catatan

Website ini sengaja tidak memakai database, login, keranjang, pembayaran, atau admin panel supaya sederhana dan mudah diedit.
