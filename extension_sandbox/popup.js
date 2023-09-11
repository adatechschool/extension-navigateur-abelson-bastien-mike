
// Accéder à chrome.storage.local après avoir reçu le message
chrome.storage.local.get(["price", "title"], (data) => {
  const finalPrice = data.price;
  const finalTitle = data.title;
  console.log(finalPrice, "pricepopupjs");
  console.log(finalTitle, "titlepopupjs");

  const productTitle = document.getElementById("productTitle");
  const productPrice = document.getElementById("productPrice");

  productTitle.textContent = `Titre du produit : ${finalTitle}`;
  productPrice.textContent = `Prix : ${finalPrice}`;
});
