var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');

var DateControl = React.createClass({
    getInitialState: function() {
        var state = {
            year : this.props.date.year,
            month : this.props.date.month,
            date : this.props.date.date,
            today : this.props.date.today
        }
        return state;
    },
    nextDay : function(){
        if(this.props.nextDay){
            var date = this.props.nextDay();
            this.setState({
                year : date.year,
                month : date.month,
                date : date.date,
                today: date.today
            });
        }
    },
    lastDay : function(){
        if(this.props.lastDay){
            var date = this.props.lastDay();
            this.setState({
                year : date.year,
                month : date.month,
                date : date.date,
                today: date.today
            });
        }
    },
    render: function () {
        return (
            <div className="dateControl">
                <table className="nav-table">
                    <tbody>
                        <tr>
                            <td className="date-nav-today">
                                <div className="button">今天</div>
                            </td>
                            <td className="date-nav-prev">
                                <div className="navBack" onClick = {this.lastDay}>
                                    <div className="navbutton navBack glyphicon glyphicon-menu-left"></div>
                                </div>
                            </td>
                            <td className="date-nav-next">
                                <div className="navForward" onClick = {this.nextDay}>
                                    <div className="navbutton navForward glyphicon glyphicon-menu-right"></div>
                                </div>
                            </td>
                            <td className="dateBox">
                                <div className="currentDate">{this.state.year}年{this.state.month}月{this.state.date}日 {this.state.today}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
    	);
    }
});

module.exports = DateControl;