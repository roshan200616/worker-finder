import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
