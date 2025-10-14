'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'gold' | 'white' | 'black';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'gold',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    gold: 'text-gold',
    white: 'text-white',
    black: 'text-black'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
        style={{
          border: '2px solid transparent',
          borderTop: `2px solid currentColor`,
          borderRight: `2px solid currentColor`,
          borderRadius: '50%',
          opacity: 0.7
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
