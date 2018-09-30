const React = require('react');
const DefaultLayout = require('./layouts/default');

class Tasks extends React.Component {
  render() {
    const actionUrl = '/tasks/';
    const classes = 'list-group-item';
    const buttonClasses = 'btn btn-link btn-sm font-weight-bold text-right';
    const items = this.props.tasks.map((item) => {
      if (item.hidden) {
        return null;
      }
      if (item.complete) {
        return (
          <li className={classes} key={item.id}>
            <del className="text-muted">
              {item.added}
              <br />
              <strong>{item.value}</strong>
            </del>
            <div className="btn-group-vertical float-right">
              <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
                <input className={`${buttonClasses} invisible`} type="submit" value="Done" />
              </form>
              <form action={`${actionUrl + item.id}?_method=DELETE`} method="post">
                <input className={`${buttonClasses} text-danger`} type="submit" value="Delete" />
              </form>
            </div>
          </li>
        );
      }
      return (
        <li className={classes} key={item.id}>
          {item.added}
          <br />
          <strong>{item.value}</strong>
          <div className="btn-group-vertical float-right">
            <form action={`${actionUrl + item.id}?_method=PUT`} method="post">
              <input className={buttonClasses} type="submit" value="Done" />
            </form>
            <form action={`${actionUrl + item.id}?_method=DELETE`} method="post">
              <input className={`${buttonClasses} text-danger`} type="submit" value="Delete" />
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
