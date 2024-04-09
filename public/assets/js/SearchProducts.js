document.addEventListener('DOMContentLoaded', (event) => {
   // Search
   let search_input = document.getElementsByClassName('search_input')[0];
   let content_products = document.getElementsByClassName('content_products')[0];

   if (content_products) {
       let originalHeight = content_products.style.height; // 0px

       search_input.addEventListener('click', () => {
           if (content_products.style.height === "500px") {
               content_products.style.height = originalHeight;
           } else {
               content_products.style.height = "500px";
           }
       });

       /* Filter Products */
       search_input.addEventListener('input', () => {
           const searchValue = search_input.value.toLowerCase();
           fetch('../../src/api/products.json')
               .then(response => response.json())
               .then(data => {
                   content_products.innerHTML = '';
                   const filteredProducts = data.filter(product => product.name.toLowerCase().includes(searchValue));
                   filteredProducts.forEach(product => {
                       const productLink = document.createElement('a');
                       productLink.href = product.description; // Assuming description contains the link
                       productLink.target = "_blank"; // Open link in a new tab
                       content_products.appendChild(productLink);

                       const productDiv = document.createElement('div');
                       productDiv.classList.add('product_setsearch');
                       productLink.appendChild(productDiv);

                       const productImgDiv = document.createElement('div');
                       productImgDiv.classList.add('product_setsearch_img');
                       // Set background image dynamically
                       productImgDiv.style.backgroundImage = `url(${product.image})`;
                       productDiv.appendChild(productImgDiv);

                       const productDiscDiv = document.createElement('div');
                       productDiscDiv.classList.add('product_setsearch_disc');
                       productDiv.appendChild(productDiscDiv);

                       const productName = document.createElement('h3');
                       productName.textContent = product.name;
                       productDiscDiv.appendChild(productName);
                   });
               })
               .catch(error => {
                   console.error('Error fetching products:', error);
               });
       });

       /* End Filter Products */

   } else {
       console.error("Element with class 'content_products' not found");
   }
});
