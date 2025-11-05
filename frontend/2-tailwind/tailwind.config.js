/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./3-html-partials/**/*.html",
    "./5-js/**/*.{js,ts}",
  ],

  safelist: [
    // --- Automatically include text, bg, and border variants for all custom theme colors ---
    ...[
      "warm-white",
      "light-gray",
      "soft-beige",
      "golden-beige",
      "pastel-yellow",
      "soft-mustard",
      "warm-golden-yellow",
      "logo-yellow",
      "soft-peach",
      "muted-rose",
      "muted-coral",
      "medium-salmon",
      "rosy-brown",
      "muted-lavender",
      "soft-dark-purple",
      "dark-grape",
      "light-chestnut",
      "warm-taupe",
      "medium-brown",
      "dark-brown",
      "sage-green",
      "muted-teal",
      "deep-green-teal",
      "deep-green",
      "powder-blue",
      "royal-blue",
      "text-dark",
      "logo-frame",
    ].flatMap((name) => [
      // normal state
      `text-${name}`,
      `bg-${name}`,
      `border-${name}`,
      // hover state
      `hover:text-${name}`,
      `hover:bg-${name}`,
      `hover:border-${name}`,
      // focus state
      `focus:text-${name}`,
      `focus:bg-${name}`,
      `focus:border-${name}`,
      // active state
      `active:text-${name}`,
      `active:bg-${name}`,
      `active:border-${name}`,
    ]),
  ],
};
