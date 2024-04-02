// Sélectionnez l'élément du panier
const mycart = document.getElementById('cart_addtobuy_global');
const cart_image_product = document.getElementById('cart_image_product');
const cart_product_name = document.getElementById('cart_product_name');
const cart_product_price = document.getElementById('cart_product_price');

const close_cart_product = document.getElementById('close_cart_product');
// Fonction pour ajouter un produit au panier
function showProduct( productImage , productName, productPriceTxt, productPrice) {
   // Ajoutez le produit au panier (vous devrez implémenter cette partie)
   // ...
   cart_image_product.src = productImage;
   cart_product_name.innerHTML = productName;
   cart_product_price.innerHTML = productPriceTxt;
   console.log("productPrice : $", productPrice);
   
   // Affichez le panier
   mycart.style.display = 'block';
}

function closeProduct() {
   mycart.style.display = 'none';
}

