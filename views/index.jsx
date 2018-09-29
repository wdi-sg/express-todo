import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./navbar.jsx";
import ListGroup from "./list.jsx";
import FormGroup from "./forminput.jsx";

class Index extends Component {
  render() {
    return (
      <html lang="en">
        <div className="container-fluid">
          <Nav />
          <body>
            <h1>Welcome To The Do List</h1>
            <div className="col-md-4">
              <FormGroup />
              <ListGroup />
            </div>
          </body>
        </div>
      </html>
    );
  }
}

export default Index;
