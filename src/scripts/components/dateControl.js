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
            <div className="dateControl clearfix">

                <h3 className="dateControl-title">今天{this.state.year}年{this.state.month}月{this.state.date}日 {this.state.today}</h3>

                <span className="dateControl-comment">這是備註</span>

                <div className="dateControl-handler">
                    <a href="javascript:" className="navBack" onClick = {this.lastDay}>
                        <span className="navbutton navBack glyphicon glyphicon-menu-left"></span>
                    </a>
                    <a href="javascript:" className="navForward" onClick = {this.nextDay}>
                        <span className="navbutton navForward glyphicon glyphicon-menu-right"></span>
                    </a>
                </div>

            </div>
    	);
    }
});

module.exports = DateControl;