import React from "react";
import PropTypes from "prop-types";

class ListGroup extends React.Component {
  render() {
      console.log(this.props.items)
     const listItem = this.props.items.map(item => {
         return <li className="list-group-item">{item}</li>
      })
    return (
      <div className="col-md-12">
        <ul className="list-group">
            {listItem}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
