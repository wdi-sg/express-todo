var React = require('react');

class Results extends React.Component {
  render() {

    console.log("THIS PROPS:",this.props.list);


    let listings = this.props.list.map(function(item) {

        return (
          <tr>
            <td><input type="checkbox" checked="checked" /></td>
            <label className="container"><td>{item.timedate}</td><td>{item.todo}</td>
            </label>
          </tr>
        );
    });




    return (

      <div>
        <h1>To-do List</h1>
        <table>
        <tr>
            <td><label>Done</label></td>
            <td><label>Date & Time</label></td>
            <td><label>Item</label></td>
          </tr>
        {listings}
        </table>
      </div>
    );
  }
};



module.exports = Results;
