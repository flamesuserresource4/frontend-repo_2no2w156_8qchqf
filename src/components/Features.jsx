export default function Features() {
  const features = [
    {
      title: 'Digitale Schaltplanverwaltung',
      desc: 'Zentrale Ablage mit Versionierung, Rechteverwaltung und Änderungsverfolgung.',
    },
    {
      title: 'Automatisierte Prüfungen',
      desc: 'Regelbasierte Validierung gegen Normen und interne Standards – vor der Fertigung.',
    },
    {
      title: 'Datenexport & Integration',
      desc: 'Exports für Fertigung (Stücklisten, Klemmenpläne) und offene API für ERP/MES.',
    },
    {
      title: 'Mobiler Servicezugang',
      desc: 'Relevante Informationen im Feld – offline-fähig mit QR-Codes am Schaltschrank.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Die Plattform im Überblick</h2>
          <p className="mt-3 text-gray-600">Alles, was Sie für die digitale Schaltschrankplanung und -wartung benötigen.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 bg-gradient-to-b from-gray-50 to-white">
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
