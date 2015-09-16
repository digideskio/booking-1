var React = require('react');
var Link = require('react-router').Link;
var Router = require('react-router');

var Index = React.createClass({
	md : new MobileDetect(window.navigator.userAgent),
	login:function(e){
		if( !this.state.name || !this.state.phone) {
			alert('聯絡電話跟名字都必須填喔。');
			return false;
		}
	},
  	getInitialState: function() {
    	return {
    		name:'',
    		phone: ''
    	};
  	},
	handleNameChange: function(event) {
		this.setState({name: event.target.value});
	},
	handlePhoneChange: function(event) {
		this.setState({phone: event.target.value});
	},
	render: function () {
	return (
		<div className='container-fluid text-center index'>
		    <div className="row">
		        <div className="col-xs-4 col-xs-offset-4 logo">
		    		<h2 >Index</h2>
	    		</div>
		    </div>
		    <div className='row'>
		        <div className="col-xs-4 col-xs-offset-4 name">
		        <span>姓名：</span>
		        	<input type='text' value={this.state.name} onChange={this.handleNameChange} className='nameInput' />
	    		</div>
		    </div>
		    <div className='row'>
		        <div className="col-xs-4 col-xs-offset-4 phone">
		        <span>電話：</span>
	    			<input type='text' value={this.state.phone} onChange={this.handlePhoneChange} className='phoneInput' />
	    		</div>
		    </div>
			<div className='row'>
		        <div className="col-xs-4 col-xs-offset-4 logo">
		        	<Link to="home" params={{userName: this.state.name, userPhone:this.state.phone }} onClick={this.login} >Login</Link>
	    		</div>
	    	</div>
		</div>
		);
	}
});

module.exports = Index;