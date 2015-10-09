var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');
var DateEvent = require('../components/dateEvent.js');

var DateControl = React.createClass({
    firstDateIndex:function(){
        var firstDate = {
            year : this.props.date.year,
            month : this.props.date.month,
            date : this.props.date.date,
            today : this.props.date.today.replace("星期", "(") + ")"
        };
        var dateToString = function(date){
            let space = "0";
            if(date.date.toString().length != 1){
                space = "";
            }
            return date.year.toString() + date.month + space + date.date;
        };
        var firstDate = dateToString(firstDate);
        var firstIndex = DateStore.getDatesIndex().indexOf((firstDate));
        var lastIndex = firstIndex + 7;
        var currentIndex = firstIndex - DateStore.getDatesIndex().length;
        return DateStore.getDatesIndex().slice( currentIndex, lastIndex );
    },
	render: function () {

        var dateHtml = this.firstDateIndex().map(function(e,i){
            return (
                    <DateEvent key={i} dateIndex = {e} />
                )
        },this);

        return (
            <tr>
                {dateHtml}
            </tr>
        );
	}
});

module.exports = DateControl;