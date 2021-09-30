import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className={`${s.container} list`}>
        <li className={s.item}>
          <p>{good}</p>
          <p>Good</p>
        </li>
        <li className={s.item}>
          <p>{neutral}</p>
          <p>Neutral</p>
        </li>
        <li className={s.item}>
          <p>{bad}</p>
          <p>Bad</p>
        </li>
        <li className={s.item}>
          <p>{total}</p>
          <p>Total</p>
        </li>
        <li className={s.item}>
          <p>{positivePercentage}%</p>
          <p>Positive feadback</p>
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
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
