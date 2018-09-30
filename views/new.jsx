var React = require('react');
var Layout = require('./layout/layout');

class SelectGroups extends React.Component {

  render () {

    let selectGroups = this.props.data.map (group => {
      return (
        <option value={group.label} key={group.label}>{group.label}</option>
      )
    })

      return selectGroups;
  }
}

class Home extends React.Component {

  render () {

    return (
      <Layout title="Add Item">
        <div className="new-form">
          <form method="POST" action="/new">
              <label>Group:</label>
              <input name ="newGroup" className="text-input" />
              <label> Leave blank for none, or select an existing group:</label>
              <select name="groupSelect">
                <SelectGroups data={this.props.data} />
              </select>
              <label>Item:</label>
              <textarea rows="3" name="itemBody"></textarea>
            <input type="submit" className="submit-button" value="Submit"/><br/>
            </form>
          </div>
      </Layout>
    )
  }
}

module.exports = Home;
