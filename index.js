const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 80;
const FILE = 'data.json';

// REACT VIEW ENGINE
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// EXPRESS REQUEST BODY PARSING
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(methodOverride('_method'));

// EXPRESS ROUTES

// NEW TASK INPUT
app.get('/tasks/new', (req, res) => {
  res.render('add_task');
});

app.put('/tasks/:id', (req, res) => {
  jsonfile.readFile(FILE, (readErr, obj) => {
    if (readErr) return console.error(readErr);
    const list = obj.tasks;
    const param = req.params.id;
    // console.log(param);
    return list.forEach((element) => {
      const updated = element;
      if (element.id.toString() === param) {
        updated.complete = true;
        jsonfile.writeFile(FILE, obj, (writeErr) => {
          if (writeErr) console.error(writeErr);
          res.redirect('/tasks');
        });
      }
    });
  });
});

app.delete('/tasks/:id', (req, res) => {
  jsonfile.readFile(FILE, (readErr, obj) => {
    if (readErr) return console.error(readErr);
    const list = obj.tasks;
    const param = req.params.id;
    // console.log(param);
    return list.forEach((element) => {
      const updated = element;
      if (element.id.toString() === param) {
        updated.hidden = true;
        jsonfile.writeFile(FILE, obj, (writeErr) => {
          if (writeErr) console.error(writeErr);
          res.redirect('/tasks');
        });
      }
    });
  });
});

//  NEW TASK WRITE
app.post('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (readErr, obj) => {
    if (readErr) return console.error(readErr);
    const list = obj.tasks;
    const param = req.body.task;
    const currentDate = new Date().toLocaleString();
    const newTask = {
      id: list.length + 1,
      time: currentDate,
      value: param,
      complete: false,
      hidden: false,
    };
    list.push(newTask);
    return jsonfile.writeFile(FILE, obj, (writeErr) => {
      if (writeErr) console.error(writeErr);
      return res.render('post_task', { task: param });
    });
  });
});

app.get('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (readErr, obj) => {
    if (readErr) return console.error(readErr);
    return res.render('tasks', { tasks: obj.tasks });
  });
});

// MAIN ROUTER
app.get('/', (req, res) => {
  jsonfile.readFile(FILE, (readErr, obj) => {
    if (readErr) return console.error(readErr);
    if (obj.tasks.length === 0) return res.redirect('/tasks/new');
    return res.redirect('/tasks');
  });
});

// INIT APP
app.listen(PORT);
