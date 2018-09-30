import React from 'react';

class FormCategory extends React.Component {
  render() {
    const categories = this.props.categories.map(category => {
      if (category.id === this.props.selected) {
        return (
          <option key={category.id} value={category.id} selected>
            {category.name}
          </option>
        );
      }
      return (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      );
    });

    return (
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select className="form-control" name="category" id="category">
          {categories}
        </select>
      </div>
    );
  }
}

export default FormCategory;
