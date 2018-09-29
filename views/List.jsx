import React from 'react';
import TaskItem from './TaskItem';
import CategoryItem from './CategoryItem';

class List extends React.Component {
  render() {
    let items;

    if (this.props.tasks) {
      items = this.props.tasks.map(task => {
        if (task.status === 'done') {
          return <del key={task.id}><TaskItem task={task} /></del>;
        }

        return <TaskItem key={task.id} task={task} />;
      });
    }

    if (this.props.categories) {
      items = this.props.categories.map(category => {
        return <CategoryItem key={category} category={category} />
      });
    }

    return (
      <ul className="list-group list-group-flush">
        {items}
      </ul>
    );
  }
}

export default List;
