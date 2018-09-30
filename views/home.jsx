var React = require('react');
var DefaultLayout = require('./layouts/default');
// any javsacript related stuff needs to be enclosed in {} if inside a html tag

class List extends React.Component {
	render(){
		var actionUrl = '/'+this.props.id+'/edit'
		var actionUrl2 = '/'+this.props.id+'?_method=delete'
		var lists = 
		<tr>
			<td>{this.props.id}</td>
			<td>{this.props.item}</td> 
			<td>{this.props.location}</td>
			<td>{this.props.due}</td>
			<td>{this.props.timerecorded}</td>
			<td>
				<form method="GET" action={actionUrl}>
				<input type="submit" value="Edit"/>
				</form> 
			</td>
			<td>
				<form method="POST" action={actionUrl2}>
					<input name="id" type="hidden" value={this.props.id}/>
					<input type="submit" value="Delete"/>
				</form>
			</td>
		</tr>
		return ( lists )
	}
}

class Home extends React.Component {
	render(){
		let itemLists = this.props.items.map(iterator=>{
			return (
				<List id={iterator.itemid} item={iterator.item} location={iterator.location} timerecorded={iterator.timerecorded} due={iterator.due}/>
			)
		});
		return(
			<DefaultLayout title="Home page" subtitle="HOME PAGE">
				<div class="new">
					<form method="GET" action="/new">
						<input type="submit" value="New"/>
					</form>
				</div>
				<div>
					<table class="table">
						<tr>
							<th>Item Id</th>
							<th>Item</th>
							<th>Item location</th>
							<th>Item due</th>
							<th>Time of entry</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
							{itemLists}
					</table>
				</div>
			</DefaultLayout>
		)
	}
}

module.exports = Home;