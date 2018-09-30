import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./navbar.jsx";

class EditedPost extends Component {
  render() {
    return (
      <html lang="en">
        <div className="container-fluid">
            <p>Congratulations! You Have successfully edited this post in your To Do List</p>
                <a href="/">Go Back to the Home Page</a>
        </div>
    </html>
    );
  }
}

export default EditedPost;
