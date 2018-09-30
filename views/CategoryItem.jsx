import React from 'react';

class CategoryItem extends React.Component {
  render() {
    const filterUrl = '/tasks?category=' + this.props.category.id;
    const editUrl = '/categories/' + this.props.category.id + '/edit';
    return (
      <div className="container">
        <div className="row">
          <div className="col-11">
            <a href={filterUrl} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              {this.props.category.name}
            </a>
          </div>
          <div className="col-1">
            <a href={editUrl} className="btn btn-outline-primary">Edit</a>
          </div>
        </div>

      </div>

    );
  }
}

export default CategoryItem;
