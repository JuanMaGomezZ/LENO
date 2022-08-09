
function IniciarProductos1() {
  fetch("/JSON/burgerSimples.JSON")
    .then((resinInicial) => resinInicial.json())
    .then((res) => {
      const burgerSimples = res;
      let divShop1 = document.createElement("div");
      divShop1.classList.add("shop-content");

      let simples = document.getElementById("simples");
      burgerSimples.forEach((producto) => {
        let divProducto1 = document.createElement("div");
        divProducto1.classList.add("product-box");
        divProducto1.setAttribute("id", producto.id);
        divProducto1.innerHTML = `<img src="${producto.imagen}" alt="" class="product-img">
                              <h2 class="product-title">${producto.nombre}</h2>
                              <p class="product-description">${producto.carne}</p>
                              <p class="product-description">${producto.queso}</p>
                              <p class="product-description">${producto.topping1}</p>
                              <p class="product-description">${producto.topping2}</p>
                              <p class="product-description">${producto.topping3}</p>
                              <span class="price">$ ${producto.precio}</span>
                              <i class="fa-solid fa-cart-plus add-cart"></i>`;

        divShop1.appendChild(divProducto1);
        simples.appendChild(divShop1);
      });
    });
}
IniciarProductos1();

function IniciarProductos2() {
  fetch("/JSON/burgerDobles.JSON")
    .then((resinInicial) => resinInicial.json())
    .then((res) => {
      const burgerDobles = res;
      let divShop2 = document.createElement("div");
      divShop2.classList.add("shop-content");
      let dobles = document.getElementById("dobles");
      burgerDobles.forEach((producto) => {
        let divProducto2 = document.createElement("div");
        divProducto2.classList.add("product-box");
        divProducto2.setAttribute("id", producto.id);
        divProducto2.innerHTML = `<img src="${producto.imagen}" alt="" class="product-img">
                              <h2 class="product-title">${producto.nombre}</h2>
                              <p class="product-description">${producto.carne}</p>
                              <p class="product-description">${producto.queso}</p>
                              <p class="product-description">${producto.topping1}</p>
                              <p class="product-description">${producto.topping2}</p>
                              <p class="product-description">${producto.topping3}</p>
                              <p class="product-description">${producto.topping4}</p>
                              <span class="price">$ ${producto.precio}</span>
                              <i class="fa-solid fa-cart-plus add-cart"></i>`;

        divShop2.appendChild(divProducto2);
        dobles.appendChild(divShop2);
      });
    });
}
IniciarProductos2();

function IniciarProductos3() {
  fetch("/JSON/burgerTriples.JSON")
  .then((resinInicial) => resinInicial.json())
  .then((res) => {
    const burgerTriples = res;
  let divShop3 = document.createElement("div");
  divShop3.classList.add("shop-content");
  let triples = document.getElementById("triples");
  burgerTriples.forEach((producto) => {
    let divProducto3 = document.createElement("div");
    divProducto3.classList.add("product-box");
    divProducto3.setAttribute("id", producto.id);
    divProducto3.innerHTML = `<img src="${producto.imagen}" alt="" class="product-img">
                              <h2 class="product-title">${producto.nombre}</h2>
                              <p class="product-description">${producto.carne}</p>
                              <p class="product-description">${producto.queso}</p>
                              <p class="product-description">${producto.topping1}</p>
                              <p class="product-description">${producto.topping2}</p>
                              <p class="product-description">${producto.topping3}</p>
                              <span class="price">$ ${producto.precio}</span>
                              <i class="fa-solid fa-cart-plus add-cart"></i>`;

    divShop3.appendChild(divProducto3);
    triples.appendChild(divShop3);
  });
});
}
IniciarProductos3();

function IniciarProductos4() {
  fetch("/JSON/burgerVeggies.JSON")
  .then((resinInicial) => resinInicial.json())
  .then((res) => {
    const burgerVeggies = res;
  let divShop4 = document.createElement("div");
  divShop4.classList.add("shop-content");
  let veggies = document.getElementById("veggies");
  burgerVeggies.forEach((producto) => {
    let divProducto4 = document.createElement("div");
    divProducto4.classList.add("product-box");
    divProducto4.setAttribute("id", producto.id);
    divProducto4.innerHTML = `<img src="${producto.imagen}" alt="" class="product-img">
                              <h2 class="product-title">${producto.nombre}</h2>
                              <p class="product-description">${producto.carne}</p>
                              <p class="product-description">${producto.queso}</p>
                              <p class="product-description">${producto.topping1}</p>
                              <p class="product-description">${producto.topping2}</p>
                              <p class="product-description">${producto.topping3}</p>
                              <p class="product-description">${producto.topping4}</p>
                              <span class="price">$ ${producto.precio}</span>
                              <i class="fa-solid fa-cart-plus add-cart"></i>`;

    divShop4.appendChild(divProducto4);
    veggies.appendChild(divShop4);
  });
});
}
IniciarProductos4();
