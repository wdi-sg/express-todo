import React from 'react';
import Layout from './Layout';

class NewTask extends React.Component {
  render() {
    return (
      <Layout>
        <form method="POST" action="/tasks">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Add a task"
              pattern=".*[a-zA-Z]+.*"
              title="At least 1 character"
              required
            />
            <div className="input-group-append">
              <input
                className="btn btn-outline-secondary"
                type="submit"
                value="Add"
              />
            </div>
          </div>
        </form>
      </Layout>
    );
  }
}

export default NewTask;
