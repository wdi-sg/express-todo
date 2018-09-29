import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="/style.css" />
          <title>Tasks</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

export default Layout;
