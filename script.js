/* ============================================================
   Focusquare Photography — script.js
   ============================================================
   👇 EDIT THESE DETAILS — this is the only part you need to change.
   ============================================================ */
const CONFIG = {
  // WhatsApp number with country code, digits only (no +, spaces or dashes)
  // Example: India 9876543210 -> "919876543210"
  whatsappNumber: "919044647871",

  // Default WhatsApp greeting message
  whatsappMessage: "Hi Focusquare Photography! I'd like to know more about your wedding photography.",

  // Instagram username (without the @)
  instagramHandle: "focusquare_photography",

  // Google reviews / business page link
  googleReviewsUrl: "https://share.google/ot9liQ4ijKecmekUI",

  // Developer credit link (Deepak's portfolio / website)
  creditUrl: "https://crazydev-github-io.vercel.app/",

  // Contact details shown in the Contact section
  phoneNumber: "+91 90446 47871",
  email: "focusquarephotography@gmail.com",
  address: "Varanasi, Uttar Pradesh",
};

/* ============================================================
   Below this line: no need to edit.
   ============================================================ */
(function () {
  "use strict";

  const waBase = "https://wa.me/" + CONFIG.whatsappNumber;
  const igUrl = "https://instagram.com/" + CONFIG.instagramHandle;

  function waLink(message) {
    return waBase + "?text=" + encodeURIComponent(message || CONFIG.whatsappMessage);
  }

  /* ---- Wire up WhatsApp + Instagram links ---- */
  function setHref(id, href) {
    const el = document.getElementById(id);
    if (el) el.href = href;
  }
  setHref("floatWhatsapp", waLink());
  setHref("waInline", waLink());
  setHref("floatInstagram", igUrl);
  setHref("igInline", igUrl);
  if (CONFIG.googleReviewsUrl) {
    setHref("googleReviewsBtn", CONFIG.googleReviewsUrl);
  }
  if (CONFIG.creditUrl) {
    setHref("creditLink", CONFIG.creditUrl);
  }

  /* ---- Contact details ---- */
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    const type = el.getAttribute("data-contact");
    if (type === "phone") {
      el.textContent = CONFIG.phoneNumber;
      el.href = "tel:" + CONFIG.phoneNumber.replace(/\s/g, "");
    } else if (type === "email") {
      el.textContent = CONFIG.email;
      el.href = "mailto:" + CONFIG.email;
    } else if (type === "address") {
      el.textContent = CONFIG.address;
    }
  });

  /* ---- Header scroll state ---- */
  const header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 60) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Scroll reveal animations ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Contact form -> WhatsApp ---- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = (document.getElementById("name").value || "").trim();
      const phone = (document.getElementById("phone").value || "").trim();
      const event = document.getElementById("event").value;
      const message = (document.getElementById("message").value || "").trim();

      if (!name || !phone) {
        alert("Please enter your name and phone number.");
        return;
      }

      const text =
        "New Enquiry — Focusquare Photography%0A" +
        "----------------------%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Event: " + event + "%0A" +
        "Message: " + (message || "-");

      window.open(waBase + "?text=" + text, "_blank");
    });
  }

  /* ---- Footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
