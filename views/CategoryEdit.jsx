import React from 'react';
import Layout from './Layout';
import FormText from './FormText';

class CategoryEdit extends React.Component {
  render() {
    const actionUrl = '/categories/' + this.props.category + '?_method=PUT';
    return (
      <Layout>
        <form method="POST" action={actionUrl}>
          <FormText
            label="Category"
            name="category"
            placeholder=""
            defaultValue={this.props.category}
          />
          <input className="btn btn-primary mr-3" type="submit" value="Rename" />
          <a className="btn btn-secondary" href="/categories">Cancel</a>
        </form>
      </Layout>
    );
  }
}

export default CategoryEdit;
