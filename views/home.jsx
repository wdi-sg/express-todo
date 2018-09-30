var React = require('react');




class ListMaker extends React.Component {
  render() {

    let specificItem = this.props.eachItem
    console.log(specificItem + typeof specificItem)
    let actionUrl = '/todo/deleteItem' + "/"+ specificItem +'?_method=DELETE'
    console.log(actionUrl)

    let deleteButton =
                        <form method="POST" action= {actionUrl}>
                           <input name={specificItem} type="submit" value="done"/>
                        </form>


    return (
      <div>
            <li>{specificItem}{deleteButton}</li>
      </div>
    );
  }
}



class Home extends React.Component {
  render() {

        console.log(this.props.listItem)

        let createList = this.props.listItem.grocery.map( (item, index)=> {
            return <ListMaker eachItem = {item}></ListMaker> ;

        });


        return (
          <div>
            <h1>Grocery List</h1>
            <h2><a href="/todo/additem">Add Item</a></h2>
            <ul>{createList}</ul>
          </div>
        );
  }
}

module.exports = Home;