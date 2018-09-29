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
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/tasks/:id/edit', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const taskId = parseInt(req.params.id);
    const task = obj.tasks.find(task => task.id === taskId);
    res.render('TaskEdit', { task: task });
  });
});

app.get('/tasks/new', (req, res) => {
  res.render('NewTask');
});

app.get('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const todo = obj.tasks.filter(task => task.status === 'active');
    const done = obj.tasks.filter(task => task.status === 'done');
    res.render('Tasks', { todo: todo, done: done });
  });
});

app.post('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const newTask = {
      id: obj.tasks.length + 1,
      name: req.body.name.trim(),
      status: 'active'
    };

    obj.tasks.push(newTask);
    jsonfile.writeFile(FILE, obj, err => {
      if (err) {
        console.log(err);
      }
    });
  });

  res.redirect('/tasks');
});

app.put('/tasks/:id', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const taskId = parseInt(req.params.id);
    const task = obj.tasks.find(task => task.id === taskId);
    task.name = req.body.name;
    if (req.body.toggle) {
      task.status = task.status === 'active' ? 'done' : 'active';
    }

    jsonfile.writeFile(FILE, obj, err => {
      if (err) {
        console.log(err);
      }

      res.redirect('/tasks');
    });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
