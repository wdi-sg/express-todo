import React from 'react';

class CategoryItem extends React.Component {
  render() {
    //TODO: direct to /tasks?category=
    //TODO: add a button that goes to category edit
    const link = '/categories/' + this.props.category + '/edit';
    return (
      <a href={link} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        {this.props.category}
      </a>
    );
  }
}

export default CategoryItem;
