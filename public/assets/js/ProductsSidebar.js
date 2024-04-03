//  Initialize Variables

let myProducts = window.localStorage.getItem('myProducts') ? JSON.parse(window.localStorage.getItem('myProducts')) : [];
const addtocart_btn = document.querySelector("#addtocart_btn");

const cart_image_product_n = document.getElementById('cart_image_product');
const cart_product_name_n = document.getElementById('cart_product_name');
const cart_product_price_n = document.getElementById('cart_product_price');

const nb_products = document.getElementById('nb_products');
const value_nb_products = document.getElementById('value_nb_products');

nb_products.innerHTML = myProducts.length;

// Show Side Bar Products
const sidebar_addtocart = document.getElementById('sidebar_addtocart');

function showSidebarProducts() {
   // Show Sidebar Products
   sidebar_addtocart.style.transform === 'translateX(0px)' ? sidebar_addtocart.style.transform = 'translateX(-100%)' : sidebar_addtocart.style.transform = 'translateX(0px)';
}

sidebar_addtocart.addEventListener('click', showSidebarProducts);

function CreateListProducts() {
   
   if (value_nb_products.value <= 0) {
      alert("Please enter the quantity of the product");
      return;
   }

   console.log(cart_image_product_n.src , cart_product_name_n.innerHTML , cart_product_price_n.innerHTML);

   // Add Product to List
   myProducts.push({
      image: cart_image_product_n.src,
      name: cart_product_name_n.innerHTML,
      price: cart_product_price_n.innerHTML*value_nb_products.value,
      qte : value_nb_products.value
   });

   console.log(myProducts);
   window.localStorage.setItem('myProducts', JSON.stringify(myProducts));

    

}

function add_elements_products() {

  
   // Get the products from the localStorage
   let myProducts = JSON.parse(window.localStorage.getItem('myProducts'));

   

   // If there are products in the localStorage
   if (myProducts) {
      // Loop through the products
      myProducts.map((product) => {
         // Your existing code logic here

         // Add the new element_obj_product code here
         const elementObjProduct = `
            <div id="element_obj_product">
               <div id="element_obj_product_img" style="background-image: url(${product.image});"></div>
               <div id="element_obj_product_disc">
                  <h3>${product.name}</h3>
                  <p>Price: $${product.price.toFixed(2)}</p>
                  <p id="fix_qt_sidecart"> Quantity : <span>x${product.qte}</span> </p>
               </div>
            </div>
         `;

          // Append the new element to the setobject_products div
         document.getElementById("setobject_products").innerHTML += elementObjProduct;

      });
   }
}

function add_elements_products_2() {

   // 
   if (value_nb_products.value <= 0) {
      return;
   }

   if(myProducts) {
       // Update the number of products in the sidebar
         nb_products.innerHTML = myProducts.length;
      // Get the last product added
      let product = myProducts[myProducts.length - 1];

      // Add the new element_obj_product code here
      const elementObjProduct = `
         <div id="element_obj_product">
            <div id="element_obj_product_img" style="background-image: url(${product.image});"></div>
            <div id="element_obj_product_disc">
               <h3>${product.name}</h3>
               <p>Price: $${product.price.toFixed(2)}</p>
               <p id="fix_qt_sidecart"> Quantity : <span>x${product.qte}</span> </p>
            </div>
         </div>
      `;

      // Append the new element to the setobject_products div
      document.getElementById("setobject_products").innerHTML += elementObjProduct;
   
   }
}

addtocart_btn.addEventListener('click', CreateListProducts);
addtocart_btn.addEventListener('click', add_elements_products_2);

add_elements_products(); // show the products in the sidebar when loading the page