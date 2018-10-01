// >>>>-------
// -----------
// EXPRESS TO DO LIST APP
// -----------
// >>>>-------


// -----------
// Configuration setup - Express, JSON, React engine
// including methodoverride and urlencoder
// >>>>-------

const express = require('express');
 const app = express();

 const jsonfile = require('jsonfile');
 const FILE = 'todo.json';

 const methodOverride = require('method-override');
 app.use(methodOverride('_method'));

 app.use(express.json());
 app.use(express.urlencoded({
     extended: true,
 }));

 // code here sets a layout look to your express project
 const reactEngine = require('express-react-views').createEngine();
 app.engine('jsx', reactEngine);

 // code here tells express where to look for the view files
 app.set('views', __dirname + '/views');

 // this line sets react to be the default view engine
 app.set('view engine', 'jsx');

 //Render html form
 app.get('/', (request, response) => {
     //render the todo.jsx file
         response.render('toDoList');
 })


// -----------
//read json file, then update json file after user input
// >>>>-------


 app.post('/todolist', function(request, response) {


     console.log("This works")

     //Further part 1: Show time when list done
     const currentDate = new Date().toLocaleString();
     var errorMessage = false;
     // var idArray = [];
     // var idNumber = 1 + parseInt(idArray.length);
     var taskObject = {
         id: '',
         taskname: request.body.task,
         timeadded: currentDate,
         timecompleted: ''
     };


     jsonfile.readFile(FILE, (error, object) => {
         var array = object.task;

         //
         if (taskObject.taskname == '') {
             var errorMessage = true;
         } else {
             array.push(taskObject);
         }

         jsonfile.writeFile(FILE, object, (err) => {
             console.error(err);
         })
     })
     response.redirect("/todolist");
 })

 app.get('/', (request, response) => {

     console.log("Render works")

     jsonfile.readFile(FILE, (error, object) => {
     var theList = object.task;

     response.render('to-do-list', theList);
     })
 })




 app.listen(3005, () => console.log('~~~ Tuning in to the waves of port 3005 ~~~'));





















