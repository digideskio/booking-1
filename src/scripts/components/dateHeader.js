var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');

var DateControl = React.createClass({
    getInitialState: function() {
        // var currentDate = this.currentDate();
        var state = {
            year : this.props.date.year,
            month : this.props.date.month,
            date : this.props.date.date,
            today : this.props.date.today.replace("星期", "(") + ")"
        }
        return state;
    },
	render: function () {
	    return (
            <tr className="days">
                <th>
                    <span className="dayname">{this.state.today}</span>
                </th>
                <th>
                    <span className="dayname">9/15 (週二)</span>
                </th>
                <th>
                    <span className="dayname">9/16 (週三)</span>
                </th>
                <th>
                    <span className="dayname">9/17 (週四)</span>
                </th>
                <th>
                    <span className="dayname">9/18 (週五)</span>
                </th>
                <th>
                    <span className="dayname">9/19 (週六)</span>
                </th>
                <th>
                  <span className="dayname">9/20 (週日)</span>
                </th>
            </tr>
    	);
	}
});

module.exports = DateControl;