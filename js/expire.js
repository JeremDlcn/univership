const link = document.querySelector('#admin');

fetch(`https://univership.herokuapp.com/expired`, {
     method: 'GET',
     headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
})
.then(r => r.json())
.then((data)=>{
    if (data.status !== undefined) {
        if (data.status == 'token expired') { localStorage.removeItem('token'); link.href = "connexion.html";};
        if (data.status == 'valid') link.href = "admin/list-article.html";
    }
    else link.href = "connexion.html";
})
