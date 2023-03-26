export const StatisticsCard = ({ stat: { id, label, percentage } }) => {
  return (
    <section class="statistics">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </section>
  );
};
