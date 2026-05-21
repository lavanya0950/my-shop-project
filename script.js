const products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 50 },
  { id: 3, name: "Mango", price: 150 }
];

let cart = [];

const productDiv = document.getElementById("products");
const cartList = document.getElementById("cart");

// SHOW PRODUCTS
function renderProducts() {
  productDiv.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.margin = "10px";
    div.style.padding = "10px";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
    `;

    const btn = document.createElement("button");
    btn.innerText = "Add to Cart";

    btn.onclick = function () {
      addToCart(p);
    };

    div.appendChild(btn);
    productDiv.appendChild(div);
  });
}

// ADD TO CART
function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    });
  }

  renderCart();
}

// REMOVE ITEM
window.removeItem = function(index) {
  cart.splice(index, 1);
  renderCart();
}

// SHOW CART
function renderCart() {
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price} × ${item.qty}
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartList.appendChild(li);
  });

  const totalLi = document.createElement("li");
  totalLi.innerHTML = "<b>Total: ₹" + total + "</b>";
  cartList.appendChild(totalLi);
}

// INIT
renderProducts();
renderCart();