document.getElementById('petrol-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const costPerLiter = parseFloat(document.getElementById('cost-per-liter').value);
  const litersPurchased = parseFloat(document.getElementById('liters-purchased').value);

  const totalCost = (costPerLiter * litersPurchased).toFixed(2);

  document.getElementById('total-cost').textContent = `Total cost: ${totalCost}AED`;
});
