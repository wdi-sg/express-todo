var React = require('react');

var DefaultLayout = require('./layout/default');


class Newlist extends React.Component {

  render() {
    let actionURL = '/lists';
    //let pokemonId = this.props.pokemon.id;
    let action = '/new/list/?_method=PUT'



    return (

    <DefaultLayout title="New Task">

      <form method = 'POST' action = {actionURL} >
      <input type='text' name='task' placeholder='Insert new task' required/>
      <input type='text' name='tag' placeholder='Add tag ie. work, chores etc' />
      <input type='submit' value='Submit' class="submit"/>
      </form>

      </DefaultLayout>

    );
  }
}

module.exports = Newlist;