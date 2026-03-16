import { ArrowRightIcon } from "../assets/icons";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { FireIcon } from "../assets/icons/FireIcon";
import { CartIcon } from "../assets/icons/CartIcon";
import { ClockIcon } from "../assets/icons/ClockIcon";
import { mockItems } from "../data/Produtos.mock";
import { categories } from "../data/types.produtos";
import { MenuCard } from "../components/MenuCard";

export default function MenuPage() {
  return (
    <div className="min-h-screen max-w-screen bg-zinc-950">
      {/* Background accent */}
      <div className="pointer-events-none rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none rounded-full bg-orange-500/8 blur-3xl" />

      <main className="relative mx-auto w-full max-w-6xl px-4 py-6">
        {/* Page heading */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Cardápio
            </h1>
            <p className="text-sm text-zinc-400">
              Escolha seu próximo pedido no darkBUguer.
            </p>
          </div>

          {/* Quick actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="cursor-pointer inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/70 active:scale-[0.99]"
            >
              <FireIcon className="h-5 w-5 text-amber-300" />
              Promoções
            </button>
            <button
              type="button"
              className="cursor-pointer inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/70 active:scale-[0.99]"
            >
              <ClockIcon className="cursor-pointer h-5 w-5 text-zinc-200" />
              Repetir pedido
            </button>
          </div>
        </div>

        {/* Search + chips */}
        <section className="mt-6 grid gap-3">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="search"
              placeholder="Buscar no cardápio (ex: smash, combo, batata...)"
              className="w-full rounded-2xl border border-white/10 bg-zinc-900/40 py-3 pl-10 pr-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="cursor-pointer rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1.5 text-sm text-zinc-200 transition hover:bg-zinc-900/70 hover:text-zinc-50"
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Featured strip */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50">
          <div className="relative p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/12 blur-3xl" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs text-amber-200">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Combo em destaque
                </div>
                <h2 className="mt-2 text-lg font-semibold text-zinc-50">
                  Combo Dark — o clássico do escuro
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Burger + batata + refri com aquele toque de grelha.
                </p>
              </div>

              <button
                type="button"
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-400 active:scale-[0.99]"
              >
                Ver detalhes
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-200">Itens</h3>
            <button
              type="button"
              className="text-sm text-zinc-400 underline decoration-white/10 underline-offset-4 transition hover:text-zinc-200"
            >
              Ordenar
            </button>
          </div>

          {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockItems.map((item: MenuItem) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div> */}

          {categories.map((category) => {
            const items = mockItems.filter(
              (item) => item.category === category,
            );

            return (
              <section key={category} className="mt-8">
                {/* Título */}
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {category}
                  </h2>
                </div>

                {/* Slider */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {items.map((item) => (
                    <div key={item.id} className="min-w-65">
                      <MenuCard item={item} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </section>

        {/* Sticky cart bar (UI) */}
        <div className="sticky bottom-4 mt-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-3xl border border-white/10 bg-zinc-950/70 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-zinc-900/60">
                <CartIcon className="h-5 w-5 text-amber-300" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-zinc-100">
                  Seu carrinho
                </p>
                <p className="text-xs text-zinc-400">0 itens • R$ 0,00</p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-400 active:scale-[0.99]"
            >
              Finalizar
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
