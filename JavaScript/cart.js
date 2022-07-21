const burgerSimples = [
  {
    id: 101,
    nombre: "Cheeseburger",
    precio: 700,
    imagen: "https://i.postimg.cc/8crQ2dVQ/Simple.png",
    carne: "Medallon 115gr",
    queso: "Cheddar x2",
    topping1: "",
    topping2: "",
    topping3: "",
  },
  {
    id: 102,
    nombre: "Red Peper",
    precio: 850,
    imagen: "https://i.postimg.cc/HxnC2DZL/RedPeper.png",
    carne: "Medallon 115gr",
    queso: "Cheddar x2",
    topping1: "Pimiento Asado",
    topping2: "Cebolla",
    topping3: "Ketchup y Mostaza",
  },
  {
    id: 103,
    nombre: "Sleepy Joe",
    precio: 850,
    imagen: "https://i.postimg.cc/BZ8jSdSs/Sleepy-Joe.png",
    carne: "Medallon 115gr",
    queso: "Cheddar x4",
    topping1: "Salsa SleepyJoe",
    topping2: "Mayonesa American Style",
    topping3: "",
  },
];

const burgerDobles = [
  {
    id: 104,
    nombre: "Big Leno",
    precio: 800,
    imagen: "https://i.postimg.cc/kgPqdH4j/BigLeno.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Cebolla",
    topping2: "Lechuga",
    topping3: "Pepinillos",
    topping4: "Salsa Big LENO",
  },
  {
    id: 105,
    nombre: "Double Double",
    precio: 800,
    imagen: "https://i.postimg.cc/J0yM1VZF/Double-Double.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Cebolla en rodaja",
    topping2: "Tomate",
    topping3: "Lechuga",
    topping4: "Salsa LENO",
  },
  {
    id: 106,
    nombre: "Uncle Sam",
    precio: 950,
    imagen: "https://i.postimg.cc/QVGGhBXB/Uncle-Sam-XL.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Bacon",
    topping2: "Cebolla",
    topping3: "Pepinillos",
    topping4: "Salsa LENO",
  },
  {
    id: 107,
    nombre: "Oklahoma",
    precio: 800,
    imagen: "https://i.postimg.cc/nL0JBc15/Oklahoma.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Cebolla fried",
    topping2: "Pepinillos",
    topping3: "Mayonesa American",
    topping4: "",
  },
  {
    id: 108,
    nombre: "Leno Mole",
    precio: 950,
    imagen: "https://i.postimg.cc/28ZrMYzb/LenoMole.png",
    carne: "Medallon 115gr x2",
    queso: "Cheddar x4",
    topping1: "Bacon bits",
    topping2: "Guacamole",
    topping3: "Lechuga",
    topping4: "Mayonesa HOT",
  },
  {
    id: 109,
    nombre: "Elementary Crispy",
    precio: 950,
    imagen: "https://i.postimg.cc/9Mgc5FRT/Elementary-Crispy.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Bacon",
    topping2: "Cebolla crispy",
    topping3: "Salsa Barbacoa",
    topping4: "",
  },
  {
    id: 110,
    nombre: "American Burger",
    precio: 1000,
    imagen: "https://i.postimg.cc/9XScL0jH/American-Burger.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x4",
    topping1: "Bacon",
    topping2: "Cebolla",
    topping3: "Tomate y Lechuga",
    topping4: "Salsa the American",
  },
];

const burgerTriples = [
  {
    id: 111,
    nombre: "Triple Q",
    precio: 800,
    imagen: "https://i.postimg.cc/KcdRRJjT/TripleQ.png",
    carne: "Medallon 75gr x3 Smashed",
    queso: "Cheddar x3",
    topping1: "Cebolla Brunoise",
    topping2: "Ketchup LENO",
    topping3: "",
    topping4: "",
  },
  {
    id: 112,
    nombre: "345",
    precio: 1000,
    imagen: "https://i.postimg.cc/nhKZV19n/345.png",
    carne: "Medallon 115gr x3",
    queso: "Cheddar x6",
    topping1: "Cebolla Brunoise",
    topping2: "Pepinillos",
    topping3: "Ketchup LENO",
    topping4: "",
  },
  {
    id: 113,
    nombre: "Uncle Sam XL",
    precio: 1100,
    imagen: "https://i.postimg.cc/QVGGhBXB/Uncle-Sam-XL.png",
    carne: "Medallon 90gr x3",
    queso: "Cheddar x6",
    topping1: "Bacon",
    topping2: "Cebolla Brunoise",
    topping3: "Pepinillos",
    topping4: "Salsa LENO",
  },
  {
    id: 114,
    nombre: "Grandpa Sam",
    precio: 1250,
    imagen: "https://i.postimg.cc/0N8vzJ7D/Grandpa-Sam.png",
    carne: "Medallon 90gr x4",
    queso: "Cheddar x8",
    topping1: "Bacon",
    topping2: "Cebolla a la manteca",
    topping3: "Mayonesa con Relish",
    topping4: "Salsa LENO",
  },
];

