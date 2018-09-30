const React = require('react');
const Default = require('./layout/default');

class InputListDisabled extends React.Component {

    render() {

        return(

            <div className="checkbox left">
            <input type="checkbox" name="done" value={this.props.input} disabled /> {this.props.input}
            </div>

    )};
};

class InputList extends React.Component {

    render() {

        return (

            <div className="checkbox left">
            <input className="elements" type="checkbox" name="done" value={this.props.input} /> {this.props.input}
            </div>
    )};
};

class Update extends React.Component {

    render() {

        let listOfInput = this.props.list.toBeDone.map((element) => {

            if (element.includes(" \u2713")) {

                let seperate = element.split('~');

                return <InputListDisabled input={seperate[0]} index={this.props.list.toBeDone.indexOf(element)}/>

            } else {

                return <InputList input={element} index={this.props.list.toBeDone.indexOf(element)}/>

            }

        });

        let updateDate = new Date();
        let putUrl = "/" + this.props.param + "?_method=PUT";

        return (

            <Default title="Update">
                <div className="wrapper">
                    <h1>{this.props.list.title}</h1>
                    <form method="POST" action={putUrl}>
                        <input type="hidden" name="dateUpdated" value={updateDate}/>
                        <div className="list-type update border">
                            {listOfInput}
                        </div>
                        <h2>Add New Task:</h2>
                        <textarea className="input" name="newtask" placeholder="Add new tasks seperating each task with a period"></textarea>
                        <div className="button">
                            <input className="create" type="submit" value="Update"/>
                        </div>
                    </form>
                </div>
            </Default>


    )};
};


module.exports = Update;