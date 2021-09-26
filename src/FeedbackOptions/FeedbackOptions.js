import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <ul>
        {this.props.options.map(option => (
          <li key={option}>
            <button
              type="button"
              value={option}
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;
