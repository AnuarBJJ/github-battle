var React = require('react');
var transparentBG = require('../styles').transparentBG;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron col-sm-12">
				<div className="form-group">
				</div>
				<Link to="/playerOne">
					<button className="btn btn-lrg btn-success">Lets get started</button>
				</Link>
			</div>
			)
	}
})

module.exports = Home;