/*
Création d'article

1- l'utilisateur rentre des données dans les champs de saisie (select, input et textarea)
2- il appuie sur le bouton "enregistrer" ce qui déclenche le programme qui va crée l'article
3- on récupère les valeurs dans les différents champ de saisie
4- on crée un fetch avec un methode HTTP POST qui envoi les données sous forme d'un objet javascript

*/





//écrire le code ici





//exemple du fetch pour envoyer les données à l'API
//ce qui est à l'intérieur du "body: JSON.stringify" est indicatif c'est pas forcément la même chose que pour univership
fetch(`https://univership.herokuapp.com/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        poster: variable1,
        title: variable2,
        author: variable3,
        content: varaible4
    })
})










/*
Edition d'article

1- Les données de l'articles sont rentrées automatiquement dans leur champ de saisie correspondant
2- L'utilisateur modifie les informations qu'il souhaite modifié
3- il appuie sur le bouton "enregistrer" ce qui déclenche le programme qui va mettre à jour l'article
4- on récupère les valeurs dans les différents champ de saisie
5- on crée un fetch avec un methode HTTP POST qui envoi les données sous forme d'un objet javascript


*/






//écrire le code ici