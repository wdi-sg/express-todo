var React = require('react');

class additem extends React.Component {
  render() {
    return (
      <div>
          <form method="POST" action="/shoppinglist">
          <h1>Add an item</h1>
          Item Description: <input type="text" name="description" /><br /><br />
          Brand: <input type="text" name="brand" /><br /><br />
          Quantity: <input type="text" name="quantity" /><br /><br />
          <input type="submit" value="submit" />
          </form>
      </div>
    )
  }
}

module.exports = additem;
