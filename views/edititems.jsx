var React = require('react');
var DefaultLayout = require('./layouts/default');

class Edit extends React.Component {
	render(){
		var actionUrl = '/'+this.props.itemid+'?_method=PUT';
		return(
			<DefaultLayout title="Edit item" subtitle="EDIT ITEM">
				<form method="POST" action={actionUrl}>
					<div class="input-group">
						<div class="input-group-prepend">
    						<span class="input-group-text" id="">Item id</span>
  						</div>
						<input class="form-control" name="itemid" value={this.props.itemid} readOnly="readonly"/>
						<div class="input-group-prepend">
    						<span class="input-group-text" id="">Item</span>
  						</div>
						<input class="form-control" name="item" value={this.props.item}/>
						<div class="input-group-prepend">
    						<span class="input-group-text" id="">Location</span>
  						</div>
						<input class="form-control" name="location" value={this.props.location}/>
						<div class="input-group-prepend">
    						<span class="input-group-text" id="">Due date</span>
  						</div>
						<input class="form-control" name='due' value={this.props.due}/>
						<br/>
						<br/>
						<input type="submit" value="Edit"/>
					</div>
				</form>
			</DefaultLayout>
		)
	}
}

module.exports = Edit;