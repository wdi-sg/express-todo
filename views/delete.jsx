var React = require('react');

class Delete extends React.Component {
  render() {
    // console.log("logging: ", this.props)
    return (
      <html>
        <body>
          <form method = "POST" action = `/:{this.props.list.id}/delete-confirm?_method=DELETE`>
            <h1>Do You Want To Delete {this.props.list.task}?</h1>
            <input type="hidden" name = "id" value = {this.props.list.id}></input>
            <input type="submit" value='Delete-' + {this.props.list.num}>></input>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Delete;
