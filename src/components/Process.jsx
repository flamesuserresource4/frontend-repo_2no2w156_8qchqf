export default function Process() {
  const steps = [
    { title: '1 · Aufnahme', desc: 'Bestehende Pläne importieren (z. B. EPLAN).'},
    { title: '2 · Digitalisierung', desc: 'Automatische Strukturierung, Norm-Checks und Komponentenmapping.'},
    { title: '3 · Freigabe', desc: 'Versionsverwaltung, Review-Workflows und Freigaben.'},
    { title: '4 · Fertigung & Service', desc: 'Exports, QR-Codes und mobiler Zugriff mit Audit-Trail.'},
  ]
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">So läuft die Digitalisierung</h2>
          <p className="mt-3 text-gray-600">Ein klarer, erprobter Prozess – transparent und effizient.</p>
        </div>
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <li key={s.title} className="rounded-xl border border-gray-200 p-6 bg-white">
              <p className="text-sm text-blue-700 font-semibold">{s.title}</p>
              <p className="mt-2 text-gray-700 font-medium">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
