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
          <span className="float-left">Item : {item.todo}</span>{" "}
          <span className="float-right">
            Date Added:
            {item.date}
          </span>
          <div className="btn-group btn-group-sm float-right" role="group">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
            <button type="button" className="btn btn-primary">
              Edit
            </button>
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
