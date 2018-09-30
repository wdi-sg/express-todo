var React = require('react');

class Todolist extends React.Component {
    render() {
        // anything within "" is a string, for JSX variable.key cannot be indicated inside, so you have to define outside of return where the code reader understands javascript
        //double quote not applicable for variable
        // within { } in jsx, you can access a value from an object, e.g. {variable.name}

        return (
            <div>
                <span>To do list:</span>
                <form method= "POST" action="/todolist">
                    <div></div>
                    <span style = {{ marginRight: 1 + 'em' }}> Add task: </span> <input name="task"/>
                        <div> </div>
                    <input type = "submit" value= "Submit"></input>
                </form>
            </div>

        );
    }
}

module.exports = Todolist;