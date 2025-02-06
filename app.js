let productDiv = document.querySelector("#product-div");
let cartsDiv = document.querySelector(".carts-table");

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

//Add to Carts Array
function addToCarts(id) {
  if (carts.some((cart) => cart.id === id)) {
    alert("Added into carts");
  } else {
    let cart = products.find((product) => product.id === id);
    carts.push({
      //extract the cart and add
      ...cart,
      quantity: 1,
    });
  }
  renderCarts();
}

//Render product Carts
function renderCarts() {
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
                      class="fa-solid fa-circle-minus fs-5 text-primary pt-3"
                    ></i>
                    <span class="mx-2 fs-5 pt-3">${cart.quantity}</span>
                    <i
                      class="fa-solid fa-circle-plus fs-5 text-primary pt-3"
                    ></i>
                  </td>
                  <td>
                    <i
                      class="fa-solid fa-trash text-danger fs-5 pt-3"
                      title="Remove"
                    ></i>
                  </td>
                </tr>`;
  });
}
