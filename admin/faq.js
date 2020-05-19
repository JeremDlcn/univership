/*
	Création d'une question
	-----------------------
	1-l'admin écrit la question et la réponses dans les champs de saisie
	2-Il enregistre le tout en cliquant sur le bouton "enregistrer"
	3- le javascript récupère les informations contenues dans les champs de saisie et les stock dans une variable
	4- les champs sont vidés pour signifier à l'utilisateur que sa requête est prise en compte
	5- On envoi les données grâce à un fetch vers https://univership.herokuapp.com/faq/create
	6- on recharge la page pour afficher la liste complète des questions
*/