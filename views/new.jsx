var React = require('react');
var Layout = require('./layout/layout');

class SelectGroups extends React.Component {

  render () {

    let selectGroups = this.props.data.map (group => {
      return (
        <option value={group.label}>{group.label}</option>
      )
    })

      return selectGroups;
  }
}

class Home extends React.Component {

  render () {

    return (
      <Layout title="Add Item">
        <div className="col">
          <form method="POST" action="/new">
            <div className="form-group">
              <label>Group:</label>
              <input className="form-control" name ="newGroup" />
              <small className="form-text text-muted">Leave blank for none, or select an existing group:</small>
              <select className="form-control" name="groupSelect">
                <SelectGroups data={this.props.data} />
              </select>
              <label>Item:</label>
              <textarea class="form-control"rows="3" name="itemBody"></textarea>
            </div>
            <input type="submit" className="btn btn-success" value="Submit"/><br/>
            </form>
          </div>
      </Layout>
    )
  }
}

module.exports = Home;
