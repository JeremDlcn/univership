"use strict";

// récupération de l'id de l'article
var urlID = location.search.split('id=')[1]; // redirigé si on appel pas d'article

if (urlID === undefined) {
  window.location.href = "list-article.html";
} // récupération des informations de article


fetch("https://univership.herokuapp.com/article/".concat(urlID), {
  method: "GET"
}).then(function (r) {
  return r.json();
}).then(function (data) {
  console.log(data);
  setInfos(data);
});

function setInfos(data) {
  document.querySelector('#title').innerHTML = data.title;
  document.querySelector('#category-value').innerHTML = data.category;
  document.querySelector('#date').innerHTML = data.date;
  document.querySelector('#visibility').innerHTML = data.visibility;
  document.querySelector('#content').innerHTML = data.content;

  if (data.img == '') {
    document.querySelector('#img').src = 'image/spot.png';
  } else {
    document.querySelector('#img').src = data.img;
  }
}

;