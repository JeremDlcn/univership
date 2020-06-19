

// récupération des articles
fetch(`https://univership.herokuapp.com/`, {
  method: "GET"
})
  .then(r => r.json())
  .then(data => {
    data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
    let array = [];
    for (let i = 0; i < data.length; i++) {
      createContent(data[i]);
      if (i < 4) {
        array.push(data[i]);
      } 
    }
    frontContent(array);
  })


//Création de la liste d'articles
function createContent(data) {
  let link = document.createElement('a');
  let article = document.createElement('article');
    let div1 = document.createElement('div');
        let img = document.createElement('img');
    let div2 = document.createElement('div');
        let content = document.createElement('p');
        let div3 = document.createElement('div');
            let title = document.createElement('h2');
            let date = document.createElement('b');



  //lien vers l'article selon l'id
  link.href = `article.html?id=${data.id}`;
  if (data.img != ''){
    img.src = data.img;
  }
  else {
    img.src = '../image/news/news1.png';
  }
  title.innerHTML = data.title;
  date.innerHTML = data.date;
  if (data.content.includes('<img')){
    let contentful = data.content.replace(/<img([^>]*)>/gi, "")
    content.innerHTML = contentful
  } else {
    content.innerHTML = data.content;
  }
  

  div1.appendChild(img);
  article.appendChild(div1);
  div3.appendChild(title);
  div3.appendChild(date);
  div2.appendChild(div3);
  div2.appendChild(content);
  article.appendChild(div2);
  link.appendChild(article);

  document.querySelector('#list').appendChild(link);
}



function frontContent(array) {
    let link =  document.querySelectorAll('.front-link');
    let img =  document.querySelectorAll('.front-img');
    let title = document.querySelectorAll('.front-title');
    let content = document.querySelectorAll('.front-content');
    for (let i = 0; i < array.length; i++){
        link[i].href = `article.html?id=${array[i].id}`;
        img[i].src = array[i].img;
        title[i].innerHTML = array[i].title;
        content[i].innerHTML = array[i].content;
    }    
}



