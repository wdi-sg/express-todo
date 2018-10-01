const express = require('express')

const jsonfile = require('jsonfile');

const app = express();

const reactEngine = require('express-react-views').createEngine();

const FILE = 'list.json';

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// this line below, sets a layout look to your express project
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/', (request, response) => {
  response.send("yay");
});

 /**
 * ===================================
 * Create New To Do
 * ===================================
 */

 app.get('/todo/:action', (req, res) => {

   var add = [];

   add.push(req.params.action);

 res.render('home', add);

});

 app.post('/todo/add/results', (req, res) => {

      var newItem = req.body;

     console.log("new item:", newItem);

     jsonfile.readFile (file, function(err, obj) {

         let listObj = obj.list;

        listObj.push(newItem);

         jsonfile.writeFile(file, obj, function (err) {

             if (err) console.log("ERROR:",err);

          });

     res.render('results', obj);

     });

 });

// app.get('/users', (req, res) => {
//     console.log(users);
//     for( var i=0; i< users.length; i++){
//         var allUsers = users[i];
//     }
//   // running this will let express to run home.handlebars file in your views folder
//   res.render('home', { users : allUsers });
// })

app.listen(3000);