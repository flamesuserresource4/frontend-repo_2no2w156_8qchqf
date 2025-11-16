export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      <div className="absolute top-10 -left-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-0 -right-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Made in Germany · IEC-konform
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Schrankschaltungen digitalisieren – sicher, schnell, skalierbar
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Von der Planung bis zur Inbetriebnahme: Unsere Cloud-Plattform verwandelt analoge Schaltpläne in digitale, versionierte und prüfbare Schaltungen – direkt einsatzbereit für Fertigung und Service.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold px-5 py-3 hover:bg-blue-700">
                Demo anfragen
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 ring-1 ring-gray-200 text-sm font-semibold px-5 py-3 hover:bg-gray-50">
                Mehr erfahren
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">70% schneller</p>
                <p>vom Plan zur Verdrahtung</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">0 Papier</p>
                <p>digitale Freigabe & Revisionen</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Kompatibel</p>
                <p>EPLAN & gängige Formate</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sicherheit</p>
                <p>IEC-Normen & Audit-Trail</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092335907-b6aef20b92c6?q=80&w=1600&auto=format&fit=crop"
                alt="Digitale Schaltschrankplanung"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow p-4 border border-gray-100">
              <p className="text-sm font-medium text-gray-900">Automatische Klemmenlisten</p>
              <p className="text-xs text-gray-600">Fehlerfrei, versioniert, exportierbar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
