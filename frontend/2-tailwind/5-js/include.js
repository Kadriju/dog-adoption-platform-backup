// 5-js/include.js
document.addEventListener("DOMContentLoaded", async () => {
  const elements = document.querySelectorAll("[data-include]");
  for (const el of elements) {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file, { cache: "no-store" });
      if (!response.ok) throw new Error(response.statusText);
      el.innerHTML = await response.text();
    } catch (err) {
      console.error(`Error including ${file}:`, err);
      el.innerHTML = `<!-- Failed to load ${file} -->`;
    }
  }
});

