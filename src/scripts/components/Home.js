var React = require('react');
var AppActions = require('../actions/AppActions.js');
var UserStore = require('../stores/UserStore.js');
var DateControl = require('../components/dateControl.js');
var DateTable = require('../components/dateTable.js');

var getAppState = function getAppState() {
    var state = {};
    var user = UserStore.getInfo().currentUser;
    if(user == undefined){
      var user ={};
      user.name = "123";
      user.phone = "123";
    }
    var state = {
        userName: user.name,
        userPhone: user.phone
    }
    return state;
}

var date = new Date();

var Home = React.createClass({
    mapToday:function(index){
        var dayAry = [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ];
        if(typeof index === "string"){
            return dayAry.indexOf(index);
        }else{
            return dayAry[index]; 
        }
    },
    currentDate : function(){
        var currentdate = new Date();

        var datetime = "Last Sync: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();

          var date = {
            year: currentdate.getFullYear(),
            month: (currentdate.getMonth()+1),
            date: currentdate.getDate(),
            today:this.mapToday(currentdate.getDay())
          }
          return date;
    },
  	getInitialState: function() {
        var currentDate = this.currentDate();
        var state = {
            user: {
                userName: getAppState().userName,
                userPhone: getAppState().userPhone,
            },
            date :{
                year : currentDate.year,
                month : currentDate.month,
                date : currentDate.date,
                today : currentDate.today          
            }
        }
    	return state;
  	},
    showDay : function(opts){
        if(opts.action  == "next"){
            if(opts.today){
                var yearIndex = opts.today.year;
                var monthIndex = opts.today.month;
                var dateIndex = opts.today.date; 
                var dayIndex = this.mapToday(opts.today.today.replace("(", "星期").replace(")",""));
            }else{
                var yearIndex = this.state.date.year;
                var monthIndex = this.state.date.month;
                var dateIndex = this.state.date.date; 
                var dayIndex = this.mapToday(this.state.date.today);   
            }

            switch (monthIndex) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    if(dateIndex == 31){
                        dateIndex = 1;
                        if(monthIndex==12){
                            monthIndex = 1;
                            yearIndex += 1;
                        }else{
                            monthIndex += 1;
                        }
                    }else{
                        dateIndex += 1;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if(dateIndex == 30){
                        dateIndex = 1;
                        monthIndex += 1;
                    }else{
                        dateIndex += 1;
                    }
                    break;
                case 2:
                    if(yearIndex % 4 == 0 ){
                        if(dateIndex == 29){
                            dateIndex = 1;
                            monthIndex += 1;
                        }else{
                            dateIndex += 1;
                        }
                        if(yearIndex % 100 == 0){
                            if(yearIndex % 400 == 0){
                                if(dateIndex == 29){
                                    dateIndex = 1;
                                    monthIndex += 1;
                                }else{
                                    dateIndex += 1;
                                }
                            }else{
                                if(dateIndex == 28){
                                    dateIndex = 1;
                                    monthIndex += 1;
                                }else{
                                    dateIndex += 1;
                                }
                            }
                        }
                    }else{
                        if(dateIndex == 28){
                            dateIndex = 1;
                            monthIndex += 1;
                        }else{
                            dateIndex += 1;
                        }
                    }
                    break;
            }

            if(dayIndex  === 6 ){
                dayIndex = 0;
            }else{
                dayIndex += 1;
            }

            return {
                year : yearIndex,
                month : monthIndex,
                date : dateIndex,
                today : this.mapToday(dayIndex)
            };

        }else if (opts.action == "last"){
            var dayIndex = this.mapToday(this.state.date.today);
            var dateIndex =  this.state.date.date;
            var monthIndex = this.state.date.month;
            var yearIndex = this.state.date.year;
            
            switch (monthIndex) {
                case 5:
                case 7:
                case 10:
                case 12:
                    if(dateIndex == 1){
                        dateIndex = 30;
                        monthIndex -= 1;
                    }else{
                        dateIndex -= 1;
                    }
                    break;
                case 1:
                case 2:
                case 4:
                case 6:
                case 8:
                case 9:
                case 11:
                    if(dateIndex == 1){
                        dateIndex = 31;
                        if(monthIndex==1){
                            monthIndex = 12;
                            yearIndex -= 1;
                        }else{
                            monthIndex -= 1;
                        }
                    }else{
                        dateIndex -= 1;
                    }
                    break;
                case 3:
                    if(yearIndex % 4 == 0 ){
                        if(dateIndex == 1){
                            dateIndex = 29;
                            monthIndex -= 1;
                        }else{
                            dateIndex -= 1;
                        }
                        if(yearIndex % 100 == 0){
                            if(yearIndex % 400 == 0){
                                if(dateIndex == 1){
                                    dateIndex = 29;
                                    monthIndex -= 1;
                                }else{
                                    dateIndex -= 1;
                                }
                            }else{
                                if(dateIndex == 1){
                                    dateIndex = 28;
                                    monthIndex -= 1;
                                }else{
                                    dateIndex -= 1;
                                }
                            }
                        }
                    }else{
                        if(dateIndex == 1){
                            dateIndex = 28;
                            monthIndex -= 1;
                        }else{
                            dateIndex -= 1;
                        }
                    }
                    break;
            }

            if(dayIndex  === 0 ){
                dayIndex = 6;
            }else{
                dayIndex -= 1;
            }
            return {
                year : yearIndex,
                month : monthIndex,
                date : dateIndex,
                today : this.mapToday(dayIndex)
            };
        }
    },
    nextDay : function(){
        var date = this.showDay({action:"next"});
        this.setState({
            date : date
        });
        return date;
    },
    lastDay : function(){
        var date = this.showDay({action:"last"});
        this.setState({
            date : date
        });
        return date;
    },
    render: function () {
      return (
        <div className="home">
        	<div className = "wrapper">
                <DateControl date = {this.state.date} nextDay = {this.nextDay} lastDay={this.lastDay}/>
                <div className="time-pris">
                    <div>
                        <div className="tzlabel">這是備註標籤</div>
                    </div>
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
                </div>
                <DateTable date = {this.state.date} showDay = {this.showDay} />
            </div>
        </div>
      );
    }
});

module.exports = Home;