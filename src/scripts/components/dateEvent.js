var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');

var DateControl = React.createClass({
    getInitialState: function() {
        return null;
    },
	render: function () {
	    return (
            <td className="col">
                <div className="eventwrapper">
                    <div className="gutter">{this.props.dateIndex}</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">{this.props.dateIndex}</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">{this.props.dateIndex}</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">{this.props.dateIndex}</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">{this.props.dateIndex}</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">{this.props.dateIndex}</div>
                </div>                                
            </td>
    	);
	}
});

module.exports = DateControl;