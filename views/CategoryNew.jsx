import React from 'react';
import Layout from './Layout';
import FormText from './FormText';

class CategoryNew extends React.Component {
  render() {
    return (
      <Layout>
        <form method="POST" action='/categories'>
          <FormText
            label="Category"
            name="category"
            placeholder="Add a category"
            defaultValue=""
          />
          <input className="btn btn-primary mr-3" type="submit" value="Add" />
          <a className="btn btn-secondary" href="/categories">Cancel</a>
        </form>
      </Layout>
    );
  }
}

export default CategoryNew;
