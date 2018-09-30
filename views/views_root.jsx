
var React = require('react');



class ToDoList extends React.Component {

    render() {

        console.log ("this.props: ", this.props);

        let toDoArray = this.props.entries

        if (toDoArray) {toDoArray = toDoArray.map (e => {

          return (

            <div class="row">

              <div class="col-xs">
                <form action="/?_method=PUT" method="POST">
                  <button type="submit" name="buttonEntry" value={e.toDoEntry}>{"\u2714"}</button>
                </form>
              </div>

              <div class={"col-md " + e.completed}>
                <li class={e.priority}>{e.toDoEntry}</li>
              </div>

              <div class="col-xs timestamp">{e.submissionTime}</div>

            </div>


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

    return (

      <div class="new-entry-form">

        <h3>To-Do List: New Entry</h3>

        <form method="POST" action="/">

        To-Do: <input type="text" name="toDoEntry" size="50" minLength="3" required /><br />

        Priority:{"\u00a0"}
        <input type="radio" class="priority-select" name="priority" value="high" />{"\u00a0"}High{"\u00a0"}
        <input type="radio" class="priority-select" name="priority" value="medium" />{"\u00a0"}Medium{"\u00a0"}
        <input type="radio" class="priority-select" name="priority" value="low" />{"\u00a0"}Low{"\u00a0"}
        <br />

        <input type="hidden" name="completed" value="notdone" /><br />

        <input type="submit" value="Submit" />

        </form>

      </div>

    );
  };
};



class ToDoPage extends React.Component {

    render() {

        console.log('JSX Rendering To-Do...');

        return (

          <html>

            <head>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/css/style.css" />

            </head>

            <body>


                <h1>To-Do List</h1>

                <ToDoList entries = {this.props.entries} />

                <ToDoForm />

            </body>

          </html>

        );
    };
};


module.exports = ToDoPage;













