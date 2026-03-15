export default function Checkout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-4 py-6 space-y-5">

        <h1 className="text-2xl font-bold">
          Finalizar pedido
        </h1>

        {/* Endereço */}
        <section className="card">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-zinc-400">Entrega em</p>
              <p className="font-semibold">Casa</p>
              <p className="text-sm text-zinc-400">
                Rua Konoha 123 - Vila Ninja
              </p>
            </div>

            <button className="cursor-pointer text-amber-400 text-sm font-semibold">
              Alterar
            </button>
          </div>
        </section>

        {/* Pagamento */}
        <section className="card">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-zinc-400">Pagamento</p>
              <p className="font-semibold">PIX</p>
            </div>

            <button className="cursor-pointer text-amber-400 text-sm font-semibold">
              Alterar
            </button>
          </div>
        </section>

        {/* Observação */}
        <section className="card">
          <p className="font-semibold mb-2">
            Observação para o pedido
          </p>

          <textarea
            placeholder="Ex: sem cebola, ponto da carne..."
            className="w-full rounded-xl bg-zinc-900 border border-white/10 p-3 text-sm outline-none focus:border-amber-500"
          />
        </section>

        {/* Resumo */}
        <section className="card">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ 72,60</span>
            </div>

            <div className="flex justify-between">
              <span>Entrega</span>
              <span>R$ 7,90</span>
            </div>

            <div className="border-t border-white/10 pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>R$ 80,50</span>
            </div>
          </div>
        </section>

        <button className="cursor-pointer w-full rounded-2xl bg-amber-500 py-3 font-bold text-black hover:bg-amber-400">
          Confirmar pedido
        </button>

      </div>
    </div>
  );
}