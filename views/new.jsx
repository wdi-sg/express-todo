var React = require('react');
var Layout = require('./layout/layout');

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
                <option value = ""></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
