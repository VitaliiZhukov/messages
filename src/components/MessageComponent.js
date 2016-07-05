'use strict';

import React from 'react';

require('styles//Message.scss');

class MessageComponent extends React.Component {
  render() {
  	const msg = this.props.message;
    return (
      <div className="message-component">
      	<div className="message__avatar">
      		<img src={msg.avatar}/>
      		<div className="message__date">
      			{msg.date}
      		</div>
      	</div>

      	<div className="message__text">
      		{msg.text}
      	</div>
      </div>
    );
  }
}

MessageComponent.displayName = 'MessageComponent';

// Uncomment properties you need
// MessageComponent.propTypes = {};
// MessageComponent.defaultProps = {};

export default MessageComponent;
