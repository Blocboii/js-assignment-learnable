// DATA Samples

const items = [
    { id: 1, name: 'item 1', price: 100 },
    { id: 2, name: 'item 2', price: 200 },
    { id: 3, name: 'item 3', price: 300 },
  ];

  // Shopping carts
  const carts = [];

  // Function to display items
  function displayItems() {
    console.log('Available Items:');
    items.forEach(item => {
      console.log(`${item.id}. ${item.name} - $${item.price}`);
    });
  }

  // Function to add an item to the cart
  function addToCart(itemId) {
    const item = items.find(i => i.id === itemId);

    if (item == 1) {
      carts.push(item);
      console.log(`${item.name} added to the cart.`);
    }  else {
      console.log('Item not found.');
    }
  }

  // Function to display the shopping cart
  function displayCart() {
    console.log('Shopping Cart:');
    if (carts.length === 0) {
      console.log('Empty cart.');
    } else {
      carts.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
      });
    }
  }

  // Example usage
  displayItems();

  addToCart(2);
  addToCart(3);

  displayCart();