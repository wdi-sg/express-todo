const React = require('react');

class FormText extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="task">{this.props.label}</label>
        <input
          className="form-control"
          type="text"
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultValue}
          pattern=".*[a-zA-Z]+.*"
          title="At least 1 character"
          required
        />
      </div>
    );
  }
}

module.exports = FormText;
