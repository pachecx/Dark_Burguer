import { PlusIcon } from "../assets/icons/PlusIcon";
import type { MenuItem } from "../data/types.produtos";
import burguer from "../assets/Image.png";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition hover:border-amber-500/20 hover:bg-zinc-900/70">
      {/* Image placeholder */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `${burguer}`;
          }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/0 via-zinc-900/40 to-zinc-950/70" />

        {item.tag && (
          <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200">
            {item.tag}
          </div>
        )}
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
            className="cursor-pointer inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/30 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-950/50 active:scale-[0.99]"
          >
            <PlusIcon className="h-4 w-4 text-amber-300" />
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
