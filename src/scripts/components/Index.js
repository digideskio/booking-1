var React = require('react');
var Link = require('react-router').Link;
var Router = require('react-router');
var AppActions = require('../actions/AppActions.js');

var Index = React.createClass({
	md : new MobileDetect(window.navigator.userAgent),
	login:function(e){
		if( !this.state.name || !this.state.phone) {
			alert('聯絡電話跟名字都必須填喔。');
			return false;
		}
		AppActions.createUser({
			name:this.state.name,
			phone:this.state.phone
		});
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
		<div className='index'>
			<div className='form'>
	    		<h2 className='form-title'>Please sign in</h2>
	    		<span className='form-outline'>姓名：</span>
	    		<input className='form-input input-name' type='text' value={this.state.name} onChange={this.handleNameChange} />
	        	<span className='form-outline'>電話：</span>
				<input className='form-input input-phone' type='text' value={this.state.phone} onChange={this.handlePhoneChange} />
	        	<Link className='form-submit btn btn-lg btn-primary btn-block' to="home" onClick={this.login} >Login</Link>
			</div>
		</div>
		);
	}
});

module.exports = Index;