const React = require('react');
const DefaultLayout = require('./layouts/default');

class AddTask extends React.Component {
  render() {
    console.log('Please ignore for eslint, ', typeof this.props);
    return (
      <DefaultLayout title="Add Task" subtitle="Add new task.">
        <form action="/tasks" method="post" autoComplete="off">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="task-box"
              placeholder="Enter new task"
              name="task"
              required
            />
          </div>
          <button className="btn btn-secondary btn-block mt-2 font-weight-bold">Submit</button>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = AddTask;
