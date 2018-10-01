var React = require('react');

class home extends React.Component {
  render() {
    let url = '/list'

    return(
        <div>
        <h1>Shopping List</h1>
        <h2>Please insert item</h2>
        <form method = "POST" action = {url}>
        <input type = "text" name = "task" placeholder = "Type Task"/>
        <input type = "submit" value = "Enter"/>
        </form>
        </div>
    )
  }
}

module.exports = home;