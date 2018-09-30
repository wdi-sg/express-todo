var React = require('react');

class Layout extends React.Component {

  render () {

    return (

      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Comfortaa|Roboto" rel="stylesheet" />
          <link rel="stylesheet" href="/reset.css" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div className="container">
            <header className="row">
              <h1>List</h1>
              <nav>
                <div className="nav-links">
                  <a href="/">Main</a><a href="/new">Add</a>
                </div>
              </nav>
            </header>
            <main className="row">
              {this.props.children}
            </main>
          </div>
        </body>
      </html>

    )
  }
}

module.exports = Layout;
