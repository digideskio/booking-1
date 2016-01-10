var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');
var DateHeader = require('../components/dateHeader.js');
var DateEventWrap = require('../components/dateEventWrap.js');

var DateControl = React.createClass({
    getInitialState: function() {
        var state = {
            todayIndex : this.dateToString(this.props.date),
            thisWeek : this.getNextSixDate(this.props.date,this.props.showDay),
            thisWeekIndex : []
        }
        return state;
    },
    componentWillMount: function(){
        let datesIndex = []
        this.state.thisWeek.map(function(e,i){
            datesIndex.push(this.dateToString(e));   
        },this);
        this.setState({
            thisWeekIndex : datesIndex
        });
        AppActions.saveDates(datesIndex);
    },
    shouldComponentUpdate : function(nextProps, nextState){
        var nextFirstIndex = this.dateToString(nextProps.date);
        if( (nextFirstIndex - this.state.todayIndex) >= 0){
            return true;
        }else{
            return false;
        }
    },
    componentWillReceiveProps:function(nextProps){
        var nextLastindex = this.dateToString(this.getNextSixDate(nextProps.date,nextProps.showDay)[6]);
        var orgWeek = DateStore.getDatesIndex();
        if(orgWeek.indexOf(nextLastindex)==-1){
            orgWeek.push(nextLastindex);
        }
        this.setState({
            thisWeek : this.getNextSixDate(nextProps.date,nextProps.showDay),
            thisWeekIndex : this.getNextSixIndex(this.dateToString(nextProps.date))
        });
    },  
    dateToString : function(date){
        let monthSpace = "0";
        let dateSpace = "0";
        if(date.month.toString().length != 1){
            monthSpace = "";
        }
        if(date.date.toString().length != 1){
            dateSpace = "";
        }
        return date.year.toString() + monthSpace + date.month + dateSpace + date.date;
    }, 
    getNextSixDate : function(first,showDay){
        var dates = [];
        var firstDay = {
            year : first.year,
            month : first.month,
            date : first.date,
            today : first.today.replace("星期", "(") + ")"
        };
        dates.push(firstDay);
        if(showDay){
            for(let loopIndex = 1;loopIndex<7;loopIndex++){
                dates.push(
                    showDay({
                        today : dates[loopIndex - 1],
                        action : "next"
                    })
                );
                dates[loopIndex].today = dates[loopIndex].today.replace("星期", "(") + ")";
            }
        }
        return dates;
    },
    getNextSixIndex: function(index){
        var firstIndex = DateStore.getDatesIndex().indexOf((index));
        var lastIndex = firstIndex + 7;
        var currentIndex = firstIndex - DateStore.getDatesIndex().length;
        return DateStore.getDatesIndex().slice( currentIndex, lastIndex );
    },   
	render: function () {
        return (
            <table className="dataTable-table" cellPadding="0" cellSpacing="0">
                <thead>
                  <DateHeader thisWeek = {this.state.thisWeek} />
                </thead> 
                <tbody>
                    <DateEventWrap thisWeekIndex = {this.state.thisWeekIndex} />
                </tbody>
            </table>
        );
	}
});

module.exports = DateControl;