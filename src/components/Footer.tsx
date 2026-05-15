export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-amber-400">DarkBurger</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Os melhores burgers da sua cidade, feitos com ingredientes
              selecionados.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-zinc-100">Menu</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>
                <a href="/" className="transition hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="transition hover:text-amber-400">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="/menu" className="transition hover:text-amber-400">
                  Promociones
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-zinc-100">Atendimento</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="tel:+5511999999999"
                  className="transition hover:text-amber-400"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@darkburger.com"
                  className="transition hover:text-amber-400"
                >
                  contact@darkburger.com
                </a>
              </li>
              <li className="text-xs">Seg-Dom: 11h - 23h</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-zinc-100">Redes Sociais</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-400">
              © {currentYear} DarkBurger. Todos os direitos reservados.
            </p>

            <div className="flex gap-4 text-sm text-zinc-400">
              <a href="#" className="transition hover:text-amber-400">
                Privacidade
              </a>
              <a href="#" className="transition hover:text-amber-400">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
