const React = require('react');
const Default = require('./layout/default');

class Action extends React.Component {

    render () {

        let seperate = this.props.needToDo.split('~');

        return (


            <li>{seperate[0]}</li>

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

            <a className="anchor-container" href={thisPage}>
            <div className="list-container">
                <h2>{this.props.listIndex.title}</h2>
                <ol>
                    {actions}
                </ol>
            </div>
            <p className="date">{this.props.listIndex.dateCreated}</p>
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