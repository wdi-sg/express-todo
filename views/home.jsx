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
			<td>{this.props.timerecorded}</td>
			<td>
				<form method="GET" action={actionUrl}>
				<button type="submit" class="btn-sm btn-outline-dark">Edit</button>
				</form> 
			</td>
			<td>
				<form method="POST" action={actionUrl2}>
					<input name="id" type="hidden" value={this.props.id}/>
					<button type="submit" class="btn-sm btn-outline-dark">Delete</button>
				</form>
			</td>
			<td>
				<button type="submit" class="btn-sm btn-outline-dark">Done</button>
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
						<button class="btn btn-primary btn-lg btn-block" type="submit">New</button>
					</form>
				</div>
				<div>
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Item Id</th>
								<th>Item</th>
								<th>Time of entry</th>
								<th>Edit</th>
								<th>Delete</th>
								<th>Completed</th>
							</tr>
						</thead>
						<tbody>
							{itemLists}
						</tbody>
					</table>
				</div>
			</DefaultLayout>
		)
	}
}

module.exports = Home;