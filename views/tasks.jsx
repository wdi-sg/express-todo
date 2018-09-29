const React = require('react');
const DefaultLayout = require('./layouts/default');

class Tasks extends React.Component {
  render() {
    const actionUrl = '/tasks/';
    const classes = 'list-group-item';
    const items = this.props.tasks.map((item) => {
      if (item.complete) {
        return (
          <li className={classes} key={item.id}>
            <del>{item.value}</del>
            <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
              <input
                className="btn btn-primary btn-sm float-right invisible"
                type="submit"
                value="Done"
              />
            </form>
          </li>
        );
      }
      return (
        <li className={classes} key={item.id}>
          {item.value}
          <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
            <input className="btn btn-primary btn-sm float-right" type="submit" value="Done" />
          </form>
        </li>
      );
    });
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
