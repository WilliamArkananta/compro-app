import React from "react";

interface ListItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ label, isActive, onClick }) => {
  const baseClasses = `
    flex justify-center items-center
    w-[464px] h-[148px] shrink-0
    rounded-2xl text-h4 font-medium
    transition-colors duration-300
    border border-solid border-[#989FE0]
    backdrop-blur-12
  `;

  const activeClasses = isActive
    ? "bg-linear-accent text-background"
    : "bg-glass-bg text-content";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses}`.trim()}
    >
      {label}
    </button>
  );
};

export default ListItem;
