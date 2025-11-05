(function () {
	// Ciblage des éléments
	const toggle = document.querySelector(".menu-btn");
	const nav = document.querySelector("nav.menu");

	if (!toggle || !nav) {
		// Si les éléments ne sont pas trouvés, on sort proprement
		// Utile pour éviter les erreurs lors du chargement sur des pages sans menu
		console.warn("menu-btn ou nav.menu introuvable : le script d'ouverture du menu n'a pas été initialisé.");
		return;
	}

	// Écoute du clic sur le bouton de menu
	toggle.addEventListener("click", () => {
		// Déterminer l'état actuel (string "true" / "false")
		const isOpen = toggle.getAttribute("aria-expanded") === "true";
		const isClosed = !isOpen;
		console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

		// Mettre à jour l'attribut aria-hidden du nav :
		// si isOpen === true (le menu est ouvert), on ferme => aria-hidden = "true"
		// si isOpen === false (le menu est fermé), on ouvre => aria-hidden = "false"
		nav.setAttribute("aria-hidden", String(isOpen));

		// Mettre à jour l'attribut aria-expanded du bouton (inverse de isOpen)
		toggle.setAttribute("aria-expanded", String(!isOpen));

		// Ajouter/enlever la classe 'noscroll' sur le body lorsque le menu est ouvert
		// Quand on ouvre le menu (nouvel état ouvert === !isOpen) on ajoute la classe
		document.body.classList.toggle("noscroll", !isOpen);
	});
})();

