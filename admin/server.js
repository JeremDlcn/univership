const sq = require('sqlite3').verbose();	//module pour utiliser sqlite
const express = require('express');			//module pour faire une API
const cors = require('cors');				//module pour aider dans la gestion des requêtes
const app = express();

app.use(cors());
app.use(express.json());	//on va récupérer les requête en json




// Connexion à la base de données
let db = new sq.Database("./database.db", err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});






app.get(':id', (req, res) =>{
	let index = Number(req.params.id);
	db.each("SELECT * FROM name WHERE id= ?", [index] , (err,row)=>{
		if (err) {
			console.log(err);
		} else {
			res.json(row.nom);
		}
	});
})





//création d'un article
app.post('/create/:id', (req, res)=> {
	db.run("INSERT INTO article VALUES(?,?,?,?,?,?,?)", [index, "title", "category", "content", "date", "img", "public"]);

	res.send('ok');
});

//Modification d'un article
app.post('/edit/:id', (req, res)=> {
	const index = Number(req.params.id)+1;
	const corps = res
	db.run("UPDATE article SET title = ?, category = ?, content = ?, date = ?, img = ?, visibility = ? WHERE id = ?", [corps.title, corps.category, corps.content, corps.date, corps.img, corps.visibility, index]);

	res.send('ok');
});




app.listen(3000, ()=> console.log('Server started! 🎉'));