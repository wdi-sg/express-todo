// For request.body

const express = require('express');
const app = express();
const methodOverride = require('method-override');
const jsonfile = require('jsonfile');
// Convention to declare all your variables at the top of the file (good practice to use ./)
const TODO_FILE ='./todo1.json';

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Set up method-override for PUT and DELETE forms

app.use(methodOverride('_method'));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/new-todo', (request, response) => { // Step 2 // rendering the form view so that user can create the form
	response.render('new');
});

app.get('*', (request, response) => { // Step 1
	// response.send('it works');
	// rendering a home.jsx file or a template, response is just responding you back
	jsonfile.readFile(TODO_FILE, (error, object) => { //object- content inside the jsonfile
		if (error) 
		{
			response.send("OOPS!");
		} 
		else 
		{		
			response.render('home', object); // rendering the home page-> display todolist item, so must pass the object into the view so that we can display it
		}
	});
});

app.post('/create-todo', (request, response) => { // Step 3
	//console.log(request.body);
	//response.send('it works');
	// always first step in post request: READ THE CONTENT OF INCOMING POST REQUEST THAT IS INSIDE request.body
	const TO_DO = request.body; // {e.g.- title: "hello"}
	// step 2: DATABASE STEP-> CREATE, EDIT/UDPATE, DELETE
	// we want to create a new todo
	jsonfile.readFile(TODO_FILE, (error, object) => {
		object.todo.push(TO_DO);
		jsonfile.writeFile(TODO_FILE, object, (error) => {
			if (error) 
			{
				response.send('ERROR WRITING FILE');
			} else 
			{
				response.redirect('/'); // redirecting back to root path 
			}
		})
	})
})

app.put('/edit-todo/:id', function(request, response) {
    jsonfile.readFile(FILE, (error, object) => {
        let idNos = request.params.id;
        var arr = object.todo;
        for (i in arr) {
            if (arr[i].id.toString() == idNos.toString()) {
                arr[i].done = "true";
            }
        }
        jsonfile.writeFile(FILE, object, (err) => {
            console.error(err);
        })
    })
     response.redirect("/");
})

app.listen(3000, () => {console.log('')})

// see every item in your todo list (GET)


