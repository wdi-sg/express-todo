import React from 'react';

class TaskItem extends React.Component {
  render() {
    const updateUrl = '/tasks/' + this.props.task.id + '?_method=PUT';
    const deleteUrl = '/tasks/' + this.props.task.id + '?_method=DELETE';
    const taskIsActive = this.props.task.status === 'active';
    const style = taskIsActive ? 'task' : 'task--done';
    const btnText = taskIsActive ? 'Done' : 'Undo';

    return (
      <form method="POST" action={updateUrl}>
        <input className={style} type="text" name="task" defaultValue={this.props.task.name} />
        <input type="submit" value={btnText} />
        <input type="submit" formAction={deleteUrl} value="Delete" />
      </form>
    );
  }
}

export default TaskItem;
