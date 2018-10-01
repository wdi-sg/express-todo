const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override')

const app = express();
const FILE = 'data.json';
const taskData = require('./data.json');

app.use(methodOverride('_method'));
app.use(express.static('public'));



//CONFIG & SET UP

 // this line below, sets a layout look to your express project
 const reactEngine = require('express-react-views').createEngine();
 app.engine('jsx', reactEngine);

 // this tells express where to look for the view files
 app.set('views', __dirname + '/views');

 // this line sets react to be the default view engine
 app.set('view engine', 'jsx');

// Init express app

//let app use module
app.use(express.json());
 app.use(express.urlencoded({
   extended: true
 }));


app.get('/', (request, response) => {
   response.render("ToDoList.jsx");
});

const generateForm = () => {
    let form = "<html>";
    form += '<head>';
    form += '<title> ToDo App </title>';
    form += '</head>';
    form += "<body";
    form += '<div class="container"><h2> A Simple ToDo List App </h2>';
    form += '</div>';
    form += '<form method="POST" action="/addtask">';
    form += '<input type="text" name="newtask" placeholder="add new task">';
    form += '<button>Add task</button>';
    form += "</form>";
    form += '<h2> Added Task </h2>';
    //illustrating the list on the form
    taskData['data'].filter(t => !t.completed).forEach(task => {
        form += '<a href=/complete-task/' + task.id + '> Complete</a>' + ' | ' +
                task.id + ': ' + task.name + ' | ' +
                '<a href=/remove-task/' + task.id + '> Remove</a><br/>'
    });
    form += '<h2> Completed task </h2>';
    taskData['data'].filter(t => t.completed).forEach(task => {
        form += '<a href=/uncomplete-task/' + task.id + '>Uncomplete</a>' + ' | ' +
                task.id + ': ' + task.name + ' | ' +
                '<a href=/remove-task/' + task.id + '> Remove</a><br/>'
    });
    form += '</div>';
    form += "</body>";
    form += "</html>";
        return form;
}

//generating localhost:3000 form
app.get('/addtask', (request, response) => {
    response.send(generateForm());
});

// var task = ["buy socks", "practise with nodejs"];
app.post('/addtask', (request, response) => {
    jsonfile.readFile(FILE, (err, tasks) => {
        if (err) {
            console.log("Error", err)
            response.send('err');
        } else {
            // appending a new list to the task
            const newTask = {
                id: tasks.data.length + 1,
                name: request.body.newtask,
                completed: false
            }
            tasks['data'].push(newTask)
            //saving request.body
            jsonfile.writeFile(FILE, tasks, function(err) {
                if (err) {
                    console.log("Error", err)
                    res.send(err);
                }
                response.send('Task added successfully!!!');
            });
        }
    });
});

app.get('/remove-task/:taskId', (request, response) => {
    jsonfile.readFile(FILE, (err, tasks) => {
        if (err) {
            console.log("Error", err)
            response.send('err');
        } else {
            tasks = tasks['data'].filter(task => task.id != request.params.taskId);

            //saving request.body
            jsonfile.writeFile(FILE, {data: tasks}, function(err) {
                if (err) {
                    console.log("Error", err)
                    res.send(err);
                }
                response.send('Task removed successfully!!!');
            });
        }
    });
});

app.get('/complete-task/:taskId', (request, response) => {
    jsonfile.readFile(FILE, (err, tasks) => {
        if (err) {
            console.log("Error", err)
            response.send('err');
        } else {
            const task = tasks['data'].find(task => task.id == request.params.taskId)
            task.completed = true
            //console.log(''request.body)
            //saving request.body
            jsonfile.writeFile(FILE, tasks, function(err) {
                if (err) {
                    console.log("Error", err)
                    res.send(err);
                }
                response.send('Task completed successfully!!!');
            });
        }
    });
});

app.get('/uncomplete-task/:taskId', (request, response) => {
    jsonfile.readFile(FILE, (err, tasks) => {
        if (err) {
            console.log("Error", err)
            response.send('err');
        } else {
            const task = tasks['data'].find(task => task.id == request.params.taskId)
            task.completed = false
            //console.log(''request.body)
            //saving request.body
            jsonfile.writeFile(FILE, tasks, function(err) {
                if (err) {
                    console.log("Error", err)
                    res.send(err);
                }
                response.send('Task uncompleted successfully!!!');
            });
        }
    });
})

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));