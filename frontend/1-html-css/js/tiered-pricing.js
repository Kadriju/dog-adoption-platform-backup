const dogCountSelect = document.getElementById('dog-count');
const totalPriceEl = document.getElementById('total-price');
const pricePerDogEl = document.getElementById('price-per-dog');

const BASE_PRICE = 9.90;
const DISCOUNT_STEP = 0.05;     // 5% per extra dog
const MAX_DISCOUNT = 0.5;       // 50% max
const MAX_DISCOUNT_DOGS = 11;   // Discount caps at 11 dogs

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
    const cappedPrice = BASE_PRICE * (1 - MAX_DISCOUNT); // €4.95
    const total = (BASE_PRICE * (1 - 0.45)) * 10 + cappedPrice * (count - 10);
    return total;
  }
}

function updatePriceDisplay() {
  const count = parseInt(dogCountSelect.value, 10) || 1;
  const displayPricePerDog = getPricePerDog(Math.min(count, 11)); // for label

  const totalPrice = getTotalPrice(count);
  totalPriceEl.textContent = `€${totalPrice.toFixed(2)}`;

  if (pricePerDogEl) {
    pricePerDogEl.textContent = `(${displayPricePerDog.toFixed(2)} per dog)`;
  }
}

dogCountSelect.addEventListener('change', updatePriceDisplay);
updatePriceDisplay();


