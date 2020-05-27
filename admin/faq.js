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

function create() {
    //écrire le code ici
    //Réupération des infos de l'article
    document.querySelector('button').addEventListener('click', () => {
        let question = document.querySelector('#article-question').value;
        let answer = document.querySelector('#article-answer').value;


        //remise à zéro des inputs
        document.querySelector('#article-question').value = "";
        document.querySelector('#article-answer').value = "";


        //envoi des informations du nouvelle article au serveur
        fetch(`https://univership.herokuapp.com/faq/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question: question,
                answer: answer
            })
        })
        .then(() => window.location.href = 'manage-faq.html');
    });
}
