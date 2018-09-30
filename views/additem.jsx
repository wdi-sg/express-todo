var React = require('react');



class AddItem extends React.Component {
  render() {

        console.log(this.props.listItem)

        // let createList = this.props.listItem.grocery.map( (item, index)=> {
        //     return <ListMaker eachItem = {item}></ListMaker> ;

        // });

        let actionUrl = '/todo/additem' +'?_method=PUT'

        return (
          <div>
            <h1>What would you like to add</h1>

            <form method="POST" action={actionUrl}>
                <input name="item" value="test"/>

            </form>

          </div>
        );
  }
}

module.exports = AddItem;
