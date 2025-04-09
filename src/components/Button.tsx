
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  onClick,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md';
  
  const variantStyles = {
    primary: 'bg-harp-gold text-white hover:bg-amber-600',
    secondary: 'bg-harp-blue text-harp-navy hover:bg-blue-200',
    outline: 'border border-harp-gold text-harp-gold hover:bg-harp-gold hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={allStyles}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={allStyles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button className={allStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
