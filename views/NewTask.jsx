import React from 'react';
import Layout from './Layout';

class NewTask extends React.Component {
  render() {
    return (
      <Layout>
        <h1>New Task</h1>
        <form method="POST" action="/tasks">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Add a task"
            pattern=".*[a-zA-Z]+.*"
            title="At least 1 character"
            required />
          <input type="submit" value="Add" />
        </form>
      </Layout>
    );
  }
}

export default NewTask;
