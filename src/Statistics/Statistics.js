import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <ul>
        <li>
          Good: <span>{this.props.good}</span>
        </li>
        <li>
          Neutral: <span>{this.props.neutral}</span>
        </li>
        <li>
          Bad: <span>{this.props.bad}</span>
        </li>
        <li>
          Total: <span>{this.props.total}</span>
        </li>
        <li>
          Positive feadback: <span>{this.props.positivePercentage}%</span>
        </li>
      </ul>
    );
  }
}

export default Statistics;
