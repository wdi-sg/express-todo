import React from 'react';
import Layout from './Layout';
import TaskList from './TaskList';

class Tasks extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <TaskList title="To Do" tasks={this.props.todo} />
          <TaskList title="Done" tasks={this.props.done} />
        </main>
      </Layout>
    );
  }
}

export default Tasks;
