interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ListItem({ label, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center shrink-0 w-[464px] h-[148px] rounded-2xl text-h4 font-medium transition-colors duration-300 border border-solid border-[#989FE0] backdrop-blur-12
        ${
          isActive
            ? "bg-linear-accent text-background"
            : "bg-glass-bg text-content"
        }`}
    >
      {label}
    </button>
  );
}

export default ListItem;
