import React from 'react';
import logo from '../assets/brand/logo.svg';

interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large' | 'auto';
  className?: string;
  alt?: string;
  onClick?: () => void;
  href?: string;
}

/**
 * BrandLogo Component
 * 
 * Centralized logo component for consistent brand usage across the website.
 * Sources the official logo from: src/assets/brand/logo.svg
 * 
 * This component ensures that replacing the master logo file automatically
 * updates the logo everywhere in the application.
 * 
 * Usage:
 * <BrandLogo size="large" />
 * <BrandLogo href="#" onClick={handler} />
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'auto',
  className = '',
  alt = 'Simply Smart Solution Logo',
  onClick,
  href,
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20',
    auto: 'w-auto h-auto',
  };

  const logoElement = (
    <img
      src={logo}
      alt={alt}
      className={`${sizeClasses[size]} ${className}`}
      style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
    />
  );

  if (href) {
    return (
      <a href={href} className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#1769E0] rounded-lg">
        {logoElement}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#1769E0] rounded-lg cursor-pointer"
        type="button"
      >
        {logoElement}
      </button>
    );
  }

  return <div className="inline-block">{logoElement}</div>;
};
