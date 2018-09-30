import React from 'react';

class TaskItem extends React.Component {
  render() {
    const link = '/tasks/' + this.props.task.id + '/edit';

    return (
      <a href={link} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        {this.props.task.name}
        <span className="badge badge-primary badge-pill">
          {this.props.category}
        </span>
      </a>
    );
  }
}

export default TaskItem;
