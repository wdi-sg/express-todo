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
        <div className="container">
          <h1 className="text-center">Tasks</h1>
          <main>
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
        </div>
      </Layout>
    );
  }
}

export default Tasks;
