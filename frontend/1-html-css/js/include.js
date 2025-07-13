// js/include.js
document.querySelectorAll("[data-include]").forEach(async (el) => {
  const file = el.dataset.include;          // partials/header.html etc.
  try {
    const resp = await fetch(file);
    if (!resp.ok) throw new Error(resp.status);
    el.outerHTML = await resp.text();       // swap placeholder with partial
  } catch (err) {
    console.error("Include error:", file, err);
  }
});
