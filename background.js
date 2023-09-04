// Écoute l'événement de clic sur l'icône de l'extension.
chrome.browserAction.onClicked.addListener(function(tab) {
	// Exécute le code pour modifier la couleur des titres h1.
	chrome.tabs.executeScript({
	  code: 'document.querySelectorAll("h1").forEach(function(el) { el.style.color = "green"; });'
	});
  });
  