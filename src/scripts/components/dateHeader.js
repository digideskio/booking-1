var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');

var DateControl = React.createClass({
    getInitialState: function() {
        var state = {
            todayIndex : this.dateToString(this.props.date),
            thisWeek : this.nextFewDay(this.props.date,this.props.showDay)
        }
        return state;
    },
    componentWillMount: function(){
        let datesIndex = []
        this.setState({
        });
        this.state.thisWeek.map(function(e,i){
            datesIndex.push(this.dateToString(e));   
        },this);
        AppActions.saveDates(datesIndex);
    },
    shouldComponentUpdate : function(nextProps, nextState){
        var nextFirstIndex = this.dateToString(nextProps.date);
        var nextLastindex = this.dateToString(nextState.thisWeek[6]);
        var orgWeek = DateStore.getDatesIndex();
        if( (nextFirstIndex - this.state.todayIndex) >= 0){
            if(orgWeek.indexOf(nextLastindex)==-1){
                orgWeek.push(nextLastindex);
            }
            return true;
        }else{
            return false;
        }
    },
    componentWillReceiveProps:function(props){
        this.setState({
            thisWeek : this.nextFewDay(props.date,props.showDay)
        })
    },
    componentWillUpdate : function(){

    },      
    dateToString : function(date){
        let space = "0";
        if(date.date.toString().length != 1){
            space = "";
        }
        return date.year.toString() + date.month + space + date.date;
    },    
    nextFewDay : function(first,showDay){
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
	render: function () {
        var dateHtml = this.state.thisWeek.map(function(e,index){
            return (<th  key={index}>
                        <span className="dayname"> {e.month}/{e.date}{e.today} </span>
                    </th>
                    )

        }, this);
        return (
            <tr className="days">
                {dateHtml}
            </tr>
        );
	}
});

module.exports = DateControl;