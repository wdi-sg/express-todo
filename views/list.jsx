var React = require('react');
var Layout = require('./layout/layout');

class ListItems extends React.Component {

  render () {

    let listItems = this.props.items.map (item => {

      if (item.completion > 0) {
        return (
          <li key={item.text}>
            <span className="done-item">{item.text}</span> &ndash; <span className="text-muted">{item.time}</span>
            <form method="POST" action="/?_method=PUT">
              <input type="hidden" name="group" value={this.props.group.label} />
              <input type="hidden" name="item" value={item.text} />
              <input type="submit" className="btn btn-sm date-text" value="Remove" />
            </form>
          </li>
        )
      } else {
        return (
          <li key={item.text}>
            {item.text} &ndash; <span className="text-muted">{item.time}</span>
            <form method="POST" action="/?_method=PUT">
              <input type="hidden" name="group" value={this.props.group.label} />
              <input type="hidden" name="item" value={item.text} />
              <input type="submit" className="btn btn-sm date-text" value="Done" />
            </form>
        </li>
        )
      }

    })

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

class SortBy extends React.Component {

  render () {

    return (
      <form method="GET" action="/">
        <select name="sortBy">
          <option value="" selected>Sort by...</option>
          <option value="name">Name</option>
          <option value="time">Time Created</option>
        </select>
        <input type="submit" className="btn btn-sm" value="Submit" />
      </form>
    )
  }
}

class Home extends React.Component {

  render () {

    let listGroups = this.props.data.map (group => {

      return (
        <div className="col-md group" key={group.label}>
          <p>{group.label}</p>
          <ListItems items={group.items} group={group} />
        </div>
      )
    })

    return (
      <Layout title="List">
        {listGroups}
        <SortBy />
      </Layout>
    )
  }
}

module.exports = Home;
