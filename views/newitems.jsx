var React = require('react');
var DefaultLayout = require('./layouts/default');

class New extends React.Component {
	render(){
		return(
			<DefaultLayout title="Add new item" subtitle="ADD NEW ITEM">
				<form method="POST" action="/home">
					<div class="form-row">
						<div class="col-md-6 mb-4">
							<label for="validationCustom01">Item Id</label>
							<input class="form-control" id="validationCustom01" name="itemid" value={this.props.itemid}/>
						</div>
						<div class="col-md-6 mb-4">
    						<label for="validationCustom02">Item</label>
							<input class="form-control" id="validationCustom02" name="item" value={this.props.item}/>
						</div>
					</div>
					<button class="btn btn-primary btn-lg btn-block" type="submit">New</button>
				</form>
			</DefaultLayout>
		)
	}
}

module.exports = New;