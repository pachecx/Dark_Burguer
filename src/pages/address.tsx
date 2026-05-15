export default function AddressPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Background accent */}
      <div className="pointer-events-none rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none rounded-full bg-orange-500/10 blur-3xl" />

      <main className="relative mx-auto w-full max-w-6xl px-4 py-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Endereço de entrega
            </h1>

            <p className="text-sm text-zinc-400">
              Informe onde seu pedido deve ser entregue.
            </p>
          </div>

          <button
            type="button"
            className="
              inline-flex items-center justify-center
              rounded-2xl
              border border-white/10
              bg-zinc-900/50
              px-4 py-2.5

              text-sm font-medium text-zinc-100

              transition
              hover:bg-zinc-900/70
              active:scale-[0.99]
            "
          >
            Voltar
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          {/* Form */}
          <section className="rounded-3xl border border-white/10 bg-zinc-900/50">
            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-sm font-semibold text-zinc-200">
                Informações de entrega
              </h2>
            </div>

            <div className="space-y-5 p-5">
              {/* Tipo */}
              <div>
                <p className="text-sm font-medium text-zinc-300">
                  Tipo de entrega
                </p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {/* Delivery */}
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
                    <input
                      type="radio"
                      name="delivery"
                      defaultChecked
                      className="accent-amber-500"
                    />

                    <div>
                      <p className="text-sm font-semibold text-zinc-100">
                        Delivery
                      </p>

                      <p className="text-xs text-zinc-400">Receba em casa</p>
                    </div>
                  </label>

                  {/* Retirada */}
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/40 p-4 transition hover:bg-zinc-900/70">
                    <input
                      type="radio"
                      name="delivery"
                      className="accent-amber-500"
                    />

                    <div>
                      <p className="text-sm font-semibold text-zinc-100">
                        Retirada
                      </p>

                      <p className="text-xs text-zinc-400">Buscar no balcão</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* CEP */}
              <div>
                <label className="text-sm font-medium text-zinc-300">CEP</label>

                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    placeholder="00000-000"
                    className="
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-zinc-900/40
                      px-4 py-3

                      text-sm text-zinc-100
                      outline-none

                      transition

                      placeholder:text-zinc-600

                      focus:border-amber-500/40
                      focus:ring-4
                      focus:ring-amber-500/10
                    "
                  />

                  <button
                    type="button"
                    className="
                      rounded-2xl
                      bg-amber-500
                      px-4 py-3

                      text-sm font-semibold text-zinc-950

                      shadow-lg shadow-amber-500/10

                      transition
                      hover:bg-amber-400
                      active:scale-[0.99]
                    "
                  >
                    Buscar
                  </button>
                </div>
              </div>

              {/* Rua */}
              <div>
                <label className="text-sm font-medium text-zinc-300">Rua</label>

                <input
                  type="text"
                  placeholder="Ex: Rua Konoha"
                  className="
                    mt-2 w-full
                    rounded-2xl
                    border border-white/10
                    bg-zinc-900/40
                    px-4 py-3

                    text-sm text-zinc-100
                    outline-none

                    transition

                    placeholder:text-zinc-600

                    focus:border-amber-500/40
                    focus:ring-4
                    focus:ring-amber-500/10
                  "
                />
              </div>

              {/* Número + Bairro */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-zinc-300">
                    Número
                  </label>

                  <input
                    type="text"
                    placeholder="123"
                    className="
                      mt-2 w-full
                      rounded-2xl
                      border border-white/10
                      bg-zinc-900/40
                      px-4 py-3

                      text-sm text-zinc-100
                      outline-none

                      transition

                      placeholder:text-zinc-600

                      focus:border-amber-500/40
                      focus:ring-4
                      focus:ring-amber-500/10
                    "
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-300">
                    Bairro
                  </label>

                  <input
                    type="text"
                    placeholder="Ex: Vila Hidden"
                    className="
                      mt-2 w-full
                      rounded-2xl
                      border border-white/10
                      bg-zinc-900/40
                      px-4 py-3

                      text-sm text-zinc-100
                      outline-none

                      transition

                      placeholder:text-zinc-600

                      focus:border-amber-500/40
                      focus:ring-4
                      focus:ring-amber-500/10
                    "
                  />
                </div>
              </div>

              {/* Complemento */}
              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Complemento
                </label>

                <input
                  type="text"
                  placeholder="Apartamento, bloco..."
                  className="
                    mt-2 w-full
                    rounded-2xl
                    border border-white/10
                    bg-zinc-900/40
                    px-4 py-3

                    text-sm text-zinc-100
                    outline-none

                    transition

                    placeholder:text-zinc-600

                    focus:border-amber-500/40
                    focus:ring-4
                    focus:ring-amber-500/10
                  "
                />
              </div>

              {/* Observações */}
              <div>
                <label className="text-sm font-medium text-zinc-300">
                  Observações
                </label>

                <textarea
                  rows={4}
                  placeholder="Ex: portão preto..."
                  className="
                    mt-2 w-full
                    rounded-2xl
                    border border-white/10
                    bg-zinc-900/40
                    px-4 py-3

                    text-sm text-zinc-100
                    outline-none resize-none

                    transition

                    placeholder:text-zinc-600

                    focus:border-amber-500/40
                    focus:ring-4
                    focus:ring-amber-500/10
                  "
                />
              </div>
            </div>
          </section>

          {/* Summary */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-900/50">
            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-sm font-semibold text-zinc-200">
                Resumo do pedido
              </h2>
            </div>

            <div className="space-y-4 p-5">
              {/* Totais */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="font-semibold text-zinc-100">R$ 72,60</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Entrega</span>
                  <span className="font-semibold text-zinc-100">R$ 7,90</span>
                </div>

                <div className="my-4 h-px bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="font-medium text-zinc-300">Total</span>

                  <span className="text-lg font-semibold text-zinc-50">
                    R$ 80,50
                  </span>
                </div>
              </div>

              {/* Forma de pagamento */}
              <div className="mt-4">
                <p className="text-[13px] font-extrabold tracking-wide text-zinc-200">
                  Forma de pagamento
                </p>

                <div className="mt-3 space-y-2">
                  {/* PIX */}
                  <label
                    className="
                      group flex cursor-pointer items-center justify-between gap-3
                      rounded-2xl
                      border border-amber-500/30
                      bg-amber-500/10
                      p-4

                      transition
                      hover:border-amber-500/50
                    "
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        className="h-4 w-4 accent-amber-500"
                        defaultChecked
                      />

                      <div>
                        <p className="text-sm font-semibold text-zinc-100">
                          PIX
                        </p>

                        <p className="text-xs text-zinc-400">
                          Aprovação rápida
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        rounded-full
                        border border-amber-500/20
                        bg-amber-500/10
                        px-2 py-0.5

                        text-[10px] font-semibold text-amber-200
                      "
                    >
                      recomendado
                    </span>
                  </label>

                  {/* Cartão */}
                  <label
                    className="
                      group flex cursor-pointer items-center gap-3
                      rounded-2xl
                      border border-white/10
                      bg-zinc-900/40
                      p-4

                      transition
                      hover:bg-zinc-900/70
                    "
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="h-4 w-4 accent-amber-500"
                    />

                    <div>
                      <p className="text-sm font-semibold text-zinc-100">
                        Cartão
                      </p>

                      <p className="text-xs text-zinc-400">
                        Crédito ou débito na entrega
                      </p>
                    </div>
                  </label>

                  {/* Dinheiro */}
                  <label
                    className="
                      group flex cursor-pointer items-start gap-3
                      rounded-2xl
                      border border-white/10
                      bg-zinc-900/40
                      p-4

                      transition
                      hover:bg-zinc-900/70
                    "
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="mt-1 h-4 w-4 accent-amber-500"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-zinc-100">
                        Dinheiro
                      </p>

                      <p className="text-xs text-zinc-400">Precisa de troco?</p>

                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <input
                          placeholder="Troco para: Ex: 100"
                          className="
                            h-[42px]
                            w-full
                            rounded-2xl
                            border border-white/10
                            bg-zinc-950/40
                            px-4

                            text-sm text-zinc-100
                            outline-none

                            transition

                            placeholder:text-zinc-600

                            focus:border-amber-500/40
                            focus:ring-4
                            focus:ring-amber-500/10
                          "
                        />

                        <input
                          placeholder="Observação (opcional)"
                          className="
                            h-[42px]
                            w-full
                            rounded-2xl
                            border border-white/10
                            bg-zinc-950/40
                            px-4

                            text-sm text-zinc-100
                            outline-none

                            transition

                            placeholder:text-zinc-600

                            focus:border-amber-500/40
                            focus:ring-4
                            focus:ring-amber-500/10
                          "
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Botão */}
              <button
                type="button"
                className="
                  inline-flex w-full items-center justify-center
                  rounded-2xl
                  bg-amber-500
                  px-4 py-3

                  text-sm font-semibold text-zinc-950

                  shadow-lg shadow-amber-500/10

                  transition
                  hover:bg-amber-400
                  active:scale-[0.99]
                "
              >
                Confirmar pedido
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
