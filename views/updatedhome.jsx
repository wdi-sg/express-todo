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

        let thisPage = "/" + this.props.listIndex.title;

        return(

            <a href={thisPage}>
            <div className="list-container">
                <h2>{this.props.listIndex.title}</h2>
                <ol>
                    {actions}
                </ol>
            </div>
            </a>
    )};
};

class UpdatedHome extends React.Component {

    render() {

        let allToDo = this.props.list.map((element) => {

            return <List listIndex={element} />
        });

        return (

            <Default title="To-Do List">
                <div className="wrapper">
                    <h1>To-Do List</h1>
                    <div className="all-container">
                        {allToDo}
                    </div>
                    <div className="button">
                        <a href="/delete"><button className="create">Delete An Existing List</button></a>
                        <a href="/new"><button className="create">Create A New To-Do List</button></a>
                    </div>
                </div>
            </Default>


    )};

};

module.exports = UpdatedHome;