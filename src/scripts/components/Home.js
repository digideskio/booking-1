var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateControl = require('../components/dateControl.js');

var getAppState = function getAppState() {
  var state = {};
  var user = UserStore.getInfo().currentUser;
  var state = {
      userName: user.name,
      userPhone: user.phone
  }
  return state;
}

var Home = React.createClass({
  	getInitialState: function() {
    	return getAppState();
  	},
	render: function () {
	    return (
        <div className="home">
  	    	<div className = "wrapper">
            <DateControl/>  	
        </div>
      </div>
    	);
	}
});

module.exports = Home;