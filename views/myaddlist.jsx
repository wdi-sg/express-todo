var React = require('react');


class List extends React.Component {
    render() {
        // console.log( "halo",this.props )
        // let itemsElements = this.props.items.map( (item, index) => {
        //     console.log( "ITEM: ", item, index)
        //   return <li>{index} : {item} : {this.props.task}</li>
        // });

        return (
                    <div>
                                <h1>{this.props}</h1>
                      <ul>

                      </ul>
                    </div>

        );
    }
}

module.exports = List;
 // {itemsElements}