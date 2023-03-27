import PropTypes from 'prop-types';
export const StatisticsCard = ({ stat: { id, label, percentage } }) => {
  return (
    <section className="statistics">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </section>
  );
};

StatisticsCard.prototype = {
  stat: PropTypes.objectOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
