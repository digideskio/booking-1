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
            thisWeekIndex: this.props.thisWeekIndex
        };
    },
    componentWillMount:function(){
        //Ajax and Save to Store
    },
    componentDidMount:function(){
        //Ajax and Save to Store
    },
    shouldComponentUpdate : function(nextProps, nextState){
        console.log(nextProps.thisWeekIndex[6]);
        //Ajax and Save to Store
        //promse when comeBack
        return true;
    },
    componentWillReceiveProps:function(props){
        this.setState({
            thisWeekIndex: props.thisWeekIndex
        });
    },
	render: function () {

        var dateHtml = this.state.thisWeekIndex.map(function(e,i){
            return (
                    <DateEvent key={i} dateIndex = {e} />
                )
        },this);

        return (
            <tr>
                <td className="dataTable-table-sidebar">
                        <div className="time-pri">上午11點</div>
                        <div className="time-pri">下午1點</div>
                        <div className="time-pri">下午3點</div>
                        <div className="time-pri">下午5點</div>
                        <div className="time-pri">下午7點</div>
                        <div className="time-pri">下午9點</div>
                </td>
                {dateHtml}
            </tr>
        );
	}
});

module.exports = DateControl;