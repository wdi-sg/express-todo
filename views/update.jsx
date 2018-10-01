var React = require('react');

class Update extends React.Component {
  render() {
    console.log("logging: ", this.props)
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

module.exports = Update;
