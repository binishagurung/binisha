import React from 'react';

export default function MultiplicationTable({ number }) {
  const table = [];

  for (let i = 1; i <= 10; i++) {
    table.push(`${number} x ${i} = ${number * i}`);
  }

  return (
    <ul>
      {table.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}
