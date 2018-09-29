const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <title>{this.props.title}</title>
        </head>
        <body>
          <header>
            <nav className="navbar navbar-dark bg-dark text-white font-weight-bold">
              <a className="navbar-brand text-center" href="/">
                ToDo
              </a>
              <span className="navbar-text">{this.props.subtitle}</span>
            </nav>
          </header>
          <div className="container w-50 mx-auto mt-5">{this.props.children}</div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
