var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');

var DateControl = React.createClass({
    getInitialState: function() {
        var state = {
            year : this.props.date.year,
            month : this.props.date.month,
            date : this.props.date.date,
            today : this.props.date.today.replace("星期", "(") + ")"
        }
        return state;
    },
    datesToStore:[],
    showDay : function(){
        var dates = [];
        var first = {
            year : this.props.date.year,
            month : this.props.date.month,
            date : this.props.date.date,
            today : this.props.date.today.replace("星期", "(") + ")"
        }
        dates.push(first);
        if(this.props.showDay){
            for(var loopIndex = 1;loopIndex<7;loopIndex++){
                dates[loopIndex] = (function(loopIndex){
                    return this.props.showDay({
                        today : dates[loopIndex - 1],
                        action : "next"
                    });  
                }.bind(this,loopIndex)());
                dates[loopIndex].today = dates[loopIndex].today.replace("星期", "(") + ")";
            }
            console.log(dates);
        }

        var dateHtml = dates.map(function(e,index){
            var space = "0";
            if(e.date.toString().length != 1){
                space = "";
            }
            this.datesToStore.push(e.year.toString() +e.month + space + e.date);
            return (<th  key={index}>
                    <span className="dayname"> {e.month}/{e.date}{e.today} </span>
                </th>
                )
        }, this);
        return dateHtml;
    },
	render: function () {
	    return (
            <tr className="days">
                {this.showDay()}
            </tr>
    	);
	}
});

module.exports = DateControl;