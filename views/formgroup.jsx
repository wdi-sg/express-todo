import React from "react";
import PropTypes from "prop-types";

class FormGroup extends React.Component {
  render() {
{/*Had to add this to Reset the form otherwise there would be a error sometimes where the form could not submit repeatedly.*/}
    const cancelCourse = () => {
      document.getElementById("listItemEntry").reset();
    };

    return (
      <form method="POST" action="/posts">
        <div className="form-group col-md-12 row">
          <label for="listItemEntry">Enter your To-Do Item</label>
        </div>
        <div className="col-md-12 row d-inline-block pt-0 mb-1">
          <div className="col-md-10 d-inline-block">
            <input
              type="text"
              className="form-control"
              id="listItemEntry"
              name="newToDoItem"
              placeholder="What do you want to do?"
            />
          </div>
          <div className="col-md-2 d-inline-block clearfix">
            <button type="submit" className="btn btn-primary row" name="submit" onClick={this.cancelCourse}>
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormGroup;
