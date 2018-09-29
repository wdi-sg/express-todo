import React from 'react';

class TaskItem extends React.Component {
  render() {
    const link = '/tasks/' + this.props.task.id + '/edit';
    const style = 'list-group-item list-group-item-action';

    return (
      <a href={link} className={style}>{this.props.task.name}</a>
    );
  }
}

export default TaskItem;
