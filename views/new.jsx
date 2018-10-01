var React = require('react');

class New extends React.Component {
  render() {
    // console.log("logging: ", this.props)
    return (
      <html>
      <div>
        <form method="POST" action="/newlist">
        <h2>Create New Task: </h2>
        <input type = "hidden" name = "id"/>
        num: <input type = "text" name = "num"/>
        task: <input type = "text" name = "task" placeholder = "Enter task"/>
        <input type = "submit" value = "Submit"/>
      </form>
      </div>
      </html>
    );
  }
}

module.exports = New;
