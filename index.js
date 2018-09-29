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

//to allow the use of app.put and app.delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//To allow us to read and write on the jsonfile
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//To allow to link to style.css
app.use(express.static('public'));

//To make the json object have an array with the key todo at the start
jsonfile.readFile(FILE, (err, obj) => {

    obj['todo'] = [];

    jsonfile.writeFile(FILE, obj, (err) => {
        console.log(err);
    });
});

/* All the subsequent requests to the server =======
==================================================*/

//showing the form to create a new list
app.get('/new', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

       response.render('create', {list: obj['todo']});
    });

});

//Go to a page that allows user to delete a bucket
app.get('/delete', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        let allItems = obj['todo'];

        response.render('delete', {deleteItem: allItems});
    });
});

//redirect to homepage once performed the deleting of buckets
app.delete('/', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        let itemsToDelete = request.body.delete;

        let filter = obj['todo'].filter( element => {

            if (Array.isArray(itemsToDelete)) {

                return itemsToDelete.includes(element.title) === false;

            } else {

                return itemsToDelete !== element.title;
            }

        });

        obj['todo'] = filter;

        jsonfile.writeFile(FILE, obj, (err) => {

            console.log(err);
        });

        response.redirect('/');
    });
});

//Form to edit the current List
app.get('/:name/edit', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        let params = request.params.name;
        for (let i = 0; i < obj['todo'].length; i++) {

            if (obj['todo'][i].title === params) {

                var listToUpdate = obj['todo'][i];
            }
        }

        response.render('update', {list: listToUpdate, param: params});
    });
});

//Writing into the jsonfile to update the changes with the inputs from the edit form
app.put('/:name', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        let param = request.params.name;
        let editCurrent = request.body;
        var listToEdit;

        for (let i = 0; i < obj['todo'].length; i++) {

            if (obj['todo'][i].title === param ) {

                listToEdit = obj['todo'][i];
            }
        }

        if (editCurrent.done !== undefined) {

            listToEdit.toBeDone = listToEdit.toBeDone.map((element) => {

                if (editCurrent.done.includes(element)) {

                    return element + " \u2713";

                } else {

                    return element;
                }

            });

        }

        if (editCurrent.newtask !== '') {

            let newTask = editCurrent.newtask.split('.');
            newTask.forEach((element) => {
                listToEdit.toBeDone.push(element);
            });
        }


        jsonfile.writeFile(FILE, obj, (err) => {

            console.log(err);
        })

        response.redirect('/' + param);

    });

});

// Go to the page that shows the specific to-do list
app.get('/:name', (request, response) => {

    jsonfile.readFile(FILE, (err, obj) => {

        for (let i = 0; i < obj['todo'].length; i++) {

            if (obj['todo'][i].title === request.params.name) {

                var list = obj['todo'][i];
            }
        }

        response.render('list', {selectedList: list, param: request.params.name});

    });

});

//writing to the json object then redirect back to home with updated todo (Create a new bucket)
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

/* Listening to Port 3000 ==================================
==========================================================*/

const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, () => {console.log('~~Listening To Port 3000~~')} );