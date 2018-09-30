var React = require('react');

class Edit extends React.Component {
  render() {
    let url = "/post/"+this.props.item.id+"?_method=PUT"

    return(
      
      <div>
      <h1>Edit Task</h1>
      <form method="POST" action={url}>
      <input name="id" value={this.props.id} placeholder="insert edited id"/>
      <br></br>
      <input name="task" value={this.props.task} placeholder="insert edited task"/>
      <br></br>
      <input type = "submit" value="Enter"/>
      </form>
      </div>
    );
  }
}

module.exports = Edit;