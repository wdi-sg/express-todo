var React = require('react');
var DefaultLayout = require('./layouts/default');

class Edit extends React.Component {
	render(){
		var actionUrl = '/'+this.props.itemid+'?_method=PUT';
		return(
			<DefaultLayout title="Edit item" subtitle="EDIT ITEM">
				<form method="POST" action={actionUrl}>
					<p>Item Id</p>
					<input name="itemid" value={this.props.itemid} readOnly="readonly"/>
					<p>Item</p>
					<input name="item" value={this.props.item}/>
					<p>Location</p>
					<input name="location" value={this.props.location}/>
					<p>Due date</p>
					<input name='due' value={this.props.due}/>
					<br/>
					<br/>
					<input type="submit" value="Edit"/>
				</form>
			</DefaultLayout>
		)
	}
}

module.exports = Edit;