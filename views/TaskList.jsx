import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks.map(task => {
      return <TaskItem key={task.id} task={task} />;
    });

    const style = (tasks.length > 0 ? '' : 'd-none') + ' container';

    return (
      <div className={style}>
        <p className="text-right">{this.props.title}</p>
        <ul className="list-group list-group-flush">
          {tasks}
        </ul>
      </div>
    );
  }
}

export default TaskList;
