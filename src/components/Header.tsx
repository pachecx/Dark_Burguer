// Header.tsx
import React from "react";

type HeaderProps = {
  userName: string;
  title?: string; 
};

export default function Header({ userName, title = "darkBUguer" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Left: Menu */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/70 active:scale-[0.99]"
          aria-label="Abrir menu"
        >
          <MenuIcon className="h-5 w-5 text-amber-300" />
          <span className="hidden sm:inline">Menu</span>
        </button>

        {/* Center: Brand */}
        <div className="select-none text-sm font-semibold tracking-tight text-zinc-50">
          <span className="text-zinc-50">{title.slice(0, 4)}</span>
          <span className="text-amber-400">{title.includes("BU") ? "BU" : "BU"}</span>
          <span className="text-zinc-50">{title.slice(4)}</span>
        </div>

        {/* Right: User */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-[11px] text-zinc-500">Bem-vindo,</span>
            <span className="text-sm font-semibold text-zinc-100">{userName}</span>
          </div>

          {/* Avatar (iniciais) */}
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

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "U";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}