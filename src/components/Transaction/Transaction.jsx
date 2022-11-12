import React from "react";

export default function Transaction({ transations }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transations.map((tr) => (
          <tr key={tr.id}>
            <td>{tr.type}</td>
            <td>{tr.amount}</td>
            <td>{tr.currency}</td>
          </tr>
        ))}
      </tbody>
      
    </table>
  );
}