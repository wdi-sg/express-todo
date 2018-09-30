const React = require('react');
const DefaultLayout = require('./layouts/default');

class ErrorPage extends React.Component {
  render() {
    return (
      <DefaultLayout title="404" subtitle="3RR0R">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">404</h4>
          <p>{this.props.error}</p>
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

module.exports = ErrorPage;
