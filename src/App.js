import React, { Component } from 'react';
import ChatWindow from './ChatWindow.js'
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [
  { username: 'Amy' },
  { username: 'John' }
];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  state = {
    messages: []   // { username: 'Amy', text: 'Hi, Jon!' }
  }

  onNewMessage = (username, message) => {
    const newMessage = {
      ['username']: username,
      ['text']: message
    }
    this.setState((currentState) => ({
      messages: currentState.messages.concat([newMessage])
    }))
  }

  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((user) => (
            <ChatWindow
              key={user.username}
              user={user}
              messages={this.state.messages}
              onNewMessage={this.onNewMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
