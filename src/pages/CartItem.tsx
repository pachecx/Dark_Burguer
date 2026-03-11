import React from "react";

type CartItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  qty: number;
  tag?: string;
};

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Deku Dark",
    desc: "Duplo smash • cheddar • maionese black",
    price: "R$ 36,90",
    qty: 1,
    tag: "Destaque",
  },
  {
    id: "2",
    name: "Batata Kuro Trufada",
    desc: "Parmesão • toque trufado • sal black",
    price: "R$ 21,90",
    qty: 1,
  },
  {
    id: "3",
    name: "Refrigerante Lata",
    desc: "350ml • bem gelado",
    price: "R$ 6,90",
    qty: 2,
  },
];

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-[11px] font-extrabold tracking-wide text-amber-200">
    {children}
  </span>
);

export default function Carrinho() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* BG */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10
          bg-[radial-gradient(900px_360px_at_18%_10%,rgba(245,158,11,.18),transparent_60%),radial-gradient(900px_360px_at_82%_0%,rgba(249,115,22,.16),transparent_60%),radial-gradient(700px_240px_at_50%_90%,rgba(251,191,36,.10),transparent_65%),repeating-linear-gradient(180deg,rgba(255,255,255,.030)_0px,rgba(255,255,255,.030)_1px,transparent_2px,transparent_7px)]
          opacity-95"
      />

      <div className="relative mx-auto w-full max-w-275 px-4 py-6 sm:py-8">
        {/* Header */}
        <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold leading-tight text-zinc-50">
              Carrinho
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Revise seus itens antes de finalizar o pedido.
            </p>
          </div>

          <button
            type="button"
            className="cursor-pointer h-11 w-full rounded-2xl border border-white/10 bg-zinc-900/40 px-4 text-sm font-extrabold tracking-wide text-zinc-100
              transition hover:-translate-y-px hover:border-amber-500/25 hover:bg-zinc-900/60
              sm:w-auto"
          >
            ← Voltar ao menu
          </button>
        </header>

        {/* Layout */}
        <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:gap-5">
          {/* Itens */}
          <section className="rounded-3xl border border-white/10 bg-zinc-900/50 shadow-[0_22px_70px_rgba(0,0,0,.62),inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
              <p className="text-sm font-extrabold tracking-wide text-zinc-200">
                Itens do pedido
              </p>
              <p className="text-xs text-zinc-400">{cartItems.length} itens</p>
            </div>

            <ul className="divide-y divide-white/10">
              {cartItems.map((item) => (
                <li key={item.id} className="px-4 py-4 sm:px-5">
                  <div className="flex gap-3 sm:gap-4">
                    {/* Thumb */}
                    <div
                      className="h-14 w-14 shrink-0 rounded-2xl border border-white/10 bg-linear-to-br from-amber-500/10 to-orange-500/10
                        shadow-[0_14px_45px_rgba(0,0,0,.55)]
                        sm:h-16 sm:w-16"
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      {/* title + price */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="min-w-0 truncate text-base font-extrabold text-zinc-50">
                              {item.name}
                            </p>
                            {item.tag ? <Badge>{item.tag}</Badge> : null}
                          </div>
                          <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
                            {item.desc}
                          </p>
                        </div>

                        <p className="shrink-0 text-sm font-extrabold text-zinc-100">
                          {item.price}
                        </p>
                      </div>

                      {/* actions */}
                      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        {/* Stepper */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/30 p-1">
                          <button
                            type="button"
                            className="cursor-pointer grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-zinc-900/40 text-zinc-100
                              transition hover:border-amber-500/25 hover:bg-zinc-900/60"
                            aria-label="Diminuir"
                          >
                            −
                          </button>

                          <span className="min-w-10 text-center text-sm font-extrabold text-zinc-100">
                            {item.qty}
                          </span>

                          <button
                            type="button"
                            className="cursor-pointer grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-zinc-900/40 text-zinc-100
                              transition hover:border-amber-500/25 hover:bg-zinc-900/60"
                            aria-label="Aumentar"
                          >
                            +
                          </button>
                        </div>

                        {/* links */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <button
                            type="button"
                            className="cursor-pointer text-sm font-extrabold text-zinc-400 underline decoration-white/10 underline-offset-4
                              hover:text-zinc-200 hover:decoration-white/20"
                          >
                            Adicionar observação
                          </button>

                          <button
                            type="button"
                            className="cursor-pointer text-sm font-extrabold text-rose-300 underline decoration-rose-300/25 underline-offset-4
                              hover:text-rose-200 hover:decoration-rose-300/60"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <button
                type="button"
                className="h-11 w-full rounded-2xl border border-white/10 bg-zinc-900/40 px-4 text-sm font-extrabold tracking-wide text-zinc-100
                  transition hover:-translate-y-px hover:border-amber-500/25 hover:bg-zinc-900/60
                  sm:w-auto"
              >
                + Adicionar mais itens
              </button>

              <button
                type="button"
                className="cursor-pointer h-11 w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 text-sm font-extrabold tracking-wide text-zinc-100
                  transition hover:-translate-y-px hover:border-white/20 hover:bg-zinc-950/40
                  sm:w-auto"
              >
                Limpar carrinho
              </button>
            </div>
          </section>

          {/* Resumo */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-900/50 shadow-[0_22px_70px_rgba(0,0,0,.62),inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur">
            <div className="border-b border-white/10 px-4 py-4 sm:px-5">
              <p className="text-sm font-extrabold tracking-wide text-zinc-200">
                Resumo do pedido
              </p>
            </div>

            <div className="px-4 py-4 sm:px-5">
              {/* Cupom */}
              <div className="mb-4">
                <label className="text-[13px] font-extrabold tracking-wide text-zinc-200">
                  Cupom
                </label>

                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <input
                    placeholder="Ex: DARK10"
                    className="h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 text-zinc-100 outline-none transition
                      placeholder:text-zinc-600 focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10"
                  />
                  <button
                    type="button"
                    className="cursor-pointer h-11.5 w-full rounded-2xl border border-white/10 bg-zinc-900/40 px-4 text-sm font-extrabold tracking-wide text-zinc-100
                      transition hover:-translate-y-px hover:border-amber-500/25 hover:bg-zinc-900/60
                      sm:w-auto sm:shrink-0"
                  >
                    Aplicar
                  </button>
                </div>
              </div>

              {/* Totais */}
              <div className="space-y-3 rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="font-extrabold text-zinc-100">R$ 72,60</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Entrega</span>
                  <span className="font-extrabold text-zinc-100">R$ 7,90</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Desconto</span>
                  <span className="font-extrabold text-amber-200">
                    - R$ 0,00
                  </span>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold tracking-wide text-zinc-200">
                    Total
                  </span>
                  <span className="text-lg font-black text-zinc-50">
                    R$ 80,50
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="cursor-pointer mt-4 h-11.5 w-full rounded-2xl border border-amber-500/40
                  bg-linear-to-br from-amber-500/20 to-orange-500/20 font-extrabold tracking-wide text-zinc-50
                  shadow-[0_18px_60px_rgba(0,0,0,.55)]
                  transition hover:-translate-y-px hover:border-amber-400/60 hover:from-amber-500/25 hover:to-orange-500/25"
              >
                Finalizar pedido
              </button>

              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Ao finalizar, você confirma seus itens e seguirá para endereço e
                pagamento.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
