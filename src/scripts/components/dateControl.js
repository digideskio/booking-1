var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');

var currentDate = (function(){
  var currentdate = new Date(); 
  var datetime = "Last Sync: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();

    var today = (function(){
      var dayAry = [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ];
      return dayAry[(currentdate.getDay()-1)];
    }());

    var date = {
      year: currentdate.getFullYear(),
      month: (currentdate.getMonth()+1),
      day: currentdate.getDate(),
      today:today
    }
    return date;
}());

var DateControl = React.createClass({
  	getInitialState: function() {

      var state = {
        year : currentDate.year,
        month : currentDate.month,
        day : currentDate.day,
        today : currentDate.today
      }

    	return currentDate;
  	},
	render: function () {
	    return (
          <div className="dateControl">
              <table className="nav-table">
                  <tbody>
                      <tr>
                          <td className="date-nav-today">
                              <div className="button">今天</div>
                          </td>
                          <td className="date-nav-prev">
                              <div className="navBack">
                                  <div className="navbutton navBack glyphicon glyphicon-menu-left"></div>
                              </div>
                          </td>
                          <td className="date-nav-next">
                              <div className="navForward">
                                  <div className="navbutton navForward glyphicon glyphicon-menu-right"></div>
                              </div>
                          </td>
                          <td className="dateBox">
                              <div className="currentDate">{this.state.year}年{this.state.month}月{this.state.day}日 {this.state.today}</div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>   
    	);
	}
});

module.exports = DateControl;