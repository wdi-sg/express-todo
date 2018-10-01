var React = require('react');

class Home extends React.Component {
  render() {
    let pokemonId = this.props.id;
    let actionUrl = '/pokemon/'+pokemonId+'?_method=PUT';
    return (
      <div>
        <h1>Edit Pokemon</h1>
        <form method="POST" action={actionUrl}>
            <p>ID: <input name="id" /></p>
            <p>Num: <input name="id" /></p>
            <p>Name: <input name="name" /></p>
            <p>Image: <input name="name" /></p>
            <p>Height: <input name="height" /></p>
            <p>Weight: <input name="height" /></p>
            <p><input type="submit" /></p>
        </form>
      </div>
    );
  }
}

module.exports = Home;