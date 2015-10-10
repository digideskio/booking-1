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
        return {
            thisWeek: this.props.thisWeekIndex
        };        
    },
    componentWillReceiveProps:function(props){
        this.setState({
            thisWeek: props.thisWeekIndex
        });
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