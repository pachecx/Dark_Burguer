import { useState } from "react"

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // aqui depois vai chamar API
    console.log("Enviar reset para:", email)

    setSent(true)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur">

        {!sent ? (
          <>
            <h1 className="text-xl font-semibold text-zinc-50">
              Redefinir senha
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Informe seu email para receber o link de redefinição.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-amber-500"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-amber-500 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400"
              >
                Enviar link de redefinição
              </button>

            </form>
          </>
        ) : (
          <div className="text-center">

            <h2 className="text-lg font-semibold text-zinc-50">
              Email enviado
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Se existir uma conta com esse email, você receberá um link para redefinir sua senha.
            </p>

          </div>
        )}

      </div>

    </div>
  )
}