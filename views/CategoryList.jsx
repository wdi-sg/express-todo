const React = require('react');
const CategoryItem = require('./CategoryItem');

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

module.exports = CategoryList;
