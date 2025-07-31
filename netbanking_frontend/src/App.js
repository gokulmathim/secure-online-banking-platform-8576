import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import { Login, Register } from './features/Auth';
import Dashboard from './features/Dashboard';
import Transactions from './features/Transactions';
import FundTransfer from './features/FundTransfer';
import BillPayment from './features/BillPayment';
import Profile from './features/Profile';
import Notifications from './features/Notifications';

/**
 * PUBLIC_INTERFACE
 * Root App component for NetBanking dashboard.
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState('dashboard');
  const [authMode, setAuthMode] = useState('login');

  // Theme setup
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // If not authenticated, show login/registration form
  if (!user) {
    return (
      <div className="App App-auth">
        <header className="App-header" style={{minHeight:'unset',background:"var(--bg-secondary)"}}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>
        <div>
          {authMode === 'login' ?
            (<Login onAuth={u => setUser(u)} />) :
            (<Register onAuth={u => setUser(u)} />)
          }
          <div style={{marginTop:20}}>
            {authMode === 'login' ? (
              <span>Don't have an account? <button className="btn-link" onClick={() => setAuthMode('register')}>Sign Up</button></span>
            ) : (
              <span>Already have an account? <button className="btn-link" onClick={() => setAuthMode('login')}>Sign In</button></span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard layout
  return (
    <div className="App">
      <div className="dashboard-layout">
        <Navigation selected={route} onNavigate={setRoute}/>
        <div className="main-content">
          <TopBar user={user} onLogout={() => setUser(null)} />
          <main>
            {route === 'dashboard' && <Dashboard />}
            {route === 'transactions' && <Transactions />}
            {route === 'transfer' && <FundTransfer />}
            {route === 'bills' && <BillPayment />}
            {route === 'notifications' && <Notifications />}
            {route === 'profile' && <Profile user={user} onUpdate={setUser}/>}
          </main>
        </div>
      </div>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        style={{position:'fixed',top:24,right:32}}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}

export default App;
