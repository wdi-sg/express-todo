var React = require('react');

class home extends React.Component {
  render() {
    return (
        <div>
        <h2>My To Do List</h2>
        <ol>
        <li>{this.props[0].task}</li>
        <li>{this.props[1].task}</li>
        <li>{this.props[2].task}</li>
        </ol>
        <form method="POST" name="mytask" method="POST" action="/addlist">
            <p>Add New Task: <input type="text" name="task"/>
            <input type="submit" value="Add New Task"/>
            </p>

        </form>
        </div>
    );
  }
 }


module.exports = home;