import React from 'react';
import Layout from './Layout';
import FormText from './FormText';
import FormCategory from './FormCategory';

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

export default TaskNew;
