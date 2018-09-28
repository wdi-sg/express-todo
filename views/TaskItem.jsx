import React from 'react';

class TaskItem extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default TaskItem;
