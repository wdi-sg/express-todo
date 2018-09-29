const React = require('react');
const DefaultLayout = require('./layouts/default');

class AddTask extends React.Component {
  render() {
    console.log('eslint corrector', typeof this.props);
    return (
      <DefaultLayout title="Add Task">
        <form action="/tasks" method="post">
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
          <button className="btn btn-primary mt-2 float-right">Submit</button>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = AddTask;
