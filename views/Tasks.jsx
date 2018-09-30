import React from 'react';
import Layout from './Layout';
import TaskList from './TaskList';

class Tasks extends React.Component {
  render() {
    let nameUrl;
    let dateUrl;
    if (this.props.queryCategory) {
      nameUrl = `/tasks?category=${this.props.queryCategory}&sortby=name`;
      dateUrl = `/tasks?category=${this.props.queryCategory}&sortby=timeAdded`;
    } else {
      nameUrl = '/tasks?sortby=name';
      dateUrl = '/tasks?sortby=timeAdded';
    }

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
            <a href={nameUrl} className="dropdown-item">Name</a>
            <a href={dateUrl} className="dropdown-item">Date</a>
          </div>
        </div>
        <TaskList todo={this.props} />
      </Layout>
    );
  }
}

export default Tasks;
