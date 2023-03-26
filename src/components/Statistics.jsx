import { Statistics_card } from './Statistics_card';
export const Statistics = ({ stats, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title && title}</h2>
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <Statistics_card stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
