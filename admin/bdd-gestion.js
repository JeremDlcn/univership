let sq = require('sqlite3').verbose();

let db = new sq.Database("./database.db", err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});



// create();

// for (let i = 1; i <= 12; i++){
// 	insert(i);
// }

view();

function create() {
	db.run("CREATE TABLE article(id INTEGER PRIMARY KEY NOT NULL, title TEXT, category TEXT, content TEXT, date TEXT, img TEXT, visibility TEXT)");	
}


function insert(index) {
	db.run("INSERT INTO article (title, category, content, date, img, visibility) VALUES(?,?,?,?,?,?)", ["title", "category", "content", "date", "img", "public"]);
}


function view() {
	db.each("SELECT * FROM article", (err,row)=>{
		if (err) {
			console.log(err);
		} else {
			console.log(row);
		}
	})
}