/* Standard Format To Start=======
==================================*/
const express = require('express');
const jsonfile = require('jsonfile');
const FILE = 'todo.json';

const app = express();

//sets a layout to look at the express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
//this tells express where to look for the view files
app.set('views', __dirname + '/views');
//this sets react to be the default view engine
app.set('view engine', 'jsx');

//to allow us to use app.put and app.delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//To make the json object have an array with the key todo at the start
jsonfile.readFile(FILE, (err, obj) => {

    obj['todo'] = [];

    jsonfile.writeFile(FILE, obj, (err) => {
        console.log(err);
    });
});

/* All the subsequent requests to the server =======
==================================================*/

app.get('update/:name', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        response.render('update', {});
    });
});


//showing the form to create a new list
app.get('/new', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

       response.render('create', {list: obj['todo']});
    });

});

//writing to the json object then redirect back to home with updated todo
app.post('/', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        obj['todo'].push(request.body);

        let listOfThings = obj['todo'][request.body.id]['toBeDone'].split('.');
        obj['todo'][request.body.id]['toBeDone'] = listOfThings;

        jsonfile.writeFile(FILE, obj, (err) => {
            console.log(err);
        });

        response.redirect('/');
    });
});


//Home Page - this is where all the to-do lists will show
app.get('/', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        if (obj['todo'].length === 0) {

            response.render('home');

        } else if (obj['todo'].length !== 0) {

            response.render('updatedhome', {list: obj['todo']});
        }
    });

});

const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, () => {console.log('~~Listening To Port 3000~~')} );