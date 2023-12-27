import css from './transactionhistory.module.css';

const TransactionHistory = ({ items }) => {
  const elements = items.map((item, index) => (
    <tr key={item.id} className={index % 2 === 0 ? css.evenRow : css.oddRow}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;
