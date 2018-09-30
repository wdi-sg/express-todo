
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

app.get('/:id', (request, response)=>{
	response.send("something");
})

//home page
app.get('/', (request, response)=>{
	response.render('home', { items: todolist["lists"] })
	//console.log(itemsArray)
})

app.listen(3000);