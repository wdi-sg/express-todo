var React = require('react');

class Home extends React.Component {
  render() {
    // console.log("logging: ", this.props)
    const homeList = this.props.list.map(list =>{
      return(
          <li id = {list.id}>{list.task}</li>
      )
    });
    return (
      <html>
        <div>
          <h2>Tasks:</h2>
            <ol>
              {homeList}
            </ol>
        </div>
      </html>
    );
  }
}

module.exports = Home;
