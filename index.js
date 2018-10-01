/**
 * ===================================
 * Configurations and set up
 * ===================================
 */
const express = require('express');
const jsonfile = require('jsonfile');

const FILE = 'todo.json'
// Init express app
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

/**
 * ===================================
 * Routes
 * ===================================
 */

//Create new to-do form path
app.get('/new', (request, response) => {
     response.render('new');
});

app.post('/newlist', (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    var newList = {
     "id": parseInt(request.body.num),
     "num": request.body.num,
     "task": request.body.task
   }
   obj.list.push(newList);
   var newobj = obj
   jsonfile.writeFile('data.json', newobj, (err) => {
     response.render('newlist', {newList: newList});
     console.log(newList);
   });
 });
});

//Read to-do list
app.get('/home', (request, response) => {
   // get json from specified file
  jsonfile.readFile(FILE, (err, obj) => {
    var list = obj.list;
    response.render('home', {list: list});
  });
});

//Update to-do list
app.put('/:id/update', (request, response) => {
  jsonfile.readFile("data.json", (err, obj) => {

    let lists = obj.list
    let listsId = parseInt(request.params['id']) - 1;
     // handle the form input data
    let formData = request.body;

    for (let keys in formData) {
      lists[listsId][keys] = formData[keys];
    };
     var updatedList = obj;
     jsonfile.writeFile("data.json", updatedList, (err) => {
       response.render('update');
     });
   });
});


//Delete to-do list
app.get('/:id/delete', (request, response) => {
  jsonfile.readFile("data.json", (err, obj) => {
  let inputId = request.params.id;
   let list = obj.list.find((currentList) => {
    return currentList.id === parseInt(inputId);
  });
   if (list === undefined) {
    // send 404 back
    response.status(404).send("not found");
  } else {
    response.render('delete', {list: list});
    }
  });
});

app.delete('/:id/delete-confirm', (request, response) => {
  response.render('delete-confirm');
});

//Catch all other paths
app.all('*', (request, response) => {
  response.status(404).send("not found");
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
