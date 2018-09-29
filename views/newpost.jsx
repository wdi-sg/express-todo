import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./navbar.jsx";
import ListGroup from "./listgroup.jsx";
import FormGroup from "./formgroup.jsx";

class Newpost extends Component {
  render() {
      console.log(this.props.newItem)
    return (
      <html lang="en">
        <div className="container-fluid">
            <p>Congratulations! You Have Successfully added {this.props.newItem} to your To Do List</p>
                <a href="/">Go Back to the Home Page</a>
        </div>
    </html>
    );
  }
}

export default Newpost;
