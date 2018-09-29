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
        <main>
          <div className="text-center">
            <a href="/tasks/new" className="btn btn-outline-primary">New Task</a>
          </div>

          <div className="container">
            <p className="text-right">To Do</p>
            <ul className="list-group list-group-flush">
              {todo}
            </ul>
          </div>

          <div className="container">
            <p className="text-right">Done</p>
            <ul className="list-group list-group-flush">
              {done}
            </ul>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Tasks;
