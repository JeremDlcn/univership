const link = document.querySelector('#admin');

if (localStorage.getItem('token') === null) {
    link.href = "connexion.html";
} else {
    link.href = "admin/list-article.html";
}