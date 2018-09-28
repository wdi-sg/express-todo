var React = require('react');

class Layout extends React.Component {

  render () {

    return (

      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div className="container">
            <header className="row">
              <div class="col">
                <h1>Shopping List</h1>
                <nav>
                  <a href="/new">Add</a>
                </nav>
              </div>
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
