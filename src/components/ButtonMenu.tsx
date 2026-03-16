
export function MenuItem({
  label,
  onClick,
  danger = false,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer w-full px-4 py-2 text-left text-sm transition
      ${
        danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-zinc-200 hover:bg-zinc-800"
      }
      `}
    >
      {label}
    </button>
  );
}