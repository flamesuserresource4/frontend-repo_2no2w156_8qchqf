export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '€299/Monat', features: ['Bis 10 Projekte', 'Basis-Validierung', 'Standard-Export'] },
    { name: 'Pro', price: '€799/Monat', features: ['Unbegrenzte Projekte', 'Erweiterte Prüfungen', 'API & Integrationen'] },
    { name: 'Enterprise', price: 'Auf Anfrage', features: ['SLA & SSO', 'Individuelle Workflows', 'Onboarding & Migration'] },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Transparente Preise</h2>
          <p className="mt-3 text-gray-600">Wählen Sie das Paket, das zu Ihrem Team passt.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-b from-gray-50 to-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full rounded-md bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700">Anfragen</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
