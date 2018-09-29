import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/tasks" className="nav-link">Tasks</a>
          </li>
          <li className="nav-item">
            <a href="/categories" className="nav-link">Categories</a>
          </li>
        </ul>
        <a href="/tasks/new" className="btn btn-outline-primary">+ New Task</a>
      </nav>
    );
  }
}

export default Navigation;
