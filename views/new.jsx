var React = require('react');

class New extends React.Component {
  render() {
    var list  = this.props.listArr.map( (element) => {
      return <li>Item is:{element.task} ID is :{element.id} Posted on:{element.dateTime}</li>
    })

    return(
      <div>
      <h1>Todo List</h1>
      <ul>{list}</ul>
      </div>

    );
  }
}

module.exports = New;