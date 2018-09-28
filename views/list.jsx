var React = require('react');
var Layout = require('./layout/layout');

class Home extends React.Component {

  render () {

    return (
      <Layout title="Shopping List">
        <p>todolist here</p>
      </Layout>
    )
  }
}

module.exports = Home;
