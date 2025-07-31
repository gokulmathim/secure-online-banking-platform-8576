import React, { useState } from "react";

// PUBLIC_INTERFACE
function FundTransfer({ onTransfer }) {
  /**
   * Minimalistic fund transfer screen (stub, logic for future API integration).
   */
  const [toAcc, setToAcc] = useState('');
  const [amount, setAmount] = useState('');
  const [msg, setMsg] = useState('');
  function submit(e) {
    e.preventDefault();
    setMsg('');
    // STUB: trigger callback
    onTransfer && onTransfer({ type: "transfer", to: toAcc, amount });
    setMsg('Transfer submitted (stub).');
  }
  return (
    <div className="section-block">
      <h2>Fund Transfer</h2>
      <form className="transfer-form" onSubmit={submit}>
        <input placeholder="Recipient Account" value={toAcc} onChange={e=>setToAcc(e.target.value)} required />
        <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} type="number" min="1" required/>
        <button type="submit" className="btn">Transfer</button>
        {msg && <span style={{color:'green',marginLeft:8}}>{msg}</span>}
      </form>
    </div>
  );
}
export default FundTransfer;
