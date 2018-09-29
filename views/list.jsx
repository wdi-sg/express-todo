var React = require('react');
var Layout = require('./layout/layout');

class ListItems extends React.Component {

  render () {

    let listItems = this.props.items.map (item => {

      return (
        <li>{item}</li>
      )
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
          <p>{group.label}<span className="date-text text-muted">{group.date_time}</span></p>
          <ListItems items={group.items} />
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
