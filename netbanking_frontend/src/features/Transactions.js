import React from 'react';

// PUBLIC_INTERFACE
function Transactions({ transactions }) {
  /**
   * Transaction history screen (stub data, real integration TBD)
   */
  const txs = transactions || [
    { id: 1, date: '2024-05-01', type: 'Debit', desc: 'Supermarket', amount: -82.12, balance: 2850.19, currency: 'USD' },
    { id: 2, date: '2024-04-29', type: 'Credit', desc: 'Salary', amount: 1200.00, balance: 2932.31, currency: 'USD' },
    { id: 3, date: '2024-04-26', type: 'Debit', desc: 'Electricity Bill', amount: -145.48, balance: 1732.31, currency: 'USD' }
  ];
  return (
    <div className="section-block">
      <h2>Transaction History</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th><th>Description</th><th>Type</th><th>Amount</th><th>Balance After</th>
          </tr>
        </thead>
        <tbody>
          {txs.map(tx => (
            <tr key={tx.id}>
              <td>{tx.date}</td>
              <td>{tx.desc}</td>
              <td>{tx.type}</td>
              <td style={{ color: tx.amount < 0 ? 'crimson' : 'green' }}>
                {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
              </td>
              <td>{tx.balance.toLocaleString()} {tx.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Transactions;
