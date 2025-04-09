
import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ children, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-serif text-3xl text-harp-navy section-heading ${centered ? 'mx-auto' : ''}`}>
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
