var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');

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
        };
        dates.push(first);

        var dateToString = function(date){
            let space = "0";
            if(date.date.toString().length != 1){
                space = "";
            }
            return date.year.toString() + date.month + space + date.date;
        };

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
        }

        var dateHtml = dates.map(function(e,index){
            if(this.datesToStore.length <= 6){
                this.datesToStore.push(dateToString(e));    
            }else if(index == 6){
                if( dateToString(first) - this.datesToStore[0] > 0){                    
                    if(this.datesToStore.indexOf(dateToString(e)) == -1){
                        this.datesToStore.push(dateToString(e)); 
                    }
                }
            }
            return (<th  key={index}>
                        <span className="dayname"> {e.month}/{e.date}{e.today} </span>
                    </th>
                    )

        }, this);
        AppActions.saveDates(this.datesToStore);
        // console.log(DateStore.getDatesIndex());
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