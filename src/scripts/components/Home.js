var React = require('react');

var Home = React.createClass({
  	getInitialState: function() {
    	return {
    		userName: this.props.params.userName,
    		userPhone: this.props.params.userPhone
    	};
  	},
	render: function () {
	    return (
	    	<div>
	    		<h2>Home</h2>
	    		<h2>{this.state.userName}</h2>
	    		<h2>{this.state.userPhone}</h2>
	    	</div>
    	);
	}
});

module.exports = Home;