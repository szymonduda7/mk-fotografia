/* Marcin Kaźmieruk Fotografia — interactions */
(function () {
  "use strict";

  /* ---- current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- header background on scroll ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile navigation ---- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav) nav.id = nav.id || "primary-nav";
  if (nav) nav.classList.add("is-mobile");

  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
    }
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setNav(!document.body.classList.contains("nav-open"));
    });
  }
  // close the menu when a link is tapped, or on Escape
  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNav(false);
  });

  /* ---- scroll-reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // gentle stagger for groups that animate together
          entry.target.style.transitionDelay = Math.min(i * 70, 280) + "ms";
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- contact form (demo, client-side) ----
     To make this live, point `action`/`method` at a backend or a service
     like Formspree and remove the preventDefault below. */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name");
      var contact = form.querySelector("#contact");
      var valid = true;
      [name, contact].forEach(function (f) {
        if (f && !f.value.trim()) {
          f.style.borderColor = "var(--gold-deep)";
          valid = false;
        } else if (f) {
          f.style.borderColor = "";
        }
      });
      if (!valid) {
        if (name && !name.value.trim()) name.focus();
        else if (contact) contact.focus();
        return;
      }
      var fields = form.querySelector(".form__fields");
      var success = document.getElementById("form-success");
      if (fields) fields.style.display = "none";
      if (success) success.classList.add("show");
    });
  }
})();
