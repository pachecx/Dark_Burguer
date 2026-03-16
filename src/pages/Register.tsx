import React from "react";
import { EyeIcon } from "../assets/icons/EyeIcon";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* BG glow + texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10
          bg-[radial-gradient(900px_360px_at_18%_10%,rgba(245,158,11,.18),transparent_60%),radial-gradient(900px_360px_at_82%_0%,rgba(249,115,22,.16),transparent_60%),radial-gradient(700px_240px_at_50%_90%,rgba(251,191,36,.10),transparent_65%),repeating-linear-gradient(180deg,rgba(255,255,255,.030)_0px,rgba(255,255,255,.030)_1px,transparent_2px,transparent_7px)]
          opacity-95"
      />

      <div className="relative mx-auto grid min-h-screen w-full max-w-160 place-items-center px-4 py-7">
        <div className="w-full">
          {/* Header */}
          <header className="mb-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 font-black tracking-[0.12em] shadow-[0_18px_60px_rgba(0,0,0,.58)]">
                <span className="text-zinc-50">d</span>
                <span className="text-amber-400">B</span>
              </div>

              <div>
                <h1 className="m-0 text-2xl font-extrabold leading-tight text-zinc-50">
                  dark<span className="text-amber-400">BU</span>guer
                </h1>
                <p className="mt-1 text-sm text-zinc-400">Cadastro</p>
              </div>
            </div>

            <p className="mt-3 leading-relaxed text-zinc-300">
              Crie sua conta para salvar pedidos e receber promoções “DARK”.
            </p>
          </header>

          {/* Card */}
          <main className="rounded-3xl border border-white/10 bg-zinc-900/50 shadow-[0_22px_70px_rgba(0,0,0,.62),inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur">
            <form onSubmit={handleSubmit} className="p-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-4">
                {/* Nome (full) */}
                <div className="sm:col-span-2">
                  <label className="text-[13px] font-extrabold tracking-wide text-zinc-200">
                    Nome
                  </label>
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Ex: Itachi Uchiha"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="mt-2 h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 text-zinc-100 outline-none transition
                      placeholder:text-zinc-600
                      focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-zinc-200">
                    E-mail
                  </label>
                  <input
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    placeholder="voce@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 text-zinc-100 outline-none transition
                      placeholder:text-zinc-600
                      focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-zinc-200">
                    WhatsApp
                  </label>
                  <input
                    name="phone"
                    autoComplete="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 text-zinc-100 outline-none transition
                      placeholder:text-zinc-600
                      focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-zinc-200">
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
                      className="h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 pr-14 text-zinc-100 outline-none transition
                        placeholder:text-zinc-600
                        focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                    />

                    <button
                      type="button"
                      aria-label="Mostrar senha"
                      className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl
                        border border-white/10 bg-linear-to-br from-amber-500/10 to-orange-500/10 text-zinc-100/85
                        shadow-[0_10px_28px_rgba(0,0,0,.45)]
                        transition hover:scale-[1.03] hover:border-amber-500/40 hover:from-amber-500/15 hover:to-orange-500/15
                        hover:shadow-[0_14px_40px_rgba(0,0,0,.52),0_0_18px_rgba(245,158,11,.14)] active:scale-[0.99]"
                    >
                      <EyeIcon />
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-zinc-400">
                    Mínimo 8 caracteres.
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="text-[13px] font-extrabold tracking-wide text-zinc-200">
                    Confirmar senha
                  </label>

                  <div className="relative mt-2">
                    <input
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      placeholder="••••••••"
                      className="h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 pr-14 text-zinc-100 outline-none transition
                        placeholder:text-zinc-600
                        focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                    />

                    <button
                      type="button"
                      aria-label="Mostrar confirmação"
                      className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl
                        border border-white/10 bg-linear-to-br from-amber-500/10 to-orange-500/10 text-zinc-100/85
                        shadow-[0_10px_28px_rgba(0,0,0,.45)]
                        transition hover:scale-[1.03] hover:border-amber-500/40 hover:from-amber-500/15 hover:to-orange-500/15
                        hover:shadow-[0_14px_40px_rgba(0,0,0,.52),0_0_18px_rgba(245,158,11,.14)] active:scale-[0.99]"
                    >
                      <EyeIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <label className="mt-4 flex items-center gap-3 text-zinc-200">
                <input
                  className="cursor-pointer h-4 w-4 rounded border-white/20 bg-zinc-950/40 accent-amber-500 checked:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  type="checkbox"
                  name="acceptTerms"
                />
                <span className="text-zinc-300">
                  Eu aceito os{" "}
                  <a
                    href="#"
                    className="text-amber-200 underline decoration-amber-200/40 underline-offset-4 hover:decoration-amber-200/80"
                  >
                    termos
                  </a>{" "}
                  e a{" "}
                  <a
                    href="#"
                    className="text-amber-200 underline decoration-amber-200/40 underline-offset-4 hover:decoration-amber-200/80"
                  >
                    política de privacidade
                  </a>
                  .
                </span>
              </label>

              {/* Buttons */}
              <button
                type="button"
                className="cursor-pointer mt-4 h-11.5 w-full rounded-2xl border border-amber-500/40
                  bg-linear-to-br from-amber-500/20 to-orange-500/20 font-extrabold tracking-wide text-zinc-50
                  shadow-[0_18px_60px_rgba(0,0,0,.55)]
                  transition hover:-translate-y-px hover:border-amber-400/60 hover:from-amber-500/25 hover:to-orange-500/25"
              >
                Criar conta
              </button>

              <div className="my-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-zinc-400">
                <div className="h-px bg-white/10" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  ou
                </span>
                <div className="h-px bg-white/10" />
              </div>

              <button
                type="button"
                className="cursor-pointer h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-950/30 font-extrabold tracking-wide text-zinc-100
                  transition hover:-translate-y-px hover:border-amber-500/20 hover:bg-zinc-950/40"
              >
                Entrar com Google
              </button>

              <p className="mt-4 text-center text-zinc-300">
                Já tem conta?{" "}
                <Link
                  to={"/Login"}
                  className="cursor-pointer text-amber-200 underline decoration-amber-200/35 underline-offset-4 hover:decoration-amber-200/80"
                >
                  Fazer login
                </Link>
              </p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
