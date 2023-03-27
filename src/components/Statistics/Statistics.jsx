import { StatisticsCard } from './StatisticsCard';
import PropTypes from 'prop-types';
export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title && title}</h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <StatisticsCard stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};
