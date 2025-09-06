// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

function getPrices(taxBoolean) {
  // validate first
  if (typeof taxBoolean !== 'boolean') {
    console.log('You need to pass a boolean to the getPrices call!');
    return;
  }

  for (let i = 0; i < dishData.length; i++) {
    const dish = dishData[i];
    const finalPrice = taxBoolean ? dish.price * tax : dish.price;
    console.log(`Dish: ${dish.name} Price: $${finalPrice.toFixed(2)}`);
  }
}

function getDiscount(taxBoolean, guests) {
  // always show the price list first (per spec)
  getPrices(taxBoolean);

  // validate guests
  if (typeof guests !== 'number' || guests <= 0 || guests >= 30) {
    console.log('The second argument must be a number between 0 and 30');
    return;
  }

  let discount = 0;
  if (guests < 5) discount = 5;
  else discount = 10;

  console.log(`Discount is: $${discount}`);
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
getDiscount(false, 10);