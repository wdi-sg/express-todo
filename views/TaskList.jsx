import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    const items = this.props.todo.tasks.map(task => {
      const categoryId = task.category;
      const category = this.props.todo.categories.find(category => {
        return category.id === categoryId;
      });

      if (task.status === 'done') {
        return (
          <del key={task.id}>
            <TaskItem task={task} category={category.name} />
          </del>
        );
      }

      return <TaskItem key={task.id} task={task} category={category.name} />;
    });

    return (
      <ul className="list-group list-group-flush">
        {items}
      </ul>
    );
  }
}

export default TaskList;
