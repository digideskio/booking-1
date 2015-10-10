var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateStore = require('../stores/DateStore.js');
var DateEvent = require('../components/dateEvent.js');

var DateControl = React.createClass({
    getDefaultProps: function () {
        //預設 Props，確保有 Props資料，當母元件並未傳值時。
    },
    getInitialState: function() {
        var firstIndex = this.transDate(this.props.date);
        return {
            thisWeek: this.nextFewDay(firstIndex)
        };
    },
    shouldComponentUpdate : function(nextProps, nextState){
        var nextFirstIndex = this.transDate(nextProps.date);
        var orgWeek = DateStore.getDatesIndex();
        if( (nextFirstIndex- orgWeek[0]) >= 0 ){
            return true;
        }else{
            return false;
        }
    },
    componentWillReceiveProps:function(props){
        var firstIndex = this.transDate(props.date);
        this.setState({
            thisWeek: this.nextFewDay(firstIndex)
        });
    },
    transDate: function(orgDate){
        var date = {
            year : orgDate.year,
            month : orgDate.month,
            date : orgDate.date,
            today : orgDate.today.replace("星期", "(") + ")"
        };
        var dateToString = function(date){
            let space = "0";
            if(date.date.toString().length != 1){
                space = "";
            }
            return date.year.toString() + date.month + space + date.date;
        };
        return dateToString(date);
    },
    nextFewDay: function(index){
        var firstIndex = DateStore.getDatesIndex().indexOf((index));
        var lastIndex = firstIndex + 7;
        var currentIndex = firstIndex - DateStore.getDatesIndex().length;
        return DateStore.getDatesIndex().slice( currentIndex, lastIndex );
    },
	render: function () {

        var dateHtml = this.state.thisWeek.map(function(e,i){
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