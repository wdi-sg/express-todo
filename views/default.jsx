var React = require('react');

let message = "test";

class Default extends React.Component {
  render() {
    return (
    <div>
        <h1>{ message }</h1>
    </div>
    );
  }
};

module.exports = Default;