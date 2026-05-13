import { Link } from "react-router-dom";

type MenuItemProps = {
  label: string;
  pass: string;
  danger?: boolean;
};

export function MenuItem({ label, danger = false, pass }: MenuItemProps) {
  return (
    <Link
      to={pass}
      className={`
        flex w-full items-center rounded-xl px-4 py-3
        text-sm font-medium transition-all duration-200
        sm:px-5 sm:py-3.5

        ${
          danger
            ? `
              text-red-400
              hover:bg-red-500/10
              hover:text-red-300
              active:scale-[0.98]
            `
            : `
              text-zinc-200
              hover:bg-zinc-800/80
              hover:text-white
              active:scale-[0.98]
            `
        }

        /* mobile */
        min-h-11

        /* desktop */
        sm:min-h-12

        /* focus acessibilidade */
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-300/40
      `}
    >
      <span className="truncate">{label}</span>
    </Link>
  );
}
