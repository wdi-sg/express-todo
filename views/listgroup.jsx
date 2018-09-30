import React from "react";
import PropTypes from "prop-types";

class ListGroup extends React.Component {
  render() {
    {
      /*
// Passed the List Items from the Object as items into this form
// Map the items object into individual item and put the individual item into li tags
Added CSS Class Text Break to this Li Class so that Long Messages would wrap.
Unable to find any way to do this in Bootstrap
*/
    }
    const listItem = this.props.items.map(item => {
      return (
        <li className="list-group-item">
          <div className="container">
            <span className="col-md-7 float-left">Item : {item.todo}</span>{" "}
            <span className="col-md-5 float-right" id="date">
              Date Added:
              {item.date}
            </span>
          </div>
          <div
            className="btn-group btn-group-sm float-left d-inline-block"
            role="group"
          >
            <label for="done-checkbox">Done: </label>
            <input
              type="checkbox"
              name="done"
              value="done"
              id="done-checkbox"
            />
        <div className="form-row">
        <form method="GET" action={"/posts/" + item.id + "/edit/"}>
              <button type="submit" className="btn btn-primary" value={item.id}>
                Edit
              </button>
            </form>
            <form
              method="POST"
              action={"/posts/" + item.id + "/?_method=DELETE"}
            >
              <button type="submit" className="btn btn-danger" value={item.id}>
                Delete
              </button>
            </form>
        </div>
          </div>
        </li>
      );
    });
    return (
      <div className="col-md-12">
        <ul className="list-group">{listItem}</ul>
      </div>
    );
  }
}

export default ListGroup;
