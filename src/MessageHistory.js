import React from 'react';
import PropTypes from 'prop-types';

const MessageHistory = (props) => {
  return (
    <ul className="message-list">
      {props.messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === props.user.username ? 'message sender' : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  )
}

MessageHistory.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
}

export default MessageHistory
