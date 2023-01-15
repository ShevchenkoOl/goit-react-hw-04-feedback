import PropTypes from 'prop-types';

import {
    StatisticsList
  } from "../Feedback/Feedback.style";


  export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }) => (
    <>
      <StatisticsList>
        <li>good:{good}</li>
        <li>neutral:{neutral}</li>
        <li>bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{good === 0 ? '0' : positivePercentage} %</li>
      </StatisticsList>
    </>
  );

 Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }