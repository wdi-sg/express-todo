import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./navbar.jsx";

class Newpost extends Component {
  render() {
    return (
      <html lang="en">
        <div className="container-fluid">
{/* Can call this.props.newItem because it was passed as a prop from the Post route in index.js file */}
            <p>Congratulations! You Have Successfully added {this.props.newItem} to your To Do List</p>
                <a href="/">Go Back to the Home Page</a>
        </div>
    </html>
    );
  }
}

export default Newpost;
