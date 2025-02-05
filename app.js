let productDiv = document.querySelector("#product-div");

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
                  <div class="btn btn-primary w-100 cart-btn fs-6 fw-bold">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>`;
  });
}
renderProducts();
