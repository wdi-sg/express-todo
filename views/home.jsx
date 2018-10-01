var React = require('react');

class Home extends React.Component {
  render() {
    const todos = this.props.todo.map((td) => { // this.props-> object from the jsonfile, map-> goes through all iterations, td-> go through each individual object inside the todo
    return <li> {td.title} </li> 
    });

    return (
      <div>
        <h1>To Do List</h1>
        <ul>
            {todos}
        </ul>
      </div>
    );
  }
}

module.exports = Home;


    
