var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');
var AppConstants = require('../constants/AppConstants.js');

var mainAPP = React.createClass({
    render: function() {
        return (
          	<RouteHandler/>
        );
    }
});

module.exports = mainAPP;