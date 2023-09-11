// Dans background.js
function keepServiceWorkerActive() {
    setInterval(() => {
      chrome.runtime.sendMessage({ type: "keepActive" });
    }, 20000); // Envoie un message toutes les 20 secondes
  }
  
  keepServiceWorkerActive();





// Écoute l'événement de clic sur l'icône de l'extension
chrome.action.onClicked.addListener((tab) => {
    // Injecte le script de contenu dans la page active
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrapeFnacData,
    });
  });
  
  function scrapeFnacData() {
    const priceElement = document.querySelector(".f-faPriceBox__price.userPrice.js-ProductBuy-standardCheckable.checked");
    const titleElement = document.querySelector(".f-productHeader-Title");
  
    if (priceElement && titleElement) {
      const price = priceElement.textContent.trim();
      const title = titleElement.textContent.trim();
      console.log(price,'pricebg')
      console.log(title,'titlebg')
  
      // Envoie les données récupérées au script de fond
      //chrome.runtime.sendMessage({ price, title });
    }
  }

 
// Écouter les messages provenant des scripts de contenu (content.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.price && message.title) {
        // Accéder aux données du message
        const price = message.price;
        const title = message.title;

        // Faire quelque chose avec les données, par exemple, les afficher dans la console
        console.log(price, title,'pricetitlebg');

        //Stocker les données dans localStorage
        chrome.storage.local.set({"title" : title});
        chrome.storage.local.set({"price" : price});
      }
    });
    