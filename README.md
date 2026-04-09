# NovaStore — React E-Commerce App

> **Assignment 3 | Full Stack Development**  
> **Student:** Nihar Salvi | **Roll No:** FY23N062

---

## 📁 Source Code Structure

```
src/
├── components/          ← Reusable UI components
│   ├── Header.js        ← Navbar with NovaStore branding + cart icon
│   ├── Hero.js          ← Hero banner with gradient background
│   ├── Product.js       ← Product card (image, rating, Add to Cart)
│   ├── CartItem.js      ← Individual cart item with qty controls
│   ├── Sidebar.js       ← Slide-in cart drawer
│   └── Footer.js        ← Branded footer
│
├── pages/               ← Route-level page components
│   ├── Home.js          ← Product grid + search bar + category filter
│   ├── ProductDetails.js← Full product page with breadcrumb & ratings
│   └── Checkout.js      ← Multi-step checkout with order confirmation
│
├── contexts/            ← React Context API (global state)
│   ├── ProductContext.js← Provides product list from local data
│   ├── CartContext.js   ← Cart: add, remove, increase, decrease, clear
│   └── SidebarContext.js← Cart sidebar open/close toggle
│
├── data/
│   └── products.js      ← 12 local products (replaces FakeStore API)
│
├── App.js               ← Router setup + layout
└── index.js             ← React DOM entry point
```

---

## ✅ Assignment Requirements Checklist

- [x] Product grid (12 products, 4 categories)
- [x] Product details page
- [x] Add to Cart functionality
- [x] Cart update (increase / decrease / remove)
- [x] Checkout page with form & payment options
- [x] Search bar (real-time)
- [x] Category filter (All / Electronics / Clothing / Accessories / Footwear)
- [x] No external API — uses local `src/data/products.js`
- [x] Custom branding (NovaStore)

---

## 🚀 Run Locally

```bash
npm install
npm start
```

---

## 👨‍💻 Developer Info

**Nihar Salvi** — Roll No: FY23N062  
GitHub: [@niharsalvi2-spec](https://github.com/niharsalvi2-spec)