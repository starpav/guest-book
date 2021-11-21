import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Guest Board</h2>
      
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        <div className={'message-div'}>
          <p key={i} className={message.premium ? 'is-premium' : ''}>
            <strong>{message.sender}</strong>:<br/>
            {message.text}<br/>
            <i><small>{message.sendTime}</small></i>
          </p>
        </div>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
