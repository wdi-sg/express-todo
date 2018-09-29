import React from 'react';
import Layout from './Layout';
import List from './List';

class Tasks extends React.Component {
  render() {
    return (
      <Layout>
        <div className="dropdown text-right mb-3">
          <a
            href="#"
            className="btn btn-outline-secondary dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort by...
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a href="/tasks?sortby=name" className="dropdown-item">Name</a>
            <a href="/tasks?sortby=timeAdded" className="dropdown-item">Date</a>
            <a href="/tasks?sortby=category" className="dropdown-item">Category</a>
          </div>
        </div>
        <List tasks={this.props.tasks} />
      </Layout>
    );
  }
}

export default Tasks;
