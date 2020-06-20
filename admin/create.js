






//init tinymce
let contentmce = {
    selector: ".content",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true
};


tinymce.init(contentmce);



/*
Création d'article
*/
document.querySelector('button').addEventListener('click', () => {

    let content = tinymce.activeEditor.getContent();
    let title = document.querySelector('#create-title').value;
    let category = document.querySelector('#create-category').value;
    let img = document.querySelector('#create-img').value;
    let visibility = document.querySelector('#create-visibility').value;
    // image de l'article
    if (img == ''){
        img = 'https://univership.netlify.app/image/news/news1.png';
    }


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
    }).then(()=>{
        window.location.href = "list-article.html"
    })
});
