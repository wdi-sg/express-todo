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
            <div className="btn-group-vertical float-right text-right">
              <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
                <input className="btn btn-link btn-sm invisible" type="submit" value="Done" />
              </form>
              <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
                <input className="btn btn-link btn-sm text-danger" type="submit" value="Delete" />
              </form>
            </div>
          </li>
        );
      }
      return (
        <li className={classes} key={item.id}>
          {item.value}
          <div className="btn-group-vertical float-right">
            <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
              <input className="btn btn-sm btn-link" type="submit" value="Done" />
            </form>
            <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
              <input className="btn btn-sm btn-link text-danger" type="submit" value="Delete" />
            </form>
          </div>
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
