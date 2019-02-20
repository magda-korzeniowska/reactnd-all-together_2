import React, { Component } from 'react';
import MessageHistory from './MessageHistory.js';
import AddMessage from './AddMessage.js';

class ChatWindow extends Component {

  onNewMessage = (message) => {
    this.props.onNewMessage(this.props.user.username, message)
  }

  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user.username}</div>
        <MessageHistory
          user={this.props.user}
          messages={this.props.messages}
        />
        <AddMessage onNewMessage={this.onNewMessage}/>
      </div>
    )
  }
}
export default ChatWindow
