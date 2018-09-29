const React = require('react');
const DefaultLayout = require('./layouts/default');

class PostTask extends React.Component {
  render() {
    return <DefaultLayout title="Task Added">{this.props.task}</DefaultLayout>;
  }
}

module.exports = PostTask;
