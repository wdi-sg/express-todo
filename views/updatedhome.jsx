const React = require('react');
const Default = require('./layout/default');

class Action extends React.Component {

    render () {

        return (


            <li>{this.props.needToDo}</li>

    )};

};

class List extends React.Component {

    render() {

        let actions;

        if (this.props.listIndex.toBeDone.length !== 0) {

            actions = this.props.listIndex.toBeDone.map((element) => {

                return <Action needToDo={element}/>

            });

        }

        let updateUrl = "/update/" + this.props.listIndex.title;

        return(

            <div>
                <h2>{this.props.listIndex.title}</h2>
                <ol>
                    {actions}
                </ol>
                <a href={updateUrl}><button>Update</button></a>
            </div>
    )};
};

class UpdatedHome extends React.Component {

    render() {

        let allToDo = this.props.list.map((element) => {

            return <List listIndex={element} />
        });

        return (

            <Default title="To-Do List">
                <h1>To-Do List</h1>
                {allToDo}
                <a href="/new"><button>Create A New To-Do List</button></a>
            </Default>


    )};

};

module.exports = UpdatedHome;