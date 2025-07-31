import React, { useState } from "react";

// PUBLIC_INTERFACE
function BillPayment({ onPay }) {
  /**
   * Minimalistic bill payment panel (stub).
   */
  const [amount, setAmt] = useState('');
  const [bill, setBill] = useState('');
  const [msg, setMsg] = useState('');
  function submit(e) {
    e.preventDefault();
    setMsg('');
    // STUB: trigger callback
    onPay && onPay({ type: "bill", bill, amount });
    setMsg("Payment submitted (stub).");
  }
  return (
    <div className="section-block">
      <h2>Bill Payment</h2>
      <form className="payment-form" onSubmit={submit}>
        <input placeholder="Payee/Biller Name" value={bill} onChange={e=>setBill(e.target.value)} required/>
        <input placeholder="Amount" value={amount} onChange={e=>setAmt(e.target.value)} type="number" min="1" required/>
        <button type="submit" className="btn">Pay</button>
        {msg && <span style={{color:'green',marginLeft:8}}>{msg}</span>}
      </form>
    </div>
  );
}
export default BillPayment;
