import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className="list">
        <li>
          <span>Good:</span> <span>{good}</span>
        </li>
        <li>
          <span>Neutral:</span> <span>{neutral}</span>
        </li>
        <li>
          <span>Bad:</span> <span>{bad}</span>
        </li>
        <li>
          <spam>Total:</spam> <span>{total}</span>
        </li>
        <li>
          <span>Positive feadback:</span> <span>{positivePercentage}%</span>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
