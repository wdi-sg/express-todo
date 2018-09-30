const React = require('react');
const Layout = require('./Layout');
const FormText = require('./FormText');
const FormCategory = require('./FormCategory');

class TaskEdit extends React.Component {
  render() {
    const updateUrl = `/tasks/${this.props.task.id}?_method=PUT`;
    const deleteUrl = `/tasks/${this.props.task.id}?_method=DELETE`;
    const toggleText = this.props.task.status === 'active' ? 'Done' : 'Undo';

    return (
      <Layout>
        <form method="POST">
          <FormText
            label="Task"
            placeholder=""
            defaultValue={this.props.task.name}
            name="task"
          />

          <FormCategory
            categories={this.props.categories}
            selected={this.props.task.category}
          />

          <input
            className="btn btn-primary mr-3"
            type="submit"
            value="Update"
            formAction={updateUrl}
          />
          <input
            className="btn btn-success mr-3"
            type="submit"
            name="toggle"
            value={toggleText}
            formAction={updateUrl}
          />
          <input
            className="btn btn-danger"
            type="submit"
            value="Delete"
            formAction={deleteUrl}
          />
        </form>
      </Layout>
    );
  }
}

module.exports = TaskEdit;
