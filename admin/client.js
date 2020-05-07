//On récupère les articles présents dans le JSON à travers le serveur puis on les envoie au ficher HTML
// récupération des articles
fetch(`http://localhost:3000/list`, {
  method: "GET"
})
  .then(r => r.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      createContent(data[i]);
    }
  });


//Création de la liste d'articles
function createContent(row) {
  let link = document.createElement('a');
  let div = document.createElement('div');
  let div2 = document.createElement('div');
  let img = document.createElement('img');
  let div3 = document.createElement('div');
  let title = document.createElement('h3');
  let date = document.createElement('p');
  let content = document.createElement('p');
  let div4 = document.createElement('div');
  let figure = document.createElement('figure');
  let figcaption = document.createElement('figcaption');
  let img2 = document.createElement('img');
  let div5 = document.createElement('div');
  let edit = document.createElement('a');
  let remove = document.createElement('a');

  //lien vers l'article selon l'id
  //link.href = `article.html?id=${row.id}`;
  div.className = 'article';
  img.src = '../image/news/news1.png';
  div3.className = 'corps';
  title.innerHTML = row.title;
  date.innerHTML = row.date;
  content.innerHTML = row.content;
  div4.className = 'tools';
  figcaption.textContent = row.visibility;
  img2.src = "../image/icon/eye.png";
  img2.className = 'visibility';
  edit.textContent = 'Modifier';
  remove.textContent = 'Supprimer';
  remove.className = 'remove';
  remove.href = 'article.html';

  //link.appendChild(div);
  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);
  div2.appendChild(img);
  div3.appendChild(title);
  div3.appendChild(date);
  div3.appendChild(content);
  div4.appendChild(figure);
  div4.appendChild(div5);
  figure.appendChild(figcaption);
  figure.appendChild(img2);
  div5.appendChild(edit);
  div5.appendChild(remove);

  document.querySelector('article').appendChild(div);
}

const arrayRemove = document.querySelectorAll('.remove');
for (let i = 0; i < arrayRemove.length; i++) {
  arrayRemove[i].addEventListener('click', () => {
    fetch(`http://localhost:3000/delete/:id`, {
      method: "DELETE"
    })
  })
}