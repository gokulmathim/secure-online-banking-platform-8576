import React, { useState } from 'react';

// PUBLIC_INTERFACE
export function Login({ onAuth }) {
  /**
   * Basic login form. On submit, calls stub auth and informs parent.
   * Should integrate with API, using process.env.REACT_APP_API_URL.
   */
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr('');
    // STUB: Replace with real backend call
    setTimeout(() => {
      setLoading(false);
      if (email.startsWith("user") && pw) {
        onAuth({ firstName: 'John', email, token: 'stub-token' });
      } else {
        setErr('Invalid credentials');
      }
    }, 900);
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoFocus />
        <input placeholder="Password" type="password" value={pw} onChange={e=>setPw(e.target.value)} required />
        <button type="submit" className="btn" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
        {err && <div className="auth-error">{err}</div>}
      </form>
    </div>
  );
}

// PUBLIC_INTERFACE
export function Register({ onAuth }) {
  /**
   * Simple registration screen stubbed for layout purposes.
   */
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr('');
    // STUB: Replace with real backend API call
    setTimeout(() => {
      setLoading(false);
      if (email && pw && fname) {
        onAuth({ firstName: fname, email, token: 'stub-token' });
      } else {
        setErr('Fill all fields');
      }
    }, 1200);
  }
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input placeholder="First Name" value={fname} onChange={e=>setFname(e.target.value)} required />
        <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={pw} onChange={e=>setPw(e.target.value)} required />
        <button type="submit" className="btn" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
        {err && <div className="auth-error">{err}</div>}
      </form>
    </div>
  );
}
