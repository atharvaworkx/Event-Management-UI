import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'charcoal' | 'outline' | 'green' | 'red' | 'blue';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
  size = 'md'
}) => {
  const sizeStyles = size === 'sm' 
    ? 'text-[10px] px-2.5 py-0.5 tracking-wider' 
    : 'text-xs px-3 py-1 tracking-wider';

  const variantStyles = {
    gold: 'bg-gold-400/10 text-gold-400 border border-gold-400/30 font-medium',
    charcoal: 'bg-surface-muted text-gray-300 border border-surface-border font-medium',
    outline: 'bg-transparent text-gray-400 border border-neutral-700',
    green: 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30',
    red: 'bg-rose-950/60 text-rose-400 border border-rose-500/30',
    blue: 'bg-sky-950/60 text-sky-400 border border-sky-500/30'
  };

  return (
    <span className={`inline-flex items-center uppercase font-mono rounded-lg ${sizeStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
