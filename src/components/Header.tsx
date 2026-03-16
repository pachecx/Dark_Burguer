import { useState } from "react";
import { MenuIcon } from "../assets/icons/MenuIcon";
import { MenuItem } from "./ButtonMenu";

type HeaderProps = {
  userName: string;
  title?: string;
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "U";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Header({
  userName,
  title = "darkBUguer",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Left: Menu */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            type="button"
            className="cursor-pointer inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/70 active:scale-[0.99]"
          >
            <MenuIcon className="h-5 w-5 text-amber-300" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="flex-direction: column absolute left-0 mt-2 w-56 rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
              <MenuItem label="Cardápio" onClick={closeMenu} pass={"/"} />
              <MenuItem label="Promoções" onClick={closeMenu} pass={""} />
              <MenuItem label="Meus pedidos" onClick={closeMenu} pass={""} />
              <MenuItem label="Favoritos" onClick={closeMenu} pass={""} />

              <div className="flex-direction: column my-1 border-t border-white/10" />

              <MenuItem label="Configurações" onClick={closeMenu} pass={""} />
              <MenuItem label="Sair" onClick={closeMenu} danger pass={""} />
            </div>
          )}
        </div>

        {/* Center: Brand */}
        <div className="select-none text-sm font-semibold tracking-tight text-zinc-50">
          <span className="text-zinc-50">{title.slice(0, 4)}</span>
          <span className="text-amber-400">BU</span>
          <span className="text-zinc-50">{title.slice(4)}</span>
        </div>

        {/* Right: User */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-[11px] text-amber-400">Bem-vindo,</span>
            <span className="text-sm font-semibold text-zinc-100">
              {userName}
            </span>
          </div>

          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-zinc-900/60">
            <span className="text-sm font-semibold text-amber-300">
              {getInitials(userName)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
