var React = require('react');
var DefaultLayout = require('./layouts/default');

class List extends React.Component {
	render(){
		var lists = <li>{this.props.id} {this.props.item} {this.props.location} {this.props.timerecorded} {this.props.due}</li>
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
			<DefaultLayout title="Home page" subtitle="Home page">
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