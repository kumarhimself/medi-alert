import React from "react";

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = "" }) => {
  return <div className={`separator ${className}`} />;
};

export default Separator;
