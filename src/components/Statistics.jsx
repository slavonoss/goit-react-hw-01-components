import { StatisticsCard } from './StatisticsCard';
export const Statistics = ({ stats, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title && title}</h2>
      <ul class="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <StatisticsCard stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
