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
            <span className="col-md-8 float-left">Item : {item.todo}</span>{" "}
            <span className="col-md-4 float-right" id="date">
              Date:
              {item.date}
            </span>
          </div>
          <div
            className="btn-group btn-group-sm float-left d-inline-block"
            role="group"
          >
            <form>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
            </form>
            <form method="POST" action={"/posts/" + item.id + "/?_method=DELETE"}>
              <button
                type="submit"
                className="btn btn-danger"
                value={item.id}
              >
                Delete
              </button>
            </form>
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
