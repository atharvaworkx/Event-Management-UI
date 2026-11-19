import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 tracking-wide'
  };

  const variantStyles = {
    primary: 'bg-gold-400 text-black hover:bg-gold-300 font-semibold shadow-gold-sm hover:shadow-gold-md transition-all active:translate-y-0.5 border border-gold-300',
    secondary: 'bg-surface-subtle text-paper hover:bg-surface-hover border border-surface-border transition-all active:translate-y-0.5',
    outline: 'bg-transparent text-gold-400 border border-gold-400/50 hover:bg-gold-400/10 transition-all active:translate-y-0.5',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-surface-hover transition-colors',
    danger: 'bg-rose-900/40 text-rose-300 border border-rose-500/30 hover:bg-rose-900/60 transition-all'
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded font-sans cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

