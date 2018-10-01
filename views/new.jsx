const React = require('react');

class New extends React.Component {
	render() {
		return (
			<form action = "/create-todo" method = "post"> 
				<label htmlFor="title">title</label>
				<input type="text" name="title" />

				<label htmlFor="id">id</label>
				<input type="number" name="id" />

				<label htmlFor="done">done</label>
				<input type="boolean" name="done" />
				<input type="submit" />
			</form>
		)
	}
}

module.exports = New;

//action in the form is the place you want to submit the form to
