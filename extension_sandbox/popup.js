chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.price,"pricepopupjs")
    console.log(message.title,"titlepopupjs")
    if (message.price && message.title) {
      const productTitle = document.getElementById("productTitle");
      const productPrice = document.getElementById("productPrice");
  
      productTitle.textContent = `Titre du produit : ${message.title}`;
      productPrice.textContent = `Prix : ${message.price}`;
    }
  });
  