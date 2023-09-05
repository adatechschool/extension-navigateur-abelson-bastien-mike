// Définition de la fonction getColor pour générer une couleur aléatoire.
function getColor() {
	return (
	  "#" +
	  Math.random()
		.toString(16)
		.slice(2, 8)
	);
  }
  
  // Écoute l'événement de clic sur l'icône de l'extension.
  chrome.browserAction.onClicked.addListener(function(tab) {
	// Récupère une couleur aléatoire en utilisant la fonction getColor.
	var randomColor = getColor();
	
	// Exécute le code pour modifier la couleur des titres h1 avec la couleur aléatoire.
	chrome.tabs.executeScript({
	  code: `document.querySelectorAll("h1").forEach(function(el) { el.style.color = '${randomColor}'; });`
	});
  });
