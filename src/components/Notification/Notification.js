import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => {
  return <h2 className="message">{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
