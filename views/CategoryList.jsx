import React from 'react';
import CategoryItem from './CategoryItem';

class CategoryList extends React.Component {
  render() {
    const items = this.props.categories.map(category => {
      return <CategoryItem key={category.id} category={category} />
    });

    return (
      <ul className="list-group list-group-flush">
        {items}
      </ul>
    );
  }
}

export default CategoryList;
