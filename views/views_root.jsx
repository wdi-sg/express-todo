
var React = require('react');



class ToDoList extends React.Component {

    render() {

        console.log ("this.props: ", this.props);

        let toDoArray = this.props.entries

        if (toDoArray) {toDoArray = toDoArray.map (e => {

          return (

            <li class={e.priority}>{e.toDoEntry}</li>

          )});

        } else {toDoArray = ""};


        return (

          <div class="container">

            {toDoArray}

          </div>

        );
    };
};



class ToDoForm extends React.Component {

    render() {

        console.log('JSX Rendering To-Do Form...');

        // const postURL = `/${this.props.id}?_method=PUT`; // Syntax to use methodOverride since forms can't PUT

        return (

          <html>

            <head>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/css/style.css" />

            </head>

            <body>


                <h1>To-Do List</h1>

                <ToDoList entries = {this.props.entries} />


                <div class="new-entry-form">

                  <h3>To-Do List: New Entry</h3>

                  <form method="POST" action="/">

                  To-Do: <input type="text" name="toDoEntry" size="50" minLength="3" required /><br />

                  Priority:{"\u00a0"}
                  <input type="radio" class="priority-select" name="priority" value="high" />{"\u00a0"}High{"\u00a0"}
                  <input type="radio" class="priority-select" name="priority" value="medium" />{"\u00a0"}Medium{"\u00a0"}
                  <input type="radio" class="priority-select" name="priority" value="low" />{"\u00a0"}Low{"\u00a0"}
                  <br />

                  <input type="submit" value="Submit" />

                  </form>

                </div>

            </body>

          </html>

        );
    };
};


module.exports = ToDoForm;



// class Pokemon extends React.Component {

//   render() {

//     console.log('doggie');
//     console.log("THIS PROPS:", this.props.abc );

//     return (

//       <div>

//         <h1>{this.props.abc.name}</h1>

//         <h1>{this.props.abc.email}</h1>

//         <List items={listOfItems} />

//       </div>

//     );
//   };
// };

// const listOfItems = [
//   "apples",
//   "bananas",
//   "pineapple"
// ];

// class List extends React.Component {

//     render() {

//         let itemsElements = this.props.items.map (items => {return <li>{items}</li>});

//         return (

//           <ul>{itemsElements}</ul>

//         );
//     };
// };









