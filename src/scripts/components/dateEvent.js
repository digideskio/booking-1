var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');

var DateControl = React.createClass({
	render: function () {
	    return (
            <td className="col">
                <div className="eventwrapper">
                    <div className="gutter">1</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">1</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">1</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">1</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">1</div>
                </div>
                <div className="eventwrapper">
                    <div className="gutter">1</div>
                </div>                                
            </td>
    	);
	}
});

module.exports = DateControl;