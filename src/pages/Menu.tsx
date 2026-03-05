import { ArrowRightIcon, BurgerIcon } from "../assets/icons";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { FireIcon } from "../assets/icons/FireIcon";
import { CartIcon } from "../assets/icons/CartIcon";
import { ClockIcon } from "../assets/icons/ClockIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { mockItems } from "../data/Produtos.mock";
import type { MenuItem } from "../data/types.produtos";
import { categories } from "../data/types.produtos";
import {DarkBuguerSwiper} from "../components/CategorySwiper";

export default function MenuPage() {
  return (
    <div className="min-h-screen max-w-screen bg-zinc-950">
      {/* Background accent */}
      <div className="pointer-events-none absolute -left-35 top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-130 h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />

      <main className="relative mx-auto w-full max-w-6xl px-4 py-6">
        
        <DarkBuguerSwiper slides={[]} />

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
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/70 active:scale-[0.99]"
            >
              <FireIcon className="h-5 w-5 text-amber-300" />
              Promoções
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/70 active:scale-[0.99]"
            >
              <ClockIcon className="h-5 w-5 text-zinc-200" />
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
                className="rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1.5 text-sm text-zinc-200 transition hover:bg-zinc-900/70 hover:text-zinc-50"
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
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-400 active:scale-[0.99]"
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockItems.map((item: MenuItem) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
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

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition hover:border-amber-500/20 hover:bg-zinc-900/70">
      {/* Image placeholder */}
      <div className="relative h-40 w-full">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/0 via-zinc-900/40 to-zinc-950/70" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-16 w-16 place-items-center rounded-3xl border border-white/10 bg-zinc-950/30 backdrop-blur">
            <BurgerIcon className="h-8 w-8 text-amber-300" />
          </div>
        </div>

        {item.tag ? (
          <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200">
            {item.tag}
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-base font-semibold tracking-tight text-zinc-50">
              {item.name}
            </h4>
            <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-zinc-950/30 px-2 py-1 text-xs text-zinc-300">
            {item.category}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-amber-300">{item.price}</p>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/30 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-950/50 active:scale-[0.99]"
          >
            <PlusIcon className="h-4 w-4 text-amber-300" />
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
