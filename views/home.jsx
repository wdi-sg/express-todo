var React = require('react');
var DefaultLayout = require('./layout/default');


class Home extends React.Component {

  render() {
    return (

    <DefaultLayout title="New Task">
      <div class='container'>

      <form method = 'GET' action = '/new' >
      <input type='submit' value='Create'/>
      </form>

      <form method = 'GET' action = '/lists' >
      <input type='submit' value='View'/>
      </form>

      </div>
      </DefaultLayout>

    );
  }
}

module.exports = Home;