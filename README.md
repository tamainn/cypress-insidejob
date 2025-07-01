# Cypress InsideJob - SauceDemo Automation Testing

🔍 Proyek ini adalah pengujian otomatis menggunakan **Cypress** untuk aplikasi web [SauceDemo](https://www.saucedemo.com), sebuah situs demo e-commerce yang digunakan untuk latihan automation testing.

---

## 🚀 Fitur Pengujian

Pengujian yang dilakukan meliputi:

- ✅ Login dengan kredensial valid & invalid
- ✅ Logout dari akun
- ✅ Navigasi menu (Burger Menu)
- ✅ Menambahkan dan menghapus produk dari keranjang
- ✅ Checkout flow sampai selesai
- ✅ Validasi tampilan dan elemen UI

---

## 🧪 Tools & Teknologi

- [Cypress](https://www.cypress.io/) - Framework utama untuk end-to-end testing
- JavaScript (100%) - Bahasa scripting yang digunakan
- GitHub Actions (opsional) - Untuk CI/CD automation (jika ditambahkan ke depannya)



## 📂 Struktur Folder
```
cypress-insidejob/
├── cypress/
│ ├── e2e/ # Test-case utama
│ ├── support/ # File support (commands.js, e2e.js)
├── cypress.config.js # Konfigurasi Cypress
├── package.json # Dependency & script
└── README.md # Dokumentasi proyek ini
```