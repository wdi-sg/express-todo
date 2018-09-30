const React = require('react');
const Default = require('./layout/default');

class Options extends React.Component {

    render() {

        return(

                <div className="checkbox">
                    <input type="checkbox" name="delete" value={this.props.delete}/> {this.props.delete}
                </div>

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
                    <h1>Select The List/(s) To Delete</h1>
                    <form method="POST" action={deleteUrl}>
                        {options}
                        <div className="button">
                            <input className="create" type="Submit" value="Delete"/>
                        </div>
                    </form>
                </div>
            </Default>

    )};
};


module.exports = Delete;