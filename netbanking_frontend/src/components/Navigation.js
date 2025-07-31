import React from 'react';

// PUBLIC_INTERFACE
function Navigation({ selected, onNavigate }) {
  /**
   * Main vertical left navigation bar with icon & label for each core section.
   */
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: '🏦' },
    { key: 'transactions', label: 'Transactions', icon: '💸' },
    { key: 'transfer', label: 'Fund Transfer', icon: '🔁' },
    { key: 'bills', label: 'Bill Payment', icon: '🧾' },
    { key: 'notifications', label: 'Notifications', icon: '🔔' },
    { key: 'profile', label: 'Profile', icon: '👤' }
  ];
  return (
    <nav className="netbank-nav">
      <div className="nav-logo">NetBank</div>
      <ul>
        {items.map(item => (
          <li key={item.key} className={selected === item.key ? "selected" : ""}>
            <button tabIndex="0" onClick={() => onNavigate(item.key)} aria-label={item.label}>
              <span className="icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
