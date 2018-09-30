const React = require('react');
const Default = require('./layout/default');

class List extends React.Component {

    render() {

        let allActions = this.props.selectedList.toBeDone.map((element) => {

            if (element.includes(" \u2713")) {

                let seperate = element.split('~');

                return <li className="element"><span className="strike">{seperate[0]}</span><div className="floating">{seperate[1]}</div></li>

            } else {

                return <li className="element">{element}<div className="floating"></div></li>

            }

        });

        let updateUrl = "/" + this.props.param + "/edit";

        return (

            <Default title={this.props.param}>
                <div className="wrapper">
                    <h1>{this.props.param}</h1>
                    <ol className="list-type border">
                        {allActions}
                    </ol>
                    <div className="button">
                        <a href={updateUrl}><button className="create">Update</button></a>
                        <a href="/"><button className="create">Home</button></a>
                    </div>
                </div>
            </Default>

    )};
};

module.exports = List;