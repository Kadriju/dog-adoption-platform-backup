const dogCountSelect = document.getElementById('dog-count');
const totalPriceEl   = document.getElementById('total-price');
const pricePerDogEl  = document.getElementById('price-per-dog');

const priceTiers = {
  1: 9.90,
  2: 9.20,
  3: 8.70,
  4: 8.20,
  5: 7.70,
  6: 7.20,
  7: 6.70,
  8: 6.20,
  9: 5.70,
  10: 5.20,
  11: 4.70,
  12: 4.20

};

function updatePrice() {
  const count = parseInt(dogCountSelect.value, 10);
  const pricePerDog = priceTiers[count] || 9.90;
  const total = (pricePerDog * count).toFixed(2);

  totalPriceEl.textContent = `€${total}`;

  if (pricePerDogEl) {
    pricePerDogEl.textContent = `(${pricePerDog.toFixed(2)} per dog)`;
  }
}

dogCountSelect.addEventListener('change', updatePrice);
updatePrice();
