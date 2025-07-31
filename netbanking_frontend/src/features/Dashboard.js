import React from 'react';

// PUBLIC_INTERFACE
function Dashboard({ accounts }) {
  /**
   * Account overview panel - displays list of user's accounts, balances.
   */
  return (
    <div className="section-block">
      <h2>Dashboard</h2>
      <div className="accounts-list">
        {(accounts || [
          { id: 1, name: 'Checking', number: '1234', balance: 2863.31, currency: 'USD' },
          { id: 2, name: 'Savings', number: '5678', balance: 10523.45, currency: 'USD' }
        ]).map(acc => (
          <div key={acc.id} className="account-tile">
            <div className="account-title">{acc.name}</div>
            <div className="account-number">•••• {acc.number}</div>
            <div className="account-balance">{acc.balance.toLocaleString()} {acc.currency}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
