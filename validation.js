const products = [];
console.log("hello validation")
  




// Écouter les messages provenant des scripts de contenu (content.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    alert("message reçu");
    console.log("message reçu");
    if (message.price && message.title) {
        // Accéder aux données du message
        const price = message.price;
        const title = message.title;
        const img = message.img;

        document.addEventListener('DOMContentLoaded', function () {
            // Récupérez le bouton par son ID
            const saveButton = document.getElementById('save');
          
            // Gérez le clic sur le bouton "Ajouter ce produit"
            saveButton.addEventListener('click', function () {
                alert("hello");
                console.log("hello");
        
          const item = { title : title, price : price, img : img}
          console.log(item)
          products.push(item)
          console.log(products)
        
          // Faire quelque chose avec les données, par exemple, les afficher dans la console
          console.log(price, title, img,'pricetitlebg');
        
          //Stocker les données dans localStorage
          chrome.storage.local.set({"products" : products});
        });
        });

      }
    });
