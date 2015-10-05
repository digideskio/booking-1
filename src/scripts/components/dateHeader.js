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
            var second = this.props.showDay({
                today : first,
                action : "next"
            });
            dates.push(second);

            second.today = second.today.replace("星期", "(") + ")";
            var third = this.props.showDay({
                today : second,
                action : "next"
            });
            dates.push(third);

            third.today = third.today.replace("星期", "(") + ")";
            var fourth = this.props.showDay({
                today : third,
                action : "next"
            });
            dates.push(fourth);

            fourth.today = fourth.today.replace("星期", "(") + ")";
            var fifth = this.props.showDay({
                today : fourth,
                action : "next"
            });
            dates.push(fifth);

            fifth.today = fifth.today.replace("星期", "(") + ")";
            var sixth = this.props.showDay({
                today : fifth,
                action : "next"
            });
            dates.push(sixth);

            sixth.today = sixth.today.replace("星期", "(") + ")";
            var seventh = this.props.showDay({
                today : sixth,
                action : "next"
            });
            seventh.today = seventh.today.replace("星期", "(") + ")";
            dates.push(seventh);

            console.log(dates);
        }

        var dateHtml = dates.map(function(e,index){
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