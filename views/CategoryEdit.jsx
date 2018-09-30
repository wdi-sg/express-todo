const React = require('react');
const Layout = require('./Layout');
const FormText = require('./FormText');

class CategoryEdit extends React.Component {
  render() {
    const actionUrl = `/categories/${this.props.category.id}?_method=PUT`;

    return (
      <Layout>
        <form method="POST" action={actionUrl}>
          <FormText
            label="Category"
            name="category"
            placeholder=""
            defaultValue={this.props.category.name}
          />
          <input className="btn btn-primary mr-3" type="submit" value="Rename" />
          <a className="btn btn-secondary" href="/categories">Cancel</a>
        </form>
      </Layout>
    );
  }
}

module.exports = CategoryEdit;
