const React = require('react');
const Default = require('./layout/default');

class Create extends React.Component {

    render () {

        let index = this.props.list.length;

        return (

            <Default title="Create">
                <form method="POST" action="/">
                    <input type="hidden" name="id" value={index}/>
                    <h1>Enter Your List Title:</h1>
                    <input type="text" name="title"/>
                    <br/>
                    <br/>
                    <textarea name="toBeDone" placeholder="Enter the list of things/actions seperating each list item with a period" required></textarea>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </Default>
    )};
};

module.exports = Create;