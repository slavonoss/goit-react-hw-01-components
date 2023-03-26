import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <TransactionItem items={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
