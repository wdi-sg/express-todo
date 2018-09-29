var React = require('react');
var Layout = require('./layout/layout');

class ListItems extends React.Component {

  render () {

    let listItems = this.props.items.map (item => {

      if (item.completion > 0) {
        return (
          <li>
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
          <li>
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

class Home extends React.Component {

  render () {

    let listGroups = this.props.data.map (group => {

      return (
        <div className="col-md">
          <p>{group.label}</p>
          <ListItems items={group.items} group={group} />
        </div>
      )
    })

    return (
      <Layout title="Shopping List">
        {listGroups}
      </Layout>
    )
  }
}

module.exports = Home;
