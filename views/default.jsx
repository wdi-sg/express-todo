var React = require('react');


class TaskList extends React.Component {
  render() {
    console.log("SINGLE COMPONENT:", this.props.list)
    }
}


module.exports = TaskList;