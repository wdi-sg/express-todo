import React from 'react';
import Layout from './Layout';

class TodoNew extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>New Task</h1>
          <form method="POST" action="/tasks">
            <input type="text" name="name" placeholder="Add a task" pattern=".*[a-zA-Z]+.*" title="At least 1 characters" required />
            <input type="submit" value="Add" />
          </form>
        </div>
      </Layout>
    );
  }
}

export default TodoNew;
