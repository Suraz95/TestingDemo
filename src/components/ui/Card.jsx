// components/ui/Card.jsx
import React from 'react';

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};
