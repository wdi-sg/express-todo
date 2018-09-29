import React from 'react';
import Layout from './Layout';
import TaskItem from './TaskItem';

class Tasks extends React.Component {
  render() {
    const todo = this.props.todo.map(task => {
      return <TaskItem key={task.id} task={task} />;
    });

    const done = this.props.done.map(task => {
      return <TaskItem key={task.id} task={task} />;
    });

    return (
      <Layout>
        <div>
          <h1>Tasks</h1>
          <main>
            <h3>To Do</h3>
            {todo}
            <h3>Done</h3>
            {done}
          </main>
        </div>
      </Layout>
    );
  }
}

export default Tasks;
