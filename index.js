const express = require('express');
const jsonfile = require('jsonfile');

const app = express();
const PORT = process.env.PORT || 8080;
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

// EXPRESS ROUTES

// NEW TASK INPUT
app.get('/tasks/new', (req, res) => {
  res.render('add_task');
});

//  NEW TASK WRITE
app.post('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (readErr, obj) => {
    if (readErr) return console.error(readErr);
    const payload = obj.tasks;
    const param = req.body.task;
    console.log(payload, param);
    payload.push(param);
    return jsonfile.writeFile(FILE, obj, (writeErr) => {
      if (writeErr) console.error(writeErr);
      return res.render('post_task', { task: param });
    });
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
