var React = require('react');

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1>Create To Do</h1>
        <form method="POST" action=/todo>
            <p>ID: <input name="id" /></p>
            <p>Name: <input name="name" /></p>
            <p><input type="submit" /></p>
        </form>
      </div>
    );
  }
}

module.exports = Todo;