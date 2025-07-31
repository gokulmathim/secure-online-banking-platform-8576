import React from 'react';

// PUBLIC_INTERFACE
function TopBar({ user, onLogout }) {
  /**
   * Top quick access bar for actions, user context, and logout.
   */
  return (
    <header className="netbank-topbar">
      <div className="topbar-quicklinks">
        {/* Quick access shortcuts as needed */}
        <button className="quick-btn" aria-label="New Transfer">+ Transfer</button>
        <button className="quick-btn" aria-label="Pay Bill">+ Bill</button>
      </div>
      <div className="topbar-profile">
        <span className="user-greeting">Hi, {user?.firstName || 'User'}</span>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}
export default TopBar;
