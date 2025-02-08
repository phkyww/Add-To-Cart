let productDiv = document.querySelector("#product-div");
let cartsDiv = document.querySelector(".carts-table");
let showDiv = document.querySelector(".show");

//Render Products
function renderProducts() {
  products.forEach((product) => {
    productDiv.innerHTML += `
            <div class="col-12 col-lg-6 mb-4">
              <div class="card card-ctr">
                <div class="card-body">
                  <img src="${product.src}" class="w-100" />
                  <hr />
                  <p class="fs-5 fw-bold">${product.name}</p>
                  <p>
                    Price - <span class="text-primary fs-5 fw-bold">$ ${product.price}</span>
                  </p>
                  <div class="btn btn-primary w-100 cart-btn fs-6 fw-bold" onclick="addToCarts(${product.id})">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>`;
  });
}
renderProducts();

//Carts Array
let carts = [];

//Add Carts
function addToCarts(id) {
  if (carts.some((cart) => cart.id === id)) {
    changeQuantity("plus", id);
  } else {
    let cart = products.find((product) => product.id === id);
    carts.push({
      //extract the cart and add
      ...cart,
      quantity: 1,
    });
  }
  renderCarts();
  renderNumPrice();
}

//Render Carts
function renderCarts() {
  showDiv.innerHTML = "";
  cartsDiv.innerHTML = "";
  carts.forEach((cart) => {
    cartsDiv.innerHTML += `
                <tr>
                  <td>
                    <img
                      src="${cart.src}"
                      id="img-cart"
                      title="${cart.name}"
                    />
                  </td>
                  <td><p class="fs-5 pt-2">$ ${cart.price}</p></td>
                  <td>
                    <i
                      class="fa-solid fa-circle-minus fs-5 text-primary pt-3" onclick="changeQuantity('minus',${cart.id})"
                    ></i>
                    <span class="mx-2 fs-5 pt-3">${cart.quantity}</span>
                    <i
                      class="fa-solid fa-circle-plus fs-5 text-primary pt-3" onclick="changeQuantity('plus',${cart.id})"
                    ></i>
                  </td>
                  <td>
                    <i
                      class="fa-solid fa-trash text-danger fs-5 pt-3" onclick="deleteCart(${cart.id})"
                      title="Remove"
                    ></i>
                  </td>
                </tr>`;
  });
  defaultTxt();
}

//Quantity function
function changeQuantity(condition, id) {
  carts = carts.map((cart) => {
    let quantity = cart.quantity;
    if (cart.id === id) {
      if (condition == "minus" && quantity > 1) {
        quantity--;
      } else if (condition == "plus" && quantity < 100) {
        quantity++;
      }
    }
    return {
      ...cart,
      quantity,
    };
  });
  renderCarts();
  renderNumPrice();
}

//Cart number and total price
function renderNumPrice() {
  let totalPrice = 0,
    totalCarts = 0;
  carts.forEach((cart) => {
    totalPrice += cart.price * cart.quantity;
    totalCarts += cart.quantity;
  });

  document.querySelector("#totalPrice").innerText = `$ ${totalPrice}`;
  document.querySelector("#totalCarts").innerText = `${totalCarts}`;
}

//delete Cart
function deleteCart(id) {
  carts = carts.filter((cart) => cart.id != id);
  renderCarts();
  renderNumPrice();
}

//default text when no carts
function defaultTxt() {
  if (!cartsDiv.innerHTML) {
    showDiv.innerHTML = `
              <h5 class="my-3 text-center text-danger">No items in cart.</h5>
              <hr />`;
  }
}
