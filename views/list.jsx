const React = require('react');
const Default = require('./layout/default');

class List extends React.Component {

    render() {

        let allActions = this.props.selectedList.toBeDone.map((element) => {

            return <li>{element}</li>
        });

        let updateUrl = "/" + this.props.param + "/edit";

        return (

            <Default title={this.props.param}>
                <div className="wrapper">
                    <h1>{this.props.param}</h1>
                    <ol>
                        {allActions}
                    </ol>
                    <a href={updateUrl}><button>Update</button></a>
                    <a href="/"><button>Home</button></a>
                </div>
            </Default>

    )};
};

module.exports = List;