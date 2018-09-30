var React = require('react');
var Layout = require('./layout/layout');

class DoneButton extends React.Component {

  render () {

    return (
      <form method="POST" className = "list-form" action="/?_method=PUT">
        <input type="hidden" name="group" value={this.props.label} />
        <input type="hidden" name="item" value={this.props.text} />
        <input type="submit" className="btn done-button" value="&#10003;" />
      </form>
    )
  }
}

class ListItems extends React.Component {

  render () {

    let listItems = this.props.items.map (item => {

      if (item.completion > 0) {
        return (
          <li key={item.text}>
            <span className="done-item">{item.text}</span> <span className="time">&ndash;  {item.time}</span>
            <DoneButton label={this.props.group.label} text={item.text} />

          </li>
        )
      } else {
        return (
          <li key={item.text}>
            {item.text} <span className="time">&ndash; {item.time}</span>
            <DoneButton label={this.props.group.label} text={item.text} />
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
      <div className="sortby">
        <form method="GET" action="/" className="sortby-form">
          <select name="sortBy">
            <option value="" selected>Sort by...</option>
            <option value="name">Name</option>
            <option value="time">Time Created</option>
          </select>
          <input type="submit" className="btn" value="Sort" />
        </form>
      </div>
    )
  }
}

class Home extends React.Component {

  render () {

    let data = this.props.data;

    let listGroups = data.map (group => {

      if (group.label) {
        return (
          <div className="group grp-border" key={group.label}>
            <p>{group.label}</p>
            <ListItems items={group.items} group={group} />
          </div>
        )
      } else {
        return (
            <div className="group" key={group.label}>
              <ListItems items={group.items} group={group} />
            </div>
        )
      }

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
