import React from 'react';

export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        background: '#ff0044',
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      {children}
    </button>
  );
}
