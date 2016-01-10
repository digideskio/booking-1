var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');

var DateControl = React.createClass({
    getInitialState: function() {
        return null;
    },
	render: function () {
        var html = Array.apply(null,Array(6)).map(function(e,index){
            return (
                <div key={index} className="dateEvent">
                    <div className="">{this.props.dateIndex}</div>
                </div>
            );
        },this);
	    return (
            <td className="dataTable-table-content">
                {html}                               
            </td>
    	);
	}
});

module.exports = DateControl;