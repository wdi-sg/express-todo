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
        <a
          className="btn btn-secondary btn-block mt-2 font-weight-bold"
          href="/tasks"
          role="button"
        >
          Back
        </a>
      </DefaultLayout>
    );
  }
}

module.exports = PostTask;
