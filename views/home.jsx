var React = require('react');
var DefaultLayout = require('./layouts/default');
// any javsacript related stuff needs to be enclosed in {} if inside a html tag

class List extends React.Component {
	render(){
		var actionUrl = '/'+this.props.id+'/edit'
		var lists = 
		<li>
			{this.props.id} {this.props.item} {this.props.location} {this.props.timerecorded} {this.props.due} 
			<form method="GET" action={actionUrl}>
			<input type="submit" value="edit"/>
			</form> 
		</li>
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
				<form method="GET" action="/new">
					<input type="submit" value="new"/>
				</form>
				<div>
					<ul>
						{itemLists}
					</ul>
				</div>
			</DefaultLayout>
		)
	}
}

module.exports = Home;