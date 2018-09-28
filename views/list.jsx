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

class ListGroups extends React.Component {

  render () {

    let listGroups = this.props.data.map (group => {

      if (group.label === "unlabelled") {

        return (
          <div className="col-sm">
            <p></p>
           <ListItems items={group.items} />
           </div>
         )


      } else {

        return (
          <div className="col-sm group">
            <p>{group.label}<span className="date-text text-muted">{group.date_time}</span></p>
            <ListItems items={group.items} />
          </div>
        )
      }

    })

    return listGroups
  }
}

class Home extends React.Component {

  render () {

    return (
      <Layout title="Shopping List">
        <ListGroups data={this.props.data} />
      </Layout>
    )
  }
}

module.exports = Home;
