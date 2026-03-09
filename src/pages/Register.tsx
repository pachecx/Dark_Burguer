import React from "react";
import { EyeIcon } from "../assets/icons/EyeIcon";

export default function Cadastro() {

  const [nome, setNome] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [phone, setPhone] = React.useState("")



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07070b] text-white/90">
      {/* BG glow + scanlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10
          bg-[radial-gradient(900px_360px_at_18%_10%,rgba(34,211,238,.18),transparent_60%),radial-gradient(900px_360px_at_82%_0%,rgba(139,92,246,.22),transparent_60%),radial-gradient(700px_240px_at_50%_90%,rgba(255,59,129,.10),transparent_65%),repeating-linear-gradient(180deg,rgba(255,255,255,.032)_0px,rgba(255,255,255,.032)_1px,transparent_2px,transparent_7px)]
          opacity-95"
      />

      <div className="relative mx-auto grid min-h-screen w-full max-w-160 place-items-center px-4 py-7">
        <div className="w-full">
          {/* Header */}
          <header className="mb-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5 font-black tracking-[0.12em] shadow-[0_18px_60px_rgba(0,0,0,.58)]">
                DB
              </div>

              <div>
                <h1 className="m-0 text-2xl font-extrabold leading-tight">
                  Dark Buguer
                </h1>
                <p className="mt-1 text-sm text-white/70">Cadastro</p>
              </div>
            </div>

            <p className="mt-3 leading-relaxed text-white/80">
              Crie sua conta para salvar pedidos e receber promoções “DARK”.
            </p>
          </header>

          {/* Card */}
          <main className="rounded-2xl border border-white/12 bg-white/4.5 shadow-[0_22px_70px_rgba(0,0,0,.62),inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur">
            <form onSubmit={handleSubmit} className="p-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-4">
                {/* Nome (full) */}
                <div className="sm:col-span-2">
                  <label className="text-[13px] font-extrabold tracking-wide text-white/90">
                    Nome
                  </label>
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Ex: Itachi Uchiha"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="mt-2 h-11.5 w-full rounded-2xl border border-white/15 bg-black/25 px-4 text-white/90 outline-none transition
                      placeholder:text-white/45
                      focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/15"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-white/90">
                    E-mail
                  </label>
                  <input
                    name="email"
                    autoComplete="email"
                    placeholder="voce@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 h-11.5 w-full rounded-2xl border border-white/15 bg-black/25 px-4 text-white/90 outline-none transition
                      placeholder:text-white/45
                      focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/15"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-white/90">
                    WhatsApp
                  </label>
                  <input
                    name="phone"
                    autoComplete="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 h-11.5 w-full rounded-2xl border border-white/15 bg-black/25 px-4 text-white/90 outline-none transition
                      placeholder:text-white/45
                      focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/15"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-white/90">
                    Senha
                  </label>

                  <div className="relative mt-2">
                    <input
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-11.5 w-full rounded-2xl border border-white/15 bg-black/25 px-4 pr-14 text-white/90 outline-none transition
                        placeholder:text-white/45
                        focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/15"
                    />

                    <button
                      type="button"
                      aria-label="Mostrar senha"
                      className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl
                        border border-white/15 bg-linear-to-br from-cyan-300/10 to-violet-500/10 text-white/85
                        shadow-[0_10px_28px_rgba(0,0,0,.45)]
                        transition hover:scale-[1.03] hover:border-cyan-300/50 hover:from-cyan-300/15 hover:to-violet-500/15
                        hover:shadow-[0_14px_40px_rgba(0,0,0,.52),0_0_18px_rgba(34,211,238,.14)] active:scale-[0.99]"
                    >
                      <EyeIcon />
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-white/70">
                    Mínimo 8 caracteres.
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-white/90">
                    Confirmar senha
                  </label>

                  <div className="relative mt-2">
                    <input
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      placeholder="••••••••"
                      className="h-11.5 w-full rounded-2xl border border-white/15 bg-black/25 px-4 pr-14 text-white/90 outline-none transition
                        placeholder:text-white/45
                        focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/15"
                    />

                    <button
                      type="button"
                      aria-label="Mostrar confirmação"
                      className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl
                        border border-white/15 bg-linear-to-br from-cyan-300/10 to-violet-500/10 text-white/85
                        shadow-[0_10px_28px_rgba(0,0,0,.45)]
                        transition hover:scale-[1.03] hover:border-cyan-300/50 hover:from-cyan-300/15 hover:to-violet-500/15
                        hover:shadow-[0_14px_40px_rgba(0,0,0,.52),0_0_18px_rgba(34,211,238,.14)] active:scale-[0.99]"
                    >
                      <EyeIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <label className="mt-4 flex items-center gap-3 text-white/85">
                <input
                  className="cursor-pointer h-4 w-4 rounded border-white/20 bg-zinc-950/40 accent-amber-500 checked:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  type="checkbox"
                  name="acceptTerms"
                />
                <span>
                  Eu aceito os{" "}
                  <a
                    href="#"
                    className="text-cyan-200/95 underline decoration-cyan-200/40 underline-offset-4 hover:decoration-cyan-200/80"
                  >
                    termos
                  </a>{" "}
                  e a{" "}
                  <a
                    href="#"
                    className="text-cyan-200/95 underline decoration-cyan-200/40 underline-offset-4 hover:decoration-cyan-200/80"
                  >
                    política de privacidade
                  </a>
                  .
                </span>
              </label>

              {/* Buttons */}
              <button
                type="button"
                className="cursor-pointer mt-4 h-11.5 w-full rounded-2xl border border-cyan-300/50
                  bg-linear-to-br from-cyan-300/20 to-violet-500/20 font-extrabold tracking-wide
                  shadow-[0_18px_60px_rgba(0,0,0,.55)]
                  transition hover:-translate-y-px hover:border-cyan-300/70 hover:from-cyan-300/25 hover:to-violet-500/25"
              >
                Criar conta
              </button>

              <div className="my-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-white/70">
                <div className="h-px bg-white/12" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  ou
                </span>
                <div className="h-px bg-white/12" />
              </div>

              <button
                type="button"
                className="cursor-pointer h-11.5 w-full rounded-2xl border border-violet-400/35 bg-violet-500/10 font-extrabold tracking-wide
                  transition hover:-translate-y-px hover:border-violet-300/60 hover:bg-violet-500/12"
              >
                Entrar com Google
              </button>

              <p className="mt-4 text-center text-white/80">
                Já tem conta?{" "}
                <a
                  href="#"
                  className="cursor-pointer text-cyan-200/95 underline decoration-cyan-200/40 underline-offset-4 hover:decoration-cyan-200/80"
                >
                  Fazer login
                </a>
              </p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
