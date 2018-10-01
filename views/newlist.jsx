var React = require('react');

class Newlist extends React.Component {
  render() {
    // console.log("logging: ", this.props)
    return (
      <html>
      <div>
        <h2>Task Added: </h2>
        <p id = {this.props.newList.id}><b>{this.props.newList.num}. </b>{this.props.newList.task}</p>
      </div>
      </html>
    );
  }
}

module.exports = Newlist;
