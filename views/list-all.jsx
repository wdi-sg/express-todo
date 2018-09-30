var React = require('react');

var DefaultLayout = require('./layout/default');

class Lists extends React.Component {

  render() {
    //let taskId = this.props.task.id;
   //let actionURL = '/lists/'+taskId+'?_method=PUT'


    const listItems = this.props.tasks.map( obj => {
      let task = obj.task
      let taskId =obj.id
      let taskInputTime = obj.dateCreated
      let actionURL = '/lists/'+taskId+'/edit'
      let doneURL = '/lists/'+taskId+'/done?_method=PUT';
      let deleteURL = '/lists/'+taskId+'?_method=DELETE';
      //console.log(taskId)

      if ( obj.complete === true){
        return <div>
        <form method = "POST" action ={deleteURL}><input type="submit" value='Remove'/></form>
        <p><strike>{task}</strike>completed at {taskInputTime}</p></div>

      }else{

      return <div class="wrapper"><div class="tasklist"><p>{task}</p><p class='dateadded'>{taskInputTime}</p></div>
             <div class="buttonoptions">
             <form method="GET" action={actionURL}><input type='submit' value='&#9998;'class="edit"/></form>
             <form method = "POST" action ={doneURL}><input type="submit" value='&#x2713;' class="strike"/></form>
             <form method = "POST" action ={deleteURL}><input type="submit" value='&#10008;' class="submit"/>
             </form></div>
             </div>

    }
    });


    return (
        <DefaultLayout title="All Tasks">
        {listItems}


        </DefaultLayout>


    );
  }
}

module.exports = Lists;