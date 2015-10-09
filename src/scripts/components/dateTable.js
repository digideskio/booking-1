var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateHeader = require('../components/dateHeader.js');
var DateEventWrap = require('../components/dateEventWrap.js');

var DateControl = React.createClass({
	render: function () {
	    return (
        <div className="topContainerDate">
            <table className="dateTable" cellPadding="0" cellSpacing="0">
                <tbody>
                    <DateHeader date = {this.props.date} showDay = {this.props.showDay}/>
                    <DateEventWrap date = {this.props.date} />
                </tbody>
            </table>
        </div> 
    	);
	}
});

module.exports = DateControl;