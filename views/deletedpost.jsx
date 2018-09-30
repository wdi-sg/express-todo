import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./navbar.jsx";

class DeletePost extends Component {
  render() {
    return (
      <html lang="en">
        <div className="container-fluid">
            <p>Congratulations! You Have successfully deleted this post from your To Do List</p>
                <a href="/">Go Back to the Home Page</a>
        </div>
    </html>
    );
  }
}

export default DeletePost;
