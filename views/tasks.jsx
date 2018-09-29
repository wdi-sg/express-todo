const React = require('react');
const DefaultLayout = require('./layouts/default');

class Tasks extends React.Component {
  render() {
    const items = this.props.tasks.map(item => (
      <li className="list-group-item" key={item}>
        {item}
      </li>
    ));
    return (
      <DefaultLayout title="ToDo" subtitle="More work?">
        <ul className="list-group">{items}</ul>
        <a
          className="btn btn-secondary btn-block mt-2 font-weight-bold"
          href="/tasks/new"
          role="button"
        >
          +
        </a>
      </DefaultLayout>
    );
  }
}

module.exports = Tasks;
