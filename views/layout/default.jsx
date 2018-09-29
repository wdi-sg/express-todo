const React = require('react');

class Default extends React.Component {

    render() {

        return (

            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                    <footer></footer>
                </body>
            </html>
    )};
}

module.exports = Default;