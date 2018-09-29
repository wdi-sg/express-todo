import React from 'react';
import Layout from './Layout';
import List from './List';

class Categories extends React.Component {
  render() {
    return (
      <Layout>
        <List categories={this.props.categories} />
      </Layout>
    );
  }
}

export default Categories;
