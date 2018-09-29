import React from 'react';
import Layout from './Layout';

class TaskEdit extends React.Component {
  render() {
    const updateUrl = '/tasks/' + this.props.task.id + '?_method=PUT';
    const deleteUrl = '/tasks/' + this.props.task.id + '?_method=DELETE';
    const toggleText = this.props.task.status === 'active' ? 'Done' : 'Undo';
    return (
      <Layout>
        <h1 className="text-center">Edit Task</h1>
        <form method="POST">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="name"
              pattern=".*[a-zA-Z]+.*"
              title="At least 1 character"
              defaultValue={this.props.task.name}
              required
            />
            <div className="input-group-append">
              <input
                className="btn btn-outline-secondary"
                type="submit"
                value="Rename"
                formAction={updateUrl}
              />
              <input
                className="btn btn-outline-secondary"
                type="submit"
                name="toggle"
                value={toggleText}
                formAction={updateUrl}
              />
              <input
                className="btn btn-outline-secondary"
                type="submit"
                value="Delete"
                formAction={deleteUrl}
              />
            </div>
          </div>
        </form>
      </Layout>
    );
  }
}

export default TaskEdit;
