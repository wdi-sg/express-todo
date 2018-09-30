const express = require("express");
const jsonfile = require("jsonfile");
const reactEngine = require("express-react-views").createEngine();
const methodOverride = require("method-override");
// Use Short Id Package to generate Unique ID for each post
const shortid = require("shortid");
const FILE = "./data.json";

/*
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(methodOverride("_method"));
// Telling Express Views to look into the public folder
app.use("/public", express.static("public"));

// this line below, sets a layout look to your express project
app.engine("jsx", reactEngine);

// this tells express where to look for the view files
app.set("views", __dirname + "/views");

// this line sets react to be the default view engine
app.set("view engine", "jsx");
/*
 * ===================================
 * Set Up Routes
 * ===================================
 */
app.get("/", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) return console.error(err);
    // Pass the object from json.readfile to Index.jsx on render
    res.render("index", obj);
  });
});

app.post("/posts", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) return console.error(err);
    const toDoListItems = obj.toDoItems;
    let newItem = {
      // Use the shortid package to generate unique id for every post.
      id: shortid.generate(),
      key: shortid.generate(),
      todo: req.body.newToDoItem,
      date: Intl.DateTimeFormat("en-GB").format(Date.now())
    };
    if (req.body.newToDoItem.length < 5) {
      res.render("indexerror", obj);
    } else {
      toDoListItems.push(newItem);
    }
    return jsonfile.writeFile(FILE, obj, err => {
      if (err) return console.error(err);
      res.render("newpost", { newItem: newItem.todo });
    });
  });
});
// Setting up a route to show the page to edit when click on edit button
app.get("/posts/:id/edit", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) return console.error(err);
    const toDoListItems = obj.toDoItems;
    for (i in toDoListItems) {
      if (toDoListItems[i].id === req.params.id) {
        let postToEdit = toDoListItems[i];
// render the editpost view with the post to edit as a prop.
        res.render("editpost", { post: postToEdit });
      }
    }
  });
});
// Action to take when submitting edit request
app.put("/posts/:id", (req, res) => {
    jsonfile.readFile(FILE, (err, obj) => {
        if (err) return console.error(err)
        const toDoListItems = obj.toDoItems;
// Loop through the array of items to find the matching one
        for (i in toDoListItems) {
            if (toDoListItems[i].id === req.params.id) {
// Set the "todo" field to the new edited one from the Request Body
                toDoListItems[i].todo = req.body.todo
// Create a new object with the new "todo" list
                newListObject = {
                    toDoItems: toDoListItems
                }
// Write the new object into the JSONfile
                jsonfile.writeFile(FILE, newListObject, err => {
                    if (err) return console.error(err)
                    res.render("editedpost")
                })
            }
        }
    })
})

app.delete("/posts/:id", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) return console.error(err);
    const toDoListObject = obj;
    // Filter the Entire Array of Posts and return all Posts not matching with the delete post ID
    const newListItems = toDoListObject["toDoItems"].filter(post => {
      return post.id !== req.params.id;
    });
    newListObject = {
      toDoItems: newListItems
    };
    // Write the new object into the file
    jsonfile.writeFile(FILE, newListObject, err => {
      if (err) return console.error(err);
      res.render("deletedpost");
    });
  });
});

app.get("/posts", (req, res) => {
  res.render("newpost");
});

app.listen(3000, () => console.log("Listening on Port 3000"));
