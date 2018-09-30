const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');
const reactEngine = require('express-react-views').createEngine();

const PORT = 3000;
const FILE = 'todo.json';

const getDateTime = () => {
  const date = new Date();

  const year = date.getFullYear();

  let month = date.getMonth() + 1;
  month = (month < 10 ? '0' : '') + month;

  let day = date.getDate();
  day = (day < 10 ? '0' : '') + day;

  let hour = date.getHours();
  hour = (hour < 10 ? '0' : '') + hour;

  let min = date.getMinutes();
  min = (min < 10 ? '0' : '') + min;

  let sec = date.getSeconds();
  sec = (sec < 10 ? '0' : '') + sec;

  return year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec;
}

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

// ROUTE: TASKS

app.get('/tasks/:id/edit', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const taskId = parseInt(req.params.id);
    const task = obj.tasks.find(task => task.id === taskId);
    const categories = obj.categories;
    res.render('TaskEdit', { task: task, categories: categories });
  });
});

app.get('/tasks/new', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    res.render('TaskNew', { categories: obj.categories });
  });
});

app.get('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const sortby = req.query.sortby;
    if (sortby) {
      if (sortby === 'category') {
        obj.tasks.sort((a, b) => a[sortby] - b[sortby]);
      } else {
        obj.tasks.sort((a, b) => a[sortby].localeCompare(b[sortby]));
      }
    }

    res.render('Tasks', obj);
  });
});

app.post('/tasks', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const newTask = {
      id: obj.tasks.length + 1,
      name: req.body.task.trim(),
      category: parseInt(req.body.category),
      status: 'active',
      timeAdded: getDateTime(),
      timeDone: 'null'
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
    task.name = req.body.task;
    task.category = parseInt(req.body.category);
    if (req.body.toggle) {
      task.timeDone = task.status === 'active' ? getDateTime() : 'null';
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

app.delete('/tasks/:id', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const taskId = parseInt(req.params.id);
    const taskIndex = obj.tasks.findIndex(task => task.id === taskId);
    obj.tasks.splice(taskIndex, 1);

    jsonfile.writeFile(FILE, obj, err => {
      if (err) {
        console.log(err);
      }

      res.redirect('/tasks');
    });
  });
});

// ROUTE: CATEGORIES

app.get('/categories/new', (req, res) => {
  res.render('CategoryNew');
});

app.get('/categories/:id/edit', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const categoryId = parseInt(req.params.id);
    const category = obj.categories.find(category => category.id === categoryId);
    res.render('CategoryEdit', { category: category });
  });
});

app.get('/categories', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    res.render('Categories', { categories: obj.categories });
  });
});

app.post('/categories', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const newCategory = {
      id: obj.categories.length + 1,
      name: req.body.category
    };

    obj.categories.push(newCategory);

    jsonfile.writeFile(FILE, obj, err => {
      if (err) {
        console.log(err);
      }

      res.redirect('/categories');
    });
  });
});

app.put('/categories/:id', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) {
      console.log(err);
    }

    const categoryId = parseInt(req.params.id);
    const category = obj.categories.find(category => category.id === categoryId);
    category.name = req.body.category;

    jsonfile.writeFile(FILE, obj, err => {
      if (err) {
        console.log(err);
      }

      res.redirect('/categories');
    });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
