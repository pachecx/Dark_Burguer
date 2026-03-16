import { Link } from "react-router-dom";

export function MenuItem({
  label,
  danger = false, 
  pass,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
  pass: string;
}) {
  return (
    <Link
      className={`cursor-pointer w-full px-4 py-2 text-left text-sm transition
      ${danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-zinc-200 hover:bg-zinc-800"}
      `} to={pass}    >
      {label}
    </Link>
  );
}