// récupération de l'id de l'article
const urlID = location.search.split('id=')[1]

// vérifié si c'est la création ou l'édition
if (urlID !== undefined) {
    edit(urlID);
}
else {
    create();
}


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
    //Récupération des infos de l'article
    document.querySelector('#save').addEventListener('click', () => {
        let question = document.querySelector('#faq-title').value;
        let answer = document.querySelector('#faq-text').value;


        //remise à zéro des inputs
        document.querySelector('#faq-title').value = "";
        document.querySelector('#faq-text').value = "";


        //envoi des informations du nouvelle article au serveur
        fetch(`https://univership.herokuapp.com/faq/create`, {
            method: 'POST',
            headers: { 
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: question,
                answer: answer
            })
        })
        .then(() => window.location.href = 'manage-faq.html');
    });
}



function edit(ID) {
    fetch(`https://univership.herokuapp.com/faq/${ID}`, {
        method: "GET"
    })
    .then(r => r.json())
    .then(data => {
        // mise en place des informations dans les champs de saisie
        document.querySelector('#faq-title').value = data.question;
        document.querySelector('#faq-text').value = data.answer;



        document.querySelector('.edit').addEventListener('click', ()=>{
	        let title = document.querySelector('#faq-title').value;
	        let category = document.querySelector('#faq-text').value;

            //envoyer les informations vers le fetch d'édition
            fetch(`https://univership.herokuapp.com/faq/edit/${data.id}`,{
                method: "POST",
                headers: { 
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question: question,
                	answer: answer
                })
            })
            .then(() => window.location.href = 'manage-faq.html');
        })
    })
}