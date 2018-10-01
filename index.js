/////CONFIGURATIONS////

const express = require('express');
const jsonfile = require('jsonfile');
const FILE = 'todo.json'

//init express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

 // this tells express where to look for the view files
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

 // Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));


//////ROUTES///////

//create todo path
app.get('/new', (request, response) => {
     response.render('new');
});

app.post('/newlist', (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    
  })



app.listen(3000, () => console.log('~~~ Listening to port 3000 ~~~'));
