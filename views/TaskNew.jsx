const React = require('react');
const Layout = require('./Layout');
const FormText = require('./FormText');
const FormCategory = require('./FormCategory');

class TaskNew extends React.Component {
  render() {
    return (
      <Layout>
        <form method="POST" action="/tasks">
          <FormText
            label="Task"
            placeholder="Add a task"
            defaultValue=""
            name="task"
          />
          <FormCategory
            categories={this.props.categories}
            selected="inbox"
          />
          <input
            className="btn btn-primary"
            type="submit"
            value="Add"
          />
        </form>
      </Layout>
    );
  }
}

module.exports = TaskNew;
