// récupération de l'id de l'article
const urlID = location.search.split('id=')[1];


// récupération des informations de article
fetch(`https://univership.herokuapp.com/article/${urlID}`, {
  method: "GET"
})
  .then(r => r.json())
  .then(data => {
      setInfos(data)
  });


  function setInfos(data) {
    let categ = getCategory(data.category);
    document.querySelector('#title').innerHTML = data.title;
    document.querySelector('#category-value').innerHTML = categ;
    document.querySelector('#date').innerHTML = data.date;
    document.querySelector('#content').innerHTML = data.content;
    
    // image de l'article
    if (data.img == ''){
      document.querySelector('#img').src = '../image/spot.png'
    }
    else {
      document.querySelector('#img').src = data.img;
    }
  };

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