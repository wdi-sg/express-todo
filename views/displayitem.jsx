var React = require('react');

class displayitem extends React.Component {
  render() {
    return (
      { this.props.items }
    );
  }
}

module.exports = displayitem;
