const React = require('react');
const DefaultLayout = require('./layouts/default');

class AddTask extends React.Component {
  render() {
    console.log(this.props);
    return (
      <DefaultLayout title="Add Task">
        <form action="/pokemon" method="post">
          <div classname="form-group">
            <input
              type="text"
              className="form-control"
              id="task-box"
              placeholder="Enter new task"
            />
          </div>
          <button className="btn btn-primary mt-2 float-right">Submit</button>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = AddTask;
