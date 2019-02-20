import React, { Component } from 'react';
import MessageHistory from './MessageHistory.js'

class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user.username}</div>
        <MessageHistory
          user={this.props.user}
          messages={this.props.messages}
        />

        {/* <div>
          <form className="input-group">
            <input type="text" className="form-control" placeholder="Enter your message..." />
            <div className="input-group-append">
              <button className="btn submit-button" disabled={this.isDisabled()}>
                SEND
              </button>
            </div>
          </form>
        </div> */}
      </div>
    )
  }
}
export default ChatWindow
