var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var Home = React.createClass({
  	getInitialState: function() {
  		var user = UserStore.getInfo().currentUser;
    	return {
    		userName: user.name,
    		userPhone: user.phone
    	};
  	},
	render: function () {
	    return (
	    	<div className = "wrapper">
	    		
	    	</div>
    	);
	}
});

module.exports = Home;