/* Cart */
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

/* Open Cart*/
cartIcon.onclick = () => {
  cart.classList.add("active");
};
/* Close Cart */
closeCart.onclick = () => {
  cart.classList.remove("active");
};

/* Cart Working */
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

let section = document.querySelector("#shop");
let h2 = document.createElement("h2");
h2.classList.add("section-title");
h2.textContent = "";


section.appendChild(h2);

function IniciarProductos1() {
  let divShop1 = document.createElement("div");
  divShop1.classList.add("shop-content");  
  let simples = document.getElementById("simples");
  burgerSimples.forEach((producto) => {
   
    let divProducto1 = document.createElement("div");
    divProducto1.classList.add("product-box");
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
}
IniciarProductos1();


function IniciarProductos2() {
  let divShop2 = document.createElement("div");
  divShop2.classList.add("shop-content");  
  let dobles = document.getElementById("dobles");
  burgerDobles.forEach((producto) => {
   
    let divProducto2 = document.createElement("div");
    divProducto2.classList.add("product-box");
    divProducto2.innerHTML = `<img src="${producto.imagen}" alt="" class="product-img">
                            <h2 class="product-title">${producto.nombre}</h2>
                            <p class="product-description">${producto.carne}</p>
                            <p class="product-description">${producto.queso}</p>
                            <p class="product-description">${producto.topping1}</p>
                            <p class="product-description">${producto.topping2}</p>
                            <p class="product-description">${producto.topping3}</p>
                            <span class="price">$ ${producto.precio}</span>
                            <i class="fa-solid fa-cart-plus add-cart"></i>`;
                            
    divShop2.appendChild(divProducto2);
    dobles.appendChild(divShop2);
  });
}
IniciarProductos2();

function IniciarProductos3() {
  let divShop3 = document.createElement("div");
  divShop3.classList.add("shop-content");  
  let triples = document.getElementById("triples");
  burgerTriples.forEach((producto) => {
    let divProducto3 = document.createElement("div");
    divProducto3.classList.add("product-box");
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
}
IniciarProductos3();




/* Maiking Function */
function ready() {
  /* REMOVE ITEM */
  let removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInput = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
  }
  /* Add To Cart */
  let addCart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  /* Buy Button */
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
/* Buy Button */
function buyButtonClicked() {
  alert("¡Tu orden está hecha!");
  let cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}
/* Remove items from cart */
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();

  updateTotal();
}
/* Quantity Changes */
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
/* Ad To cart */
function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  let price = shopProducts.getElementsByClassName("price")[0].innerText;
  let productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}

function addProductToCart(title, price, productImg) {
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  let cartItems = document.getElementsByClassName("cart-content")[0];
  let cartItemsNames = document.getElementsByClassName("cart-product-title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already this item to cart");
      return;
    }
  }

  let cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
                          <div class="detail-box">
                              <div class="cart-product-title">${title}</div>
                              <div class="cart-price">${price}</div>   
                              <input type="number" value="1" class="cart-quantity">             
                          </div>
                          <i class='bx bxs-trash-alt cart-remove'></i>
  `;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}
//Update total
function updateTotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = document.getElementsByClassName("cart-box");
  let total = 0;
  let counter = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total += price * quantity;
    
    counter++;
    localStorage.setItem("counter",counter);
    document.getElementById("contador").textContent = localStorage.getItem("counter");
  }
  /* if price contain some Cents value */
  total = Math.round(total * 100) / 100;
  

  

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
