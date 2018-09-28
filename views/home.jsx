const React = require('react');
const Default = require('./layout/default');

class Home extends React.Component {

    render() {

        return (

            <Default title="To-Do List">
                <h1>To-Do List </h1>
                <h2>Your To Do List Is Currently Empty</h2>
                <a href="/new"><button>Create A New To-Do List</button></a>
            </Default>

    )};
}

module.exports = Home;