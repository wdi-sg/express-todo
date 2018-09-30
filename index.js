
const express = require('express');
const jsonfile = require('jsonfile');
const app = express();
const file = 'todo.json'
app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/default', (req, res) => {

jsonfile.readFile(file, (readErr, obj) => {
    if (readErr) return console.error(readErr);
    return res.render('default');
  });
});



app.get('/addTask', (req, res) => {
    let html = "<html>";
    html += "<body>";
    html += '<form method="POST" action="/taskList">';
    html += "What should you do today? <br>" ;
    html += '<input type="text" name="date"> <br>';
    html += '<input type="text" name="whatToDo"> <br>';
    html += '<input type="text" name="deadline"> <br>';
    html += '<input type="submit" value="Submit">';
    html += "</form>";
    html += "</body>";
    html += "</html>";
res.send( html );
});

app.post('/taskList',(request, response) =>{

    let file = 'todo.json';

    const obj = request.body;

     jsonfile.readFile(file, (err, obj) => {

      console.log(obj);
      obj["list"].push(request.body);

    jsonfile.writeFile(file, obj, function (err) {
      if (err) console.log("ERROR:",err)

    console.log(request.body)
    response.send(obj.list);
    })
})
});

app.listen (3001);
