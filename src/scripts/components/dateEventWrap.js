var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateEventWrap = require('../components/dateEvent.js');

var DateControl = React.createClass({
	render: function () {
	    return (
            <tr>
                <DateEventWrap/>
                <td className="col">
                    <div className="eventwrapper">
                        <div className="gutter">2</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">2</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">2</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">2</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">2</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">2</div>
                    </div>                                
                </td>                                
                <td className="col">
                    <div className="eventwrapper">
                        <div className="gutter">3</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">3</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">3</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">3</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">3</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">3</div>
                    </div>                                
                </td>
                <td className="col">
                    <div className="eventwrapper">
                        <div className="gutter">4</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">4</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">4</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">4</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">4</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">4</div>
                    </div>                                
                </td>
                <td className="col">
                    <div className="eventwrapper">
                        <div className="gutter">5</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">5</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">5</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">5</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">5</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">5</div>
                    </div>                                
                </td>
                <td className="col">
                    <div className="eventwrapper">
                        <div className="gutter">6</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">6</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">6</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">6</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">6</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">6</div>
                    </div>                                
                </td>
                <td className="col">
                    <div className="eventwrapper">
                        <div className="gutter">7</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">7</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">7</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">7</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">7</div>
                    </div>
                    <div className="eventwrapper">
                        <div className="gutter">7</div>
                    </div>                                
                </td>
            </tr>
    	);
	}
});

module.exports = DateControl;