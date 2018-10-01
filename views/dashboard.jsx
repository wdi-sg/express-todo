var React = require('react');

class Todolist extends React.Component {
    render() {
    // console.log(this.props.object);
    //.map is a function that can only be used on arrays, and it works similar to a for loop
    //what it does is to convert each item in the array into a list item
    var taskArray = this.props.object
    let itemsElements = taskArray.map(item => {
            let actionPath = "/todolist/" + item.id + "?_method=PUT"
            if (item.done) {
                return <li key={item.id}>Task: <del>{item.taskname}</del> </li>
            } else {
            //map is an iterator, goes through an array, and returns you a new array
            //you cannot have sibling elements without a parent elements
            return <li key={item.id}>Task: {item.taskname}
            <div> <form method= "POST" action={actionPath}> <input type = "submit" value= "done"></input> </form> </div>
            </li>
            //check done property, if done then render
            }
            });

        return (
          <ul>
            {itemsElements}
          </ul>
        )
    }
}

module.exports = Todolist;

