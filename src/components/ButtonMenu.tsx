import { Link } from "react-router-dom";

type MenuItemProps = {
  label: string;
  pass: string;
  danger?: boolean;
};

export function MenuItem({
  label,
  danger = false,
  pass,
}: MenuItemProps) {
  return (
    <Link
      to={pass}
      className={`
        group flex w-full items-center rounded-2xl
        px-4 py-3
        text-sm font-semibold tracking-wide
        transition-all duration-200

        sm:px-5 sm:py-3.5

        ${
          danger
            ? `
              text-red-300
              hover:bg-red-500/10
              hover:text-red-200
              hover:shadow-[0_0_18px_rgba(239,68,68,.12)]
            `
            : `
              text-zinc-200
              hover:bg-zinc-800/80
              hover:text-white
              hover:shadow-[0_0_18px_rgba(34,211,238,.08)]
            `
        }

        active:scale-[0.985]

        focus:outline-none
        focus:ring-2
        focus:ring-cyan-300/30
      `}
    >
      <span className="truncate">{label}</span>
    </Link>
  );
}