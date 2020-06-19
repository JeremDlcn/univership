// récupération de l'id de l'article
const urlID = location.search.split('id=')[1];
let normalContent;

// redirigé si on appel pas d'article
if (urlID === undefined) {
    window.location.href = "list-article.html"
}

//init tinymce
let contentmce = {
    selector: ".content",
    plugins: [ 'quickbars' ],
    toolbar: false,
    menubar: false,
    inline: true
};

// récupération des informations de article
fetch(`https://univership.herokuapp.com/article/${urlID}`, {
  method: "GET"
})
  .then(r => r.json())
  .then(data => {
      normalContent = data.content;
      setInfos(data)
  });


  function setInfos(data) {
    document.querySelector('#title').innerHTML = data.title;
    document.querySelector('#edit-title').value = data.title;
    document.querySelector('#category-value').innerHTML = data.category;
    document.querySelector('#edit-category').value = data.category;
    document.querySelector('#date').innerHTML = data.date;
    document.querySelector('#content').innerHTML = data.content;
    defineVisibility(data.visibility);
    
    // image de l'article
    if (data.img == ''){
      document.querySelector('#img').src = '../image/spot.png'
    }
    else {
      document.querySelector('#img').src = data.img;
    }
  };

//functions to edit mode
function disableEditor() {
  tinymce.activeEditor.remove();
  document.querySelector('#content').removeAttribute("contenteditable");
  document.querySelector('.edit-button').style.display = 'block';
  document.querySelector('.save-button').style.display = 'none';
  document.querySelector('.view-button').style.display = 'none';

  //edit inputs
  document.querySelector('#category').style.display = 'block';
  document.querySelector('#visibility').style.display = 'block';
  document.querySelector('#title').style.display = 'block';
  document.querySelector('#edit-title').style.display = 'none';
  document.querySelector('#edit-category').style.display = 'none';
  document.querySelector('#edit-visibility').style.display = 'none';
  document.querySelector('label').style.display = 'none';
  document.querySelector('label:last-of-type').style.display = 'none';
}

function enableEditor() {
  document.querySelector('#category').style.display = 'none';
  document.querySelector('#visibility').style.display = 'none';
  document.querySelector('#title').style.display = 'none';
  document.querySelector('#edit-title').style.display = 'block';
  document.querySelector('#edit-category').style.display = 'initial';
  document.querySelector('#edit-visibility').style.display = 'initial';
  document.querySelector('label').style.display = 'block';
  document.querySelector('label:last-of-type').style.display = 'block';
}

function defineVisibility(data) {
    // visibilité de l'article
    document.querySelector('.visibility-value').innerHTML = data;
    document.querySelector('#edit-visibility').value = data;
    if (data === 'public') {
      document.querySelector('.img-public').style.display = 'block';
      document.querySelector('.img-private').style.display = 'none';
    } else if (data === 'private') {
      document.querySelector('.img-private').style.display = 'block';
      document.querySelector('.img-public').style.display = 'none';

    }
}






// edit mode
document.querySelector('.edit-button').addEventListener('click', ()=>{
  tinymce.init(contentmce);
  
  document.querySelector('#content').setAttribute("contenteditable", "true");
  document.querySelector('.edit-button').style.display = 'none';
  document.querySelector('.save-button').style.display = 'block';
  document.querySelector('.view-button').style.display = 'block';
  enableEditor();
});

// return to view mode
document.querySelector('.view-button').addEventListener('click', ()=>{
  disableEditor();
  document.querySelector('#content').innerHTML = normalContent;
});


// save changes
document.querySelector('.save-button').addEventListener('click', ()=>{
  let catC = document.querySelector('#edit-category');
  let cat = catC.options[catC.selectedIndex].text;
  let visib = document.querySelector('#edit-visibility').value;
  let cont = tinymce.activeEditor.getContent();
  disableEditor();
  defineVisibility(visib);
  document.querySelector('#title').innerHTML = document.querySelector('#edit-title').value;
  document.querySelector('#category-value').innerHTML = cat;
  document.querySelector('#content').innerHTML = cont;
  edit();
});



function edit() { 
      let title = document.querySelector('#edit-title').value
      let category = document.querySelector('#category-value').innerHTML;
      let content = document.querySelector('#content').innerHTML;
      let img = document.querySelector('#img').src;
      let visibility = document.querySelector('.visibility-value').innerHTML;

      //envoyer les informations vers le fetch d'édition
      fetch(`https://univership.herokuapp.com/edit/${urlID}`,{
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              title: title,
              category: category,
              content: content,
              img: img,
              visibility: visibility
          })
      })
}