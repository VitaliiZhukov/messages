require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/App.css');

import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import MessageComponent from './MessageComponent';

class AppComponent extends React.Component {
	state = {
		messages: []
	}

	componentDidMount() {
		const params = {
			user: 'exercise',
			password: '123456'
		};

		$.ajax({
			type: 'POST',
			url: 'http://test.easybook.ie/api/exercise_get_comments',
			data: params,
			success: function(data) {
				console.log(data);
			}
		});
		// let self = this;
		// $.getJSON('./data/data.json', function(result) {
		// 	console.log(result.values);
		// 	const messages = _.sortBy(result.values, function(item){
		// 		return new Date(item.date);
		// 	});
		// 	self.setState({
		// 		messages: messages
		// 	});
		// });
	}

  render() {
  	let messages = [];
  	this.state.messages.forEach(function(mes, index){
  		messages.push(<MessageComponent message={mes} key={index} />);
  	});
    return (
      <div className="index">
      	{messages}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
