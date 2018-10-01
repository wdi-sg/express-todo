var React = require('react');
var DefaultLayout = require('./layouts/default');

class Edit extends React.Component {
	render(){
		var actionUrl = '/'+this.props.itemid+'?_method=PUT';
		return(
			<DefaultLayout title="Edit item" subtitle="EDIT ITEM">
				<form class="needs-validation" method="POST" action={actionUrl}>
					<div class="form-row">
						<div class="col-md-6 mb-4">
							<label for="validationCustom01">Item Id</label>
							<input class="form-control" id="validationCustom01" name="itemid" value={this.props.itemid} readOnly="readonly"/>
						</div>
						<div class="col-md-6 mb-4">
    						<label for="validationCustom02">Item</label>
							<input class="form-control" id="validationCustom02" name="item" value={this.props.item}/>
						</div>
					</div>
					<button class="btn btn-primary btn-lg btn-block" type="submit">Edit</button>
				</form>
			</DefaultLayout>
		)
	}
}

module.exports = Edit;