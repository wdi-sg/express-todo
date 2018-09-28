const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');
const reactEngine = require('express-react-views').createEngine();

const PORT = 3000;
const FILE = 'todo.json';

app = express();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/tasks/new', (req, res) => {
  res.render('NewTask');
});

app.post('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const newTask = {
      id: obj.tasks.length + 1,
      name: req.body.name.trim()
    };

    obj.tasks.push(newTask);
    jsonfile.writeFile(FILE, obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });

  res.send('Task added');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
