import React from 'react';
import Layout from './Layout';
import TaskItem from './TaskItem';

class Tasks extends React.Component {
  render() {
    const tasks = this.props.tasks.map(task => {
      return <TaskItem key={task.id} name={task.name} />;
    });

    return (
      <Layout>
        <div>
          <h1>Tasks</h1>
          <ul>
            {tasks}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Tasks;
