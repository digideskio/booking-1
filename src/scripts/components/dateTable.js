var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');

var DateControl = React.createClass({
	render: function () {
	    return (
        <div className="topContainerDate">
            <table className="dateTable" cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr className="days">
                        <td className="tzlabel"></td>
                        <th>
                            <span className="dayname">9/14 (週一)</span>
                        </th>
                        <th>
                            <span className="dayname">9/15 (週二)</span>
                        </th>
                        <th>
                            <span className="dayname">9/16 (週三)</span>
                        </th>
                        <th>
                            <span className="dayname">9/17 (週四)</span>
                        </th>
                        <th>
                            <span className="dayname">9/18 (週五)</span>
                        </th>
                        <th>
                            <span className="dayname">9/19 (週六)</span>
                        </th>
                        <th>
                          <span className="dayname">9/20 (週日)</span>
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className="border">
            </div>
            <div id="scrolltimedeventswk" className="wbkt wk-scrolltimedevents">
                <div className="mainwrapper">
                    <table className="timedevents">
                        <tbody>
                            <tr>
                                <td className="time-pris">
                                    <div>
                                        <div className="time-pri">上午11點</div>
                                    </div>
                                    <div>
                                        <div className="time-pri">下午1點</div>
                                    </div>
                                    <div>
                                        <div className="time-pri">下午3點</div>
                                    </div>
                                    <div>
                                        <div className="time-pri">下午5點</div>
                                    </div>
                                    <div>
                                        <div className="time-pri">下午7點</div>
                                    </div>
                                    <div>
                                        <div className="time-pri">下午9點</div>
                                    </div>
                                    <div id="nowptr" className="tg-nowptr"></div>
                                </td>
                                <td className="col">
                                    <div className="eventwrapper">
                                        <div className="gutter">1,</div>
                                    </div>
                                </td>
                                <td className="col">
                                    <div className="eventwrapper">
                                        <div className="gutter">2,</div>
                                    </div>
                                </td>
                                <td className="col">
                                    <div className="eventwrapper">
                                        <div className="gutter">3,</div>
                                    </div>
                                </td>
                                <td className="col">
                                    <div className="eventwrapper">
                                        <div className="gutter">4,</div>
                                    </div>
                                </td>
                                <td className="col-today">
                                    <div className="eventwrapper">
                                        <div className="gutter">5,</div>
                                    </div>
                                </td>
                                <td className="col">
                                    <div className="eventwrapper">
                                        <div className="gutter">6,</div>
                                    </div>
                                </td>
                                <td className="col">
                                    <div className="eventwrapper">
                                        <div className="gutter">7</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    	);
	}
});

module.exports = DateControl;