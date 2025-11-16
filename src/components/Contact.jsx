import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = Object.fromEntries(new FormData(e.currentTarget).entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          source: 'website',
        }),
      })

      if (!res.ok) throw new Error('Serverfehler')
      const data = await res.json()
      setStatus({ type: 'success', message: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Senden fehlgeschlagen. Bitte später erneut versuchen.' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Lassen Sie uns sprechen</h2>
            <p className="mt-3 text-gray-600">Teilen Sie uns kurz Ihr Projekt mit – wir melden uns innerhalb von 24 Stunden.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li><span className="font-semibold">E-Mail:</span> hello@cabinetcloud.io</li>
              <li><span className="font-semibold">Standort:</span> Deutschland · Remote</li>
              <li><span className="font-semibold">Zielgruppe:</span> Maschinenbau, Anlagenbauer, OEMs</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required name="name" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-Mail</label>
                <input required name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Unternehmen</label>
                <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefon</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Nachricht</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold px-5 py-3 hover:bg-blue-700">
              Abschicken
            </button>

            {status === 'sending' && (
              <p className="mt-3 text-sm text-gray-600">Wird gesendet...</p>
            )}
            {status?.type === 'success' && (
              <p className="mt-3 text-sm text-green-700">{status.message}</p>
            )}
            {status?.type === 'error' && (
              <p className="mt-3 text-sm text-red-600">{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
