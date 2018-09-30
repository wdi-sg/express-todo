var React = require('react');

class Todolist extends React.Component {
    render() {
    // console.log(this.props.object);
    //.map is a function that can only be used on arrays, and it works similar to a for loop
    //what it does is to convert each item in the array into a list item
    var taskArray = this.props.object
    let itemsElements = taskArray.map(item => {
                              return <li>Task: {item.taskname}
                              // <form method= "POST" action="/todolist"> <input type = "submit" value= "Mark as done"></input> </form>
                              </li>
                        });
        return (
          <ul>
            {itemsElements}
          </ul>
        )
    }
}

module.exports = Todolist;






