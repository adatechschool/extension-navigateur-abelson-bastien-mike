// Ce script est injecté dans la page Amazon par le manifest.json
const priceElement = document.querySelector(".f-faPriceBox__price.userPrice.js-ProductBuy-standardCheckable.checked");
const titleElement = document.querySelector(".f-productHeader-Title");

const price = priceElement.textContent.trim();
  const title = titleElement.textContent.trim();
  console.log(price,'pricecontentjs')
  console.log(title,'titlecontentjs')

  // Envoie les données récupérées au script de fond
  chrome.runtime.sendMessage({ price, title });

