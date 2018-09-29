const React = require('react');
const Default = require('./layout/default');

class InputListDisabled extends React.Component {

    render() {

        return(

            <div>
            <input type="checkbox" name="done" value={this.props.input} disabled /> {this.props.input}
            </div>

    )};
};

class InputList extends React.Component {

    render() {

        return (

            <div>
            <input type="checkbox" name="done" value={this.props.input} /> {this.props.input}
            </div>
    )};
};

class Update extends React.Component {

    render() {

        let listOfInput = this.props.list.toBeDone.map((element) => {

            if (element.includes(" \u2713")) {

                return <InputListDisabled input={element} index={this.props.list.toBeDone.indexOf(element)}/>

            } else {

                return <InputList input={element} index={this.props.list.toBeDone.indexOf(element)}/>

            }

        });

        let putUrl = "/" + this.props.param + "?_method=PUT";

        return (

            <Default title="Update">
                <div className="wrapper">
                    <h1>{this.props.list.title}</h1>
                    <form method="POST" action={putUrl}>
                        {listOfInput}
                        <textarea name="newtask" placeholder="Add new tasks seperating each task with a period"></textarea>
                        <br/>
                        <br/>
                        <input type="submit" value="Update"/>
                    </form>
                </div>
            </Default>


    )};
};


module.exports = Update;