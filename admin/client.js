// récupération des articles
fetch(`https://univership.herokuapp.com/list`, {
  method: "GET"
})
  .then(r => r.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      createContent(data[i]);
    }
  })
  .then(() => {
    del();
    edit();
  })


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
  let edit = document.createElement('p');
  let remove = document.createElement('p');

  //lien vers l'article selon l'id
  //link.href = `article.html?id=${row.id}`;
  div.className = 'article';
  div.setAttribute("nb", row.id);
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
  edit.className = 'edition'
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


function del() {
  const arrayRemove = document.querySelectorAll('.remove');
  for (let i = 0; i < arrayRemove.length; i++) {
    const art = arrayRemove[i].parentElement.parentElement.parentElement
    arrayRemove[i].addEventListener('click', () => {
      fetch(`https://univership.herokuapp.com/delete/${art.getAttribute("nb")}`, {
        method: "DELETE"
      })
      art.remove();
    })
  }
}


function edit() {
  const arEdit = document.querySelectorAll('.edition');
  for (let i = 0; i < arEdit.length; i++) {
    arEdit[i].addEventListener('click', () => {
      const art = arEdit[i].parentElement.parentElement.parentElement.getAttribute("nb");
      window.location.href = `edit-article.html?id=${art}`;
    })
  }
}