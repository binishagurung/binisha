import React from 'react';

export default function Condition() {
  const isTrue = true; // You can change this to false to test

  return (
    <div>
      {isTrue ? (
        <button>Click Me</button>
      ) : (
        <p>This is a paragraph.</p>
      )}
    </div>
  );
}
