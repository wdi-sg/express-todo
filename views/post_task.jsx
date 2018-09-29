const React = require('react');
const DefaultLayout = require('./layouts/default');

class PostTask extends React.Component {
  render() {
    return (
      <DefaultLayout title="Task Added" subtitle="Task added.">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Get working!</h4>
          <p>{this.props.task} was added sucessfully.</p>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = PostTask;
