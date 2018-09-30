var React = require('react');
var DefaultLayout = require('./layout/default');


class Editlist extends React.Component {

  render() {
    let taskId = this.props.task.id;
    let task = this.props.task.task;
    let actionURL = '/lists/'+taskId+'?_method=PUT';

    return (

        <DefaultLayout title="New Task">

      <div class='container'>
      <div class="wrapper">
      <form method = 'POST' action = {actionURL} >
      <h6>Modify {taskId}</h6>
      <input type='hidden' name='id' value={taskId} />
      <input type='text' name='task' value={task}/>
      <input type='submit' value='Submit'/>
      </form>
      </div>

      </div>
      </DefaultLayout>

    );
  }
}

module.exports = Editlist;