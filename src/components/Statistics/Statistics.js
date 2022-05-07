import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="List">
      <li className="Item">
        <h2 className="Text">Good</h2>
        <p className="Statistic">{good} </p>
      </li>

      <li className="Item">
        <h2 className="Text">Neutral</h2>
        <p className="Statistic">{neutral}</p>
      </li>

      <li className="Item">
        <h2 className="Text">Bad</h2>
        <p className="Statistic">{bad}</p>
      </li>

      <li className="Item">
        <h2 className="Text">Total</h2>
        <p className="Statistic"> {total} </p>
      </li>

      <li className="Item">
        <h2 className="Text">Positive Percentage</h2>
        <p className="Statistic">{positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
