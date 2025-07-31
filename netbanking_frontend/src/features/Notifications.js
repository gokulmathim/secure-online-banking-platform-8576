import React from "react";

// PUBLIC_INTERFACE
function Notifications({ notifs }) {
  /**
   * Notifications panel, displays user alerts/messages
   */
  const sampleNotifs = notifs || [
    { id: 5, type: 'info', msg: 'New login from Chrome/NY, US', date: '2024-05-05 14:09' },
    { id: 6, type: 'success', msg: 'Salary credited!', date: '2024-04-29 03:01' },
    { id: 7, type: 'warning', msg: 'Unusual withdrawal detected', date: '2024-04-27 08:51' }
  ];
  return (
    <div className="section-block">
      <h2>Notifications</h2>
      <ul className="notif-list">
        {sampleNotifs.map(n => (
          <li key={n.id} className={`notif notif-${n.type}`}>
            <span className="notif-msg">{n.msg}</span>
            <span className="notif-date">{n.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Notifications;
