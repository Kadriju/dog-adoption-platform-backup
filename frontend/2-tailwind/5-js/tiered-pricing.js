// js/tiered-pricing.js
(function () {
  // Shared logic (same as your private pricing)
  const DISCOUNT_STEP = 0.05; // 5% per extra dog
  const MAX_DISCOUNT = 0.5; // 50% max
  const MAX_DISCOUNT_DOGS = 11; // Discount caps at 11 dogs

  function setupTieredPricing({ selectId, totalId, perDogId, BASE_PRICE }) {
    const dogCountSelect = document.getElementById(selectId);
    const totalPriceEl = document.getElementById(totalId);
    const pricePerDogEl = document.getElementById(perDogId);
    if (!dogCountSelect || !totalPriceEl) return;

    function getDiscount(count) {
      return Math.min((count - 1) * DISCOUNT_STEP, MAX_DISCOUNT);
    }

    function getPricePerDog(count) {
      const discount = getDiscount(count);
      return BASE_PRICE * (1 - discount);
    }

    function getTotalPrice(count) {
      if (count <= 1) return BASE_PRICE;

      if (count <= 10) {
        // Normal discount zone
        const pricePerDog = getPricePerDog(count);
        return pricePerDog * count;
      } else {
        // At 11+ dogs, discount is capped
        const discountAt10 = getDiscount(10); // e.g., 0.45 with 5% steps
        const priceAt10 = BASE_PRICE * (1 - discountAt10);
        const cappedPrice = BASE_PRICE * (1 - MAX_DISCOUNT); // e.g., 50% off
        return priceAt10 * 10 + cappedPrice * (count - 10);
      }
    }

    function updatePriceDisplay() {
      const count = parseInt(dogCountSelect.value, 10) || 1;
      const displayPricePerDog = getPricePerDog(
        Math.min(count, MAX_DISCOUNT_DOGS),
      ); // label

      const totalPrice = getTotalPrice(count);
      totalPriceEl.textContent = `€${totalPrice.toFixed(2)}`;

      if (pricePerDogEl) {
        pricePerDogEl.textContent = `(${displayPricePerDog.toFixed(2)} per dog)`;
      }
    }

    dogCountSelect.addEventListener("change", updatePriceDisplay);
    updatePriceDisplay();
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Private form (unchanged: base €9.90)
    setupTieredPricing({
      selectId: "dog-count",
      totalId: "total-price",
      perDogId: "price-per-dog",
      BASE_PRICE: 9.9,
    });

    // Breeder form (same logic, higher base: €19.90)
    setupTieredPricing({
      selectId: "dog-count-breeder",
      totalId: "total-price-breeder",
      perDogId: "price-per-dog-breeder",
      BASE_PRICE: 19.9,
    });
  });
})();
