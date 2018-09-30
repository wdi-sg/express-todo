const express = require('express');
const app = express();
const jsonfile = require('jsonfile');
const reactEngine = require('express-react-views').createEngine();
const methodOverride = require('method-override')

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.use(methodOverride('_method'));
app.engine('jsx', reactEngine);

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'))


//========== Configuration setup ==========//

const file = 'data.json';
var listName

// home : create or view to do lists
app.get('/', (request, response) => {
    response.render('home');
});

// create : new to do lists (renders out a form)
app.get('/new', (request, response) => {
    response.render('list-new')
});

// view: all tasks
app.get('/lists', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {

        //console.log(obj.todolist[0].task)
        response.render('list-all', { tasks: Object.values(obj.todolist) })
    });
});

app.get('/lists/:id/edit', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        let requestedList = request.params.id

        for (var i = 0; i < obj.todolist.length; i++) {
            if (parseInt(requestedList) === parseInt(obj.todolist[i].id)) {
                var foundListIndex = i;
                var foundList = obj.todolist[i]
            }
        }

        if (foundList) {
            //console.log('Found:', foundList);
            response.render('list-edit', { task: foundList })
        } else {
            response.send('not ok')
        }
    });
})


// submitted form
app.post('/lists', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        var currentDate = new Date();

        var date = currentDate.getDate();
        var month = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year = currentDate.getFullYear();

        var dateString = date + "-" + (month + 1) + "-" + year;
        var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

        if (request.body.task === '') {
            response.redirect('/new');

        } else {

            let newTask = {
                id: obj.todolist.length + 1,
                task: request.body.task,
                complete: false,
                dateCreated: date
            };

            obj['todolist'].push(newTask)
            response.render('list-all', {
                tasks: Object.values(obj.todolist)
            });

            jsonfile.writeFile(file, obj, function(err) {
                if (err) console.log('Error:', err)
            });
        }
    });
})


// edit form
app.put('/lists/:id', (request, response) => {
    jsonfile.readFile(file, (err, obj) => {
        let requestedList = request.params.id

        for (var i = 0; i < obj.todolist.length; i++) {
            if (parseInt(requestedList) === parseInt(obj.todolist[i].id)) {
                var foundListIndex = i;
                var foundList = obj.todolist[i]
            }
        }
        if (foundList) {
            //console.log('Found:', foundList);
            console.log(request.body.task);
            foundList.task = request.body.task;


            response.redirect('/lists')
            //response.render('list-all', { tasks: Object.values(obj.todolist) })
            jsonfile.writeFile(file, obj, function(err) {
                if (err) console.log("ERROR:", err)


            });
            //}
        } else {
            response.send('not ok')
        }
    });

});

app.put('/lists/:id/done', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        let requestedList = request.params.id

        for (var i = 0; i < obj.todolist.length; i++) {
            if (parseInt(requestedList) === parseInt(obj.todolist[i].id)) {
                var foundListIndex = i;
                var foundList = obj.todolist[i]
            }
        }
        if (foundList) {
            //console.log('Found:', foundList);
            var currentDate = new Date();

            var date = currentDate.getDate();
            var month = currentDate.getMonth(); //Be careful! January is 0 not 1
            var year = currentDate.getFullYear();

            var dateString = date + "-" + (month + 1) + "-" + year;
            var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
            //strike out
            foundList.complete = true;
            foundList.time = date

            console.log(foundList.complete)
            response.redirect('/lists')

            //response.render('list-all', { tasks: Object.values(obj.todolist) })
            jsonfile.writeFile(file, obj, function(err) {
                if (err) console.log("ERROR:", err)


            });
            //}
        } else {
            response.send('not ok')
        }
    });

});

app.delete('/lists/:id', (request, response) => {

    jsonfile.readFile(file, (err, obj) => {
        let requestedList = request.params.id

        for (var i = 0; i < obj.todolist.length; i++) {
            if (parseInt(requestedList) === parseInt(obj.todolist[i].id)) {
                var foundListIndex = i;
                var foundList = obj.todolist[i]
            }
        }
        if (foundList) {

            obj.todolist.splice(foundListIndex, 1);
            console.log(obj.todolist)

            response.redirect('/lists')

            jsonfile.writeFile(file, obj, function(err) {
                if (err) console.log("ERROR:", err)


            });

        } else {
            response.send('not ok')
        }
    });

})



// successfully add a new list
// app.post('/new/list', (request, response) => {

//     jsonfile.readFile(file, (err, obj) => {
//         listName = request.body.name
//         var listArr = []
//         var toPushArr = []

//         // Looping through all keys of the object
//         for (var i in request.body) {
//             var valueArr = []
//             var keyValue = request.body[i];
//             valueArr.push(keyValue);
//             listArr.push(valueArr);
//         }

//         // update array without list name
//         for (var i = 1; i < listArr.length; i++) {
//             toPushArr.push(listArr[i])
//         }

//         // write object to json file
//         obj[listName] = toPushArr

//         response.send('successfully created new list')
//         jsonfile.writeFile(file, obj, function(err) {
//             if (err) console.log('Error:', err)

//         });
//     });
// });

// // to edit to do list's items
// app.get('/list/:name/edit', (request, response) => {
//     jsonfile.readFile(file, (err, obj) => {
//         let requestedList = request.params.name

//         console.log(Object.keys(obj)[1])

//         for (let i = 0; i < Object.keys(obj).length; i++) {
//             if (Object.keys(obj)[i] === requestedList) {
//                 var foundListIndex = i
//                 var foundList = Object.keys(obj)[i]
//             }
//         }

//         if (foundList) {
//             console.log("Found:", Object.values(foundList)[foundListIndex]);
//             //obj.foundList[0] = request.body;

//             response.render('list-edit', { listname: Object.values(foundList) });

//         } else {
//             response.send('no such list');
//         }
//     });
// })

// // update list with edits
// app.put('/list/:name', (request, response) => {

//     jsonfile.readFile(file, (err, obj) => {
//         let requestedList = request.params.name

//         console.log(Object.keys(obj)[1])

//         for (let i = 0; i < Object.keys(obj).length; i++) {
//             if (Object.keys(obj)[i] === requestedList) {
//                 var foundListIndex = i
//                 var foundList = Object.keys(obj)[i]
//             }
//         }

//         if (foundList) {
//             console.log("Found:", foundList);
//             obj.foundList[0] = request.body;


//             jsonfile.writeFile(file, obj, function(err) {
//                 if (err) console.log('Error:', err)
//                 response.send('all-lists')
//             });
//         } else {
//             response.send('no such list');
//         }
//     });
// })

//========== Listen to port ==========//

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));