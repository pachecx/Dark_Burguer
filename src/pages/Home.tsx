import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "../assets/icons";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen max-w-screen bg-zinc-950">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 rounded-full bg-orange-500/8 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-4 py-6">
        {/* Hero content */}
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-50 sm:text-6xl md:text-7xl">
              Dark<span className="text-amber-400">Burger</span>
            </h1>
            <p className="mt-2 text-lg text-zinc-400">
              Os melhores burgers da sua cidade
            </p>
          </div>

          {/* Description */}
          <div className="mx-auto max-w-2xl space-y-4">
            <p className="text-base text-zinc-300 sm:text-lg">
              🍔 Blend de qualidade • 🔥 Sabor intenso • 🎯 Feito com amor
            </p>
            <p className="text-sm text-zinc-400">
              Explore nosso cardápio completo e descubra novas combinações
              irresistíveis.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate("/menu")}
              type="button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-amber-500/25 active:scale-[0.98]"
            >
              Começar Pedido
              <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => navigate("/login")}
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-900 active:scale-[0.98]"
            >
              Acessar Conta
            </button>
          </div>

          {/* Features grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl">⚡</div>
              <h3 className="mt-2 font-semibold text-zinc-100">Rápido</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Entrega em até 30 minutos
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl">🎯</div>
              <h3 className="mt-2 font-semibold text-zinc-100">Qualidade</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Ingredientes selecionados
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl">💰</div>
              <h3 className="mt-2 font-semibold text-zinc-100">Preço Justo</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Melhor custo-benefício
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
