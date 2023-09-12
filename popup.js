
// Accéder à chrome.storage.local après avoir reçu le message
chrome.storage.local.get(["price", "title", "img"], (data) => {
  const finalPrice = data.price;
  const finalTitle = data.title;
  const finalImg = data.img; 
  console.log(finalPrice, "pricepopupjs");
  console.log(finalTitle, "titlepopupjs");
  console.log(finalImg, "imgpopupjs");

  const productTitle = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productImg = document.getElementById("productImage");

  productImg.src = finalImg;
  productTitle.textContent = `Nom du produit : ${finalTitle}`;
  productPrice.textContent = `Prix : ${finalPrice}`;
});
