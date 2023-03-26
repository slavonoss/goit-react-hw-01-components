import { StatisticsCard } from './StatisticsCard';
export const Statistics = ({ stats, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title && title}</h2>
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatisticsCard stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
