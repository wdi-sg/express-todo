const React = require('react');
const Default = require('./layout/default');

class Create extends React.Component {

    render () {

        let index = this.props.list.length;

        let date = new Date();

        return (

            <Default title="Create">
                <div className="form-wrapper">
                    <h1>Create New List</h1>
                    <form method="POST" action="/">
                        <input type="hidden" name="id" value={index}/>
                        <p className="header">Title:</p>
                        <input className="input" autoComplete="off" type="text" name="title" minLength="3" required/>
                        <br/>
                        <p className="header">Enter List:</p>
                        <textarea className="input" name="toBeDone" placeholder="Enter the list of things/actions seperating each list item with a period" required></textarea>
                        <input type="hidden" name="dateCreated" value={date}/>
                        <div className="form-button">
                            <input className="create" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </Default>
    )};
};

module.exports = Create;