let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
window.document.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}


const product =[
  {
    title:'orange frais',
    image:"orange1.jpg",
    price: 2.5,
  },
  {
    title:'onion frais',
    image:'onion2.jpg',
    price: 2.5,
  },
  {
    title:'Viande frais',
    image:'viande2.jpg',
    price: 25,
  },
  {
    title:'chou frais',
    image:'chou.jpg',
    price: 1.5,
  },
  {
    title:'>Avocat frais',
    image:'avocado.jpg',
    price: 2.5,
  }
  
];
console.log(product);

const categories =[...new Set(product.map((item)=> 
  {return item  }  ))]
  
  let i=0;
  document.getElementById('root').innerHTML = categories.map((item)=>
  {
      
      var {image,title,price}=item;
      return(  
              `<div class='swiper-slide box'
              <div class='img-box'>
              <img src=${image} id='image' alt=""></img>
              
                  <h3>${title}</h3>
                      <div class='price'>${price}.000 DT</div>`+
                      "<button class='btn' conclick='addtocart()'> Ajouter au Panier</button>"+
                  `
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  </div>  
              </div>`
      
  )
          }).join('')


var cart =[];


function addtocart(){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
  let j=0, total=0;
 
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML="Votre panier est vide";
      document.getElementById("total").innerHTML=""+0+".000 DT";
  }
      else{
          document.getElementById("cartItem").innerHTML=cart.map((items)=>
          {
              var {image,title,price}=items;
              total+=price;
              document.getElementById("total").innerHTML=total+".000DT";
              return(
                 `<div class='cart-item'>
                    <div class='row-img'>
                      <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'> ${price}.00 DT</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++) + ")'></i></div>"
              );
           }).join('');
            }
          }


























/* creation d'un array contenant tout les  produits 
const productsSection = document.getElementById('products');
console.log(productsSection);
const boxElements = productsSection.getElementsByClassName("box");
console.log(boxElements);

const allDivs = [];

for (let i = 0; i < boxElements.length; i++) {
  const box = boxElements[i];
  const img = box.querySelector("img").src;
  const h3 = box.querySelector("h3").innerText;
  const price = box.querySelector(".price").innerText;

  const div = {
    img,
    h3,
    price
  };

  allDivs.push(div);
}



console.log(allDivs);
*/

/*const shoppingCartDiv = document.querySelector(".shopping-cart");

function addToCart(e) {

  const box = document.querySelector("box");
  console.log(box);
  const targetDiv = document.querySelector("targetDiv");
  console.log(targetDiv);
  const cartItem = document.createElement("div");
  console.log(cartItem);
  cartItem.classList.add("box");
  const img = document.createElement("img");
  img.src = box.img;
  console.log(img);
*/
/*
  const categories =[...new Set(product.map((item)=> 
    {return item  }  ))]
    
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        
        var {image,title,price}=item;
        return(  
                `<div class='box'
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div>
                    <div class='bottom'>
                        <p>${title}</p>
                        <h2>${price}.000</h2>`+
                        "<button onclick='addtocart("+(i++)+")'> Ajouter au Panier</button>"+
                    `</div>
                </div>`
        
    )
            }).join('')




  /*const image=document.getElementById(box.image);
  console.log(image);
  targetDiv.appendChild(image.cloneNode(true));
  console.log(targetDiv);
*/







/*


function addToCart(product) {
  
  const cartItem = document.createElement("div");
  cartItem.classList.add("box");

  const img = document.createElement("img");
  img.src = product.img;
  console.log(img);
  cartItem.appendChild(img);

  const quantity = document.createElement("h3");
  quantity.innerText = "1";
  cartItem.appendChild(quantity);

  const increaseBtn = document.createElement("button");
  increaseBtn.innerText = "+";
  increaseBtn.addEventListener("click", () => {
    increaseQuantity(quantity);
  });
  cartItem.appendChild(increaseBtn);

  const decreaseBtn = document.createElement("button");
  decreaseBtn.innerText = "-";
  decreaseBtn.addEventListener("click", () => {
    decreaseQuantity(quantity);
  });
  cartItem.appendChild(decreaseBtn);

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerText = product.price;
  cartItem.appendChild(price);

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Supprimer";
  removeBtn.addEventListener("click", () => {
    removeCartItem(cartItem);
  });
  
  cartItem.appendChild(removeBtn);

  shoppingCartDiv.appendChild(cartItem);
}

function increaseQuantity(quantityElement) {
  let quantity = parseInt(quantityElement.innerText);
  quantity++;
  quantityElement.innerText = quantity.toString();
}

function decreaseQuantity(quantityElement) {
  let quantity = parseInt(quantityElement.innerText);
  if (quantity > 1) {
    quantity--;
    quantityElement.innerText = quantity.toString();
  }
}

function removeCartItem(cartItem) {
  shoppingCartDiv.removeChild(cartItem);
}

allDivs.forEach((product) => {
  addToCart(product);
});

//*/



































var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnIntraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnIntraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });