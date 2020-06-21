// récupération des articles
fetch(`https://univership.herokuapp.com/list`, {
  method: "GET",
  headers: { 
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
})
  .then(r => r.json())
  .then(data => {
      if (data.status !== undefined) {
        if (data.status == 'token expired') { window.location.href = '../connexion.html?message=expired'; localStorage.removeItem('token');};
        if (data.status == 'token not found') window.location.href = '../connexion.html?message=connect'
        else window.location.href = '../connexion.html';
      } else {
        data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
        for (let i = 0; i < data.length; i++) {
          createContent(data[i]);
        }
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
  link.href = `article.html?id=${row.id}`;
  
  div.className = 'article';
  div.setAttribute("nb", row.id);
  if (row.img != ''){
    img.src = row.img;
  }
  else {
    img.src = '../image/news/news1.png';
  }
  div3.className = 'corps';
  title.innerHTML = row.title;
  let categ = getCategory(row.category);
  date.innerHTML = row.date + " - " + categ;
  if (row.content.includes('<img')){
    let contentful = row.content.replace(/<img([^>]*)>/gi, "")
    content.innerHTML = contentful
  } else {
    content.innerHTML = row.content;
  }
  
  content.className = 'content-article'
  div4.className = 'tools';
  figure.className = 'visib'
  figcaption.textContent = row.visibility;
  if (row.visibility == "private"){
    img2.src = "../image/icon/no_eye.png";
  }
  else if (row.visibility == "public"){
    img2.src = "../image/icon/eye.png";
  }
  else{
    img2.src = "../image/icon/eye.png";
  }

  img2.className = 'visibility';
  edit.textContent = 'Modifier';
  edit.className = 'edition'
  remove.textContent = 'Supprimer';
  remove.className = 'remove';
  remove.href = 'article.html';

  //link.appendChild(div);
  div.appendChild(div2);
  link.appendChild(div3);
  div.appendChild(link);
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
      pop();
      document.querySelector('dialog').showModal();
      document.querySelector('#yes').addEventListener('click', ()=>{
        fetch(`https://univership.herokuapp.com/article/delete/${art.getAttribute("nb")}`, {
          method: "DELETE",
          headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        })
        art.remove();
        document.querySelector('dialog').close();
      });
      document.querySelector('#no').addEventListener('click', ()=>{
        document.querySelector('dialog').close();
      });
    })
  }
}

function pop() {
  const dial = document.createElement('dialog');
  const accept = document.createElement('button');
  const cancel = document.createElement('button');
  dial.innerHTML = "Voulez-vous vraiment supprimer cet article ?"
  accept.innerHTML = "Supprimer";
  cancel.innerHTML = "Annuler";
  accept.id = "yes";
  cancel.id = "no";
  dial.appendChild(accept);
  dial.appendChild(cancel);
  document.querySelector('main').appendChild(dial);
}

function edit() {
  const arEdit = document.querySelectorAll('.edition');
  for (let i = 0; i < arEdit.length; i++) {
    arEdit[i].addEventListener('click', () => {
      const art = arEdit[i].parentElement.parentElement.parentElement.getAttribute("nb");
      window.location.href = `article.html?id=${art}`;
    })
  }
}


function getCategory(data) {
  switch (data) {
    case 'maj':
      return 'Mise à Jour';
    case 'encours':
      return 'En cours de développement';
    case 'news':
      return 'News';
    case 'maintenance':
      return 'Maintenance';
    default:
      return 'Mise à Jour';
  }
}