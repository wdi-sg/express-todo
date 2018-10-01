console.log("It is working.");

/* ================================================================
===================================================================
===================================================================
                            Declarations
===================================================================
===================================================================
================================================================ */

// requiring modules
const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override')

// setting up a new express app
const app = express();

// assign db to FILE variable
const FILE = 'items.json';

// set up method-override for PUT and DELETE forms
app.use(methodOverride('_method'));

// express middlewares for parsing incoming data (such as request.body)
// include other code for setting express up
// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  // note that we set an attribute extended to true when telling our app to use the body parser. This attribute determines which library is used to parse data.
  extended: true
}));

// serve static files @ website folder
app.use(express.static('website'));

//React views
// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

/* ================================================================
===================================================================
===================================================================
                          Route handling
===================================================================
===================================================================
================================================================ */
app.post('/shoppinglist', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if(err){console.log('error:', err);}
    //obj{
    //  "items": [{"id": 1 .....}]
    //}

    //const obj.items = [];
    const itemList = obj.items;

    // *******You need these to prevent overwrite ↓
    const newItem = {
        id: itemList.length + 1,
        description: req.body.description,
        brand: req.body.brand,
        quantity: parseInt(req.body.quantity)
    };

    console.log("req.body: ", newItem);
    // *******You need these to prevent overwrite ↑
    //obj.items.push(newItem);
    obj['items'].push(newItem);

    //obj writes the whole thing and newItem only the item
    jsonfile.writeFile(FILE, obj, (err) => {
      if(err){
        console.log('error:', err);
      }
      //res.render('displayitem', items);
      console.log("write:",itemList);
      console.log("write:",obj);
    //res.send({ items: [newItem] });
    });
  });
});

app.get('/shoppinglist/new', (req, res) => {
  // rendering a template form
  res.render('additem');
});

app.get('/shoppinglist', (req, res) => {
  console.log('This is my shopping list.')
  jsonfile.readFile(FILE, (err, obj) => {
    if(err){
      console.log('error:', err);
    }
    res.status(200);
    // if(itemList.length === 0){
    //   console.log("Shopping list empty");
      //res.send("Shopping list empty, add something");
      //how do i redirect?
    //}
    res.send(obj);
  });
});

/* ================================================================
===================================================================
===================================================================
                  listen for incoming requests
===================================================================
===================================================================
================================================================ */
app.listen(3000, () => console.log('~~~ listening at port 3000 ~~~'));
