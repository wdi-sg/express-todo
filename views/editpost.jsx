import React from "react";
import PropTypes from "prop-types";

class Editpost extends React.Component {
  render() {
    {
      /*
// Passed the List Items from the Object as items into this form
// Map the items object into individual item and put the individual item into li tags
Added CSS Class Text Break to this Li Class so that Long Messages would wrap.
Unable to find any way to do this in Bootstrap
*/
    }
    return (
      <div>
        <form
          method="POST"
          action={"/posts/" + this.props.post.id + "/?_method=PUT"}
        >
          <p>
            Post :
            <textarea name="todo" value={this.props.post.todo} rows="3">
              {this.props.post.todo}
            </textarea>
          </p>
          <button type="submit">Edit This Post</button>
        </form>
      </div>
    );
  }
}

export default Editpost;
