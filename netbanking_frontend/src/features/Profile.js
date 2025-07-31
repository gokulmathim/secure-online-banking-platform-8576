import React, { useState } from "react";

// PUBLIC_INTERFACE
function Profile({ user, onUpdate }) {
  /**
   * Profile information screen: View/edit current user's info.
   */
  const [edit, setEdit] = useState(false);
  const [fname, setFname] = useState(user?.firstName || '');
  const [email, setEmail] = useState(user?.email || '');
  function handleSave(e) {
    e.preventDefault();
    setEdit(false);
    // STUB: Real implementation would submit to backend.
    onUpdate && onUpdate({ ...user, firstName: fname, email });
  }
  return (
    <div className="section-block">
      <h2>Profile</h2>
      <form onSubmit={handleSave}>
        <label>First Name</label>
        <input value={fname} onChange={e=>setFname(e.target.value)} readOnly={!edit} />
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} readOnly={!edit} />
        <div style={{ marginTop: 16 }}>
          {edit ? (
            <button type="submit" className="btn">Save</button>
          ) : (
            <button type="button" className="btn" onClick={() => setEdit(true)}>Edit</button>
          )}
        </div>
      </form>
    </div>
  );
}
export default Profile;
