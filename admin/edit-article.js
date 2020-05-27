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
Création d'article

1- l'utilisateur rentre des données dans les champs de saisie (select, input et textarea)
2- il appuie sur le bouton "enregistrer" ce qui déclenche le programme qui va crée l'article
3- on récupère les valeurs dans les différents champ de saisie
4- on crée un fetch avec un methode HTTP POST qui envoi les données sous forme d'un objet javascript

*/

function create() {
    //écrire le code ici
    //Réupération des infos de l'article
    document.querySelector('button').addEventListener('click', () => {
        let title = document.querySelector('#article-title').value;
        let category = document.querySelector('#article-category').value;
        let content = document.querySelector('#article-text').value;
        //let date = document.querySelector('dateArticle').value;
        let img = document.querySelector('#article-poster').value;
        let visibility = document.querySelector('#article-visibility').value;


        //remise à zéro des inputs
        document.querySelector('#article-title').value = "";
        document.querySelector('#article-category').value = "";
        document.querySelector('#article-text').value = "";
        //document.querySelector('dateArticle').value = "";
        document.querySelector('#article-poster').value = "";
        document.querySelector('#article-visibility').value = "";


        //envoi des informations du nouvelle article au serveur
        fetch(`https://univership.herokuapp.com/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                category: category,
                content: content,
                img: img,
                visibility: visibility
            })
        })
        .then(() => window.location.href = 'article.html');
    });
}




/*
Edition d'article

1- Les données de l'articles sont rentrées automatiquement dans leur champ de saisie correspondant
2- L'utilisateur modifie les informations qu'il souhaite modifié
3- il appuie sur le bouton "enregistrer" ce qui déclenche le programme qui va mettre à jour l'article
4- on récupère les valeurs dans les différents champ de saisie
5- on crée un fetch avec un methode HTTP POST qui envoi les données sous forme d'un objet javascript


*/


function edit(ID) {
    fetch(`https://univership.herokuapp.com/article/${ID}`, {
        method: "GET"
    })
    .then(r => r.json())
    .then(data => {
        // mise en place des informations dans les champs de saisie
        document.querySelector('#article-title').value = data.title;
        document.querySelector('#article-category').value = data.category;
        document.querySelector('#article-text').value = data.content;
        document.querySelector('#article-poster').value = data.img;
        document.querySelector('#article-visibility').value = data.visibility;
        //envoyer les informations vers le fetch d'édition
        fetch(`https://univership.herokuapp.com/edit/${data.id}`,{
            body: JSON.stringify({
                title: title,
                category: category,
                content: content,
                img: img,
                visibility: visibility
            })
        })
        .then(() => window.location.href = 'article.html');
    })
}