import React from "react";

interface AvatarComponentProps {
  size: "small" | "medium" | "large";
  image?: string;
  initials?: string;
  className?: string;
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  size,
  image,
  initials,
  className = "",
}) => {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} rounded-full border flex items-center justify-center bg-gray-200 text-lg font-bold`}
    >
      {image ? (
        <img
          src={image}
          alt={initials}
          className="rounded-full w-full h-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
};

export default AvatarComponent;
