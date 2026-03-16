import React from "react";
import {
  BurgerIcon,
  MailIcon,
  LockIcon,
  ArrowRightIcon,
} from "../assets/icons";
import { Link } from "react-router-dom";

type Props = {
  brandName?: string;
};

export default function LoginPage({ brandName = "darkBUguer" }: Props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(email, password);
  };

  console.log(email, password);

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950 to-zinc-900" />
      <div className="pointer-events-none absolute -top-24 -right-30 h-72 w-72 rounded-full bg-amber-500/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-35 left-35 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Center */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-4 py-10">
        <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 shadow-2xl shadow-black/30 backdrop-blur">
          {/* Brand header */}
          <div className="border-b border-white/10 bg-black/20 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
                <BurgerIcon className="h-6 w-6 text-amber-300" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-zinc-50">
                  <span className="text-zinc-50">dark</span>
                  <span className="text-amber-400">BU</span>
                  <span className="text-zinc-50">guer</span>
                </p>
                <p className="text-xs text-zinc-400">
                  Acesse sua conta para continuar
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
              Entrar
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Bem-vindo de volta ao{" "}
              <span className="text-zinc-200">{brandName}</span>.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-1.5">
                <label className="text-xs font-medium text-zinc-300">
                  Email
                </label>
                <div className="group relative">
                  <MailIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 transition group-focus-within:text-amber-300" />
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="voce@exemplo.com"
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 py-3 pl-10 pr-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-zinc-300">
                    Senha
                  </label>
                  <button
                    type="button"
                    className="cursor-pointer text-xs text-zinc-400 underline decoration-white/10 underline-offset-4 transition hover:text-zinc-200"
                  >
                    Esqueci minha senha
                  </button>
                </div>
                <div className="group relative">
                  <LockIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 transition group-focus-within:text-amber-300" />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="••••••••"
                    minLength={6}
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 py-3 pl-10 pr-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>
              </div>

              <label className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 rounded border-white/20 bg-zinc-950/40 accent-amber-500 checked:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                />
                Manter conectado
              </label>

              <button
                type="submit"
                className="cursor-pointer mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-400 active:scale-[0.99]"
              >
                Entrar
                <ArrowRightIcon className="h-4 w-4" />
              </button>

              <p className="mt-3 text-center text-sm text-zinc-400">
                Não tem conta?{" "}
                <Link
                  className="cursor-pointer font-semibold text-amber-300 underline decoration-amber-500/30 underline-offset-4 transition hover:text-amber-200" 
                  to={"/Register"}>
                  Criar conta
                </Link>
              </p>
            </form>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 bg-black/10 px-6 py-4">
            <p className="text-center text-xs text-zinc-500">
              Ao continuar, você concorda com os{" "}
              <span className="text-zinc-400 underline decoration-white/10 underline-offset-4">
                Termos
              </span>{" "}
              e{" "}
              <span className="text-zinc-400 underline decoration-white/10 underline-offset-4">
                Privacidade
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
