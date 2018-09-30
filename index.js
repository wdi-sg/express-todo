
const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');

const app = express();
// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');
// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.use(methodOverride('_method'));

// var todolist = {
// 	lists: [
// 	{
// 	    "itemid": 1,
// 	    "item": "eat",
// 	    "location": "home",
// 	    "timerecorded": "14:00",
// 	    "due": "12-01-19"
// 	},
// 	{
// 	    "itemid": 2,
// 	    "item": "work",
// 	    "location": "work",
// 	    "timerecorded": "15:00",
// 	    "due": "12-02-19",
// 	}
// 	]
// };

var itemsArray;

const FILE = 'todolist.json';

jsonfile.readFile(FILE, (err, obj) => {
	itemsArray = obj["itemslist"];
})

//home page
app.get('/home', (request, response)=>{
	jsonfile.readFile(FILE, (err, obj) => {
		var itemArray = obj["itemslist"];

		//response handler needs to be inside the json.readfile otherwise response handler will run 
		response.render('home', { items: itemArray })
	})
	//console.log(itemsArray)
})

app.put('/:id', (request, response)=>{
	console.log(request.body);
	var newObj = request.body;
	newObj.itemid = parseInt(newObj.itemid);
	jsonfile.readFile(FILE, (err, obj)=>{
		var itemArray = obj["itemslist"];
		for (let i=0;i<itemArray.length;i++){
			if(itemArray[i].itemid==newObj.itemid){
				itemArray[i] = newObj;

				jsonfile.writeFile(FILE, obj, function(err){
					if(err) console.log("error: "+err);
					response.send("edited");
				})
				break;
			}
		}

	})
})

//edit item page
app.get('/:id/edit', (request,response)=>{
	console.log(request.params.id);
	var id = request.params.id;
	jsonfile.readFile(FILE, (err, obj) => {
		var itemArray = obj["itemslist"];
	
		for (let i=0;i<itemArray.length;i++){
			if(itemArray[i].itemid == id){
				var newObj = itemArray[i];
				response.render('edititems', newObj);
			}
		}
	})
})

//add new item page
app.get('/new', (request, response)=>{
	response.render('newitems')
})

app.post('/home', (request,response)=>{
	console.log(request.body);
	jsonfile.readFile(FILE, (err, obj)=>{
		const currentDate = new Date().toLocaleString();
		var newEntry = request.body;
		newEntry["timerecorded"]=currentDate;
		newEntry.itemid = parseInt(newEntry.itemid);
		var itemArray = obj['itemslist'];
		itemArray.push(newEntry);
		jsonfile.writeFile(FILE, obj, function(err){
			if(err) console.log("Error: "+err);
			response.redirect('/home');
		})
	})
})

app.listen(3000, () => console.log("tuning in to port 3000"));