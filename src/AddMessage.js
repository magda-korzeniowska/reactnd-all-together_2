import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {

  state = {
    message: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onNewMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  handleInput = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  isDisabled = () => {
    const { message } = this.state;
    return message === '';
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.message}
            onChange={this.handleInput}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

AddMessage.propTypes = {
  onNewMessage: PropTypes.func.isRequired,
}

export default AddMessage
