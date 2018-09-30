import React from 'react';
import Layout from './Layout';
import List from './List';

class Categories extends React.Component {
  render() {
    return (
      <Layout>
        <div className="text-center">
          <a href="/categories/new" className="btn btn-outline-primary mb-4">
            + Add Category
          </a>
        </div>
        <List categories={this.props.categories} />
      </Layout>
    );
  }
}

export default Categories;
