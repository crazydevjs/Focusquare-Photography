# Focusquare Photography — Website

A responsive, professional one-page website for **Focusquare Photography**
— *The Ultimate Wedding Stories*.

## How to view it
Just double-click **`index.html`** — it opens in any browser. No installation needed.

## ✏️ What to edit (the important part)

### 1. WhatsApp number & Instagram handle (floating buttons)
Open **`script.js`** and edit the `CONFIG` block at the very top:

```js
const CONFIG = {
  whatsappNumber: "919999999999",        // your number, country code, digits only
  instagramHandle: "focusquare.photography",
  phoneNumber: "+91 99999 99999",
  email: "hello@focusquare.com",
  address: "Your City, India",
};
```

- The **floating WhatsApp button** opens a chat with this number.
- The **floating Instagram button** opens this profile.
- The contact form also sends enquiries straight to WhatsApp.

### 2. Logo
Replace **`assets/logo.png`** with the real Focusquare logo (keep the same name).
> Note: the current logo is the PNG that was provided — it currently shows
> "Gyanpur Junction Cafe + Restaurant". Swap it for the actual photography logo.

### 3. Photos
Add your own images (any photo, just rename them):

| File | Used for |
|------|----------|
| `assets/hero.jpg` | Big background image on the homepage |
| `assets/about.jpg` | Photo in the "About Us" section |
| `assets/gallery/1.jpg` … `6.jpg` | Portfolio gallery |

Until you add them, neat "Add image" placeholders are shown automatically.

## Files
- `index.html` — page structure
- `styles.css` — design & responsiveness
- `script.js` — config + interactions
- `assets/` — logo and images
