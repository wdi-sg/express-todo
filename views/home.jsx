const React = require('react');
const Default = require('./layout/default');

class Home extends React.Component {

    render() {

        return (

            <Default title="To-Do List">
                <div className="wrapper">
                    <h1>To-Do List </h1>
                    <h2 className="empty">Your To Do List Is Currently Empty</h2>
                    <div className="button">
                        <a href="/new"><button className="create">Create A New To-Do List</button></a>
                    </div>
                </div>
            </Default>

    )};
}

module.exports = Home;