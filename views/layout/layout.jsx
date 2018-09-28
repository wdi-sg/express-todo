var React = require('react');

class Layout extends React.Component {

  render () {

    return (

      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" />
          <link rel="stylesheet" href="/reset.css" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div class="blue-box">
            <header>
              <h1>Shopping List</h1>

            </header>
          </div>
          <main>
            {this.props.children}
          </main>
          <div class="blue-box">
            <footer>
              Made by Leyou
            </footer>
          </div>
        </body>
      </html>

    )
  }
}

module.exports = Layout;
