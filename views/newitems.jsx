var React = require('react');
var DefaultLayout = require('./layouts/default');

class New extends React.Component {
	render(){
		return(
			<DefaultLayout title="Add new item" subtitle="ADD NEW ITEM">
				<form method="POST" action="/home">
					<p>Item Id</p>
					<input name="itemid"/>
					<p>Item</p>
					<input name="item"/>
					<p>Location</p>
					<input name="location"/>
					<p>Due date</p>
					<input name='due'/>
					<br/>
					<br/>
					<input type="submit" value="new"/>
				</form>
			</DefaultLayout>
		)
	}
}

module.exports = New;