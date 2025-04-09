
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card = ({ title, children, icon, className = '', style }: CardProps) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg ${className}`}
      style={style}
    >
      {icon && <div className="mb-4 text-harp-gold">{icon}</div>}
      <h3 className="font-serif text-xl mb-3 text-harp-navy">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

export default Card;
