const React = require('react');
const Default = require('./layout/default');

class Options extends React.Component {

    render() {

        return(

                <li>
                    <input type="checkbox" name="delete" value={this.props.delete}/> {this.props.delete}
                </li>

    )};
};

class Delete extends React.Component {

    render() {

        let options = this.props.deleteItem.map((element) => {

            return <Options delete={element.title}/>
        });

        let deleteUrl = "/?_method=delete";

        return (

            <Default title="Delete">
                <div className="wrapper">
                    <form method="POST" action={deleteUrl}>
                        <h1>Select The List/(s) To Delete</h1>
                        <ol>
                            {options}
                        </ol>
                        <input type="Submit" value="Delete"/>
                    </form>
                </div>
            </Default>

    )};
};


module.exports = Delete;