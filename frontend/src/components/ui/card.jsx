import React from 'react';

export function Card({ children, ...props }) {
  return (
    <div
      {...props}
      style={{
        backgroundColor: '#111',
        borderRadius: '0.5rem',
        padding: '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        color: '#fff',
      }}
    >
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}