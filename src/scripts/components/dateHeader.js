var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');

var DateControl = React.createClass({
    getInitialState: function() {
        var state = {
            thisWeek : this.props.thisWeek
        }
        return state;
    },    
    componentWillReceiveProps:function(props){
        this.setState({
            thisWeek : props.thisWeek
        })
    },
	render: function () {
        var dateHtml = this.state.thisWeek.map(function(e,index){
            return (
                <th className="dates" key={index}>
                    <span > {e.month}/{e.date}{e.today} </span>
                </th>
            );

        }, this);
        return (
            <tr className="dataTable-table-header">
                <th>
                </th>
                {dateHtml}
            </tr>
        );
	}
});

module.exports = DateControl;