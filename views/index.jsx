import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./navbar.jsx";
import ListGroup from "./listgroup.jsx";
import FormGroup from "./formgroup.jsx";

class Index extends Component {
  render() {
      const toDoListItemsProps = this.props.toDoItems
      console.log(this.props.toDoItems)
    return (
      <html lang="en">
        <div className="container-fluid">
          <Nav />
          <body>
            <h1>Welcome To The Do List</h1>
            <div className="col-md-4">
              <FormGroup />
              <ListGroup items={toDoListItemsProps} />
            </div>
          </body>
        </div>
      </html>
    );
  }
}

export default Index;
