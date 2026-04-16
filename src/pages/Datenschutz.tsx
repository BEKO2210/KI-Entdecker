import { Shield, Database, Cookie, UserCheck, Mail, ExternalLink } from 'lucide-react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 bg-gradient-to-br from-primary-purple to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="container-wide text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Informationen zum Umgang mit Ihren Daten
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="container-wide max-w-3xl">
            {/* Introduction */}
            <div className="bg-primary-purple/5 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary-purple" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-outfit font-bold text-neutral-dark mb-2">
                    Ihre Daten sind sicher
                  </h2>
                  <p className="text-neutral-gray">
                    Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich
                    verarbeite Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
                    Bestimmungen (DSGVO, BDSG, TDDDG und DDG). In dieser Datenschutzerklärung
                    informiere ich Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
                    dieser Website.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {/* Responsible Person */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-primary-purple" aria-hidden="true" />
                  Verantwortlicher
                </h2>
                <div className="bg-neutral-light rounded-xl p-6">
                  <p className="font-medium text-neutral-dark">Belkis Aslani</p>
                  <p className="text-neutral-gray mt-1">
                    Vogelsangstraße 32<br />
                    71691 Freiberg am Neckar<br />
                    Deutschland
                  </p>
                  <p className="mt-4">
                    <span className="text-neutral-gray">E-Mail: </span>
                    <a 
                      href="mailto:belkis.aslani@gmail.com"
                      className="text-primary-purple hover:text-primary-purple/80 transition-colors"
                      aria-label="E-Mail an belkis.aslani@gmail.com senden"
                    >
                      belkis.aslani@gmail.com
                    </a>
                  </p>
                </div>
              </article>

              {/* Local Storage */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary-teal" aria-hidden="true" />
                  Speicherung des Lernfortschritts (Local Storage)
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Um Ihren Lernfortschritt zu speichern, verwenden wir die sogenannte 
                  &quot;Local Storage&quot;-Technologie Ihres Browsers. Dabei werden folgende Daten 
                  lokal auf Ihrem Gerät gespeichert:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Abgeschlossene Lektionen und Tage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Freigeschaltete Badges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Zeitpunkt des Lernstarts und letzten Besuchs</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-accent-yellow/10 rounded-xl">
                  <p className="text-sm text-neutral-dark">
                    <strong>Wichtig:</strong> Diese Daten werden ausschließlich lokal in Ihrem Browser 
                    gespeichert und nicht an unsere Server oder Dritte übertragen. Sie können diese 
                    Daten jederzeit löschen, indem Sie den Local Storage Ihres Browsers leeren oder 
                    den Fortschritt auf der Kursseite zurücksetzen.
                  </p>
                </div>
              </article>

              {/* Cookies */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-accent-yellow" aria-hidden="true" />
                  Cookies
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Unsere Website verwendet keine Cookies zur Tracking- oder Werbezwecke. 
                  Wir setzen ausschließlich technisch notwendige Cookies ein, die für die 
                  Funktionalität der Website erforderlich sind:
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-neutral-light">
                        <th className="text-left p-3 font-medium text-neutral-dark">Name</th>
                        <th className="text-left p-3 font-medium text-neutral-dark">Zweck</th>
                        <th className="text-left p-3 font-medium text-neutral-dark">Dauer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-light">
                        <td className="p-3 text-neutral-gray">keine</td>
                        <td className="p-3 text-neutral-gray">-</td>
                        <td className="p-3 text-neutral-gray">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Da wir keine Cookies verwenden, wird kein Cookie-Banner angezeigt.
                </p>
              </article>

              {/* Hosting & Server Logs */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-accent-pink" aria-hidden="true" />
                  Hosting &amp; Server-Log-Dateien
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Diese Website wird bei <strong>GitHub Pages</strong> gehostet, einem Dienst der
                  GitHub Inc., 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA. GitHub ist
                  nach dem <em>EU-U.S. Data Privacy Framework</em> zertifiziert; für zusätzliche
                  Übermittlungen gelten EU-Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO.
                  Die Datenschutzerklärung von GitHub ist abrufbar unter{' '}
                  <a
                    href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-purple hover:text-primary-purple/80 transition-colors"
                  >
                    docs.github.com/site-policy/privacy-policies
                  </a>.
                </p>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  GitHub erhebt beim Aufruf der Seite automatisch Informationen in sogenannten
                  Server-Log-Dateien, die Ihr Browser automatisch übermittelt:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Browsertyp und Browserversion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Verwendetes Betriebssystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Referrer-URL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Hostname des zugreifenden Rechners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Uhrzeit der Serveranfrage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">IP-Adresse (gekürzt, siehe Hinweis unten)</span>
                  </li>
                </ul>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Rechtsgrundlage für die Erfassung dieser Daten ist Art. 6 Abs. 1 lit. f DSGVO –
                  mein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der
                  Sicherheit der Website. Eine Zusammenführung dieser Daten mit anderen
                  Datenquellen erfolgt nicht.
                </p>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  <strong>Speicherdauer:</strong> Die Protokolldaten werden von GitHub laut deren
                  Datenschutzhinweisen typischerweise 14 Tage aufbewahrt und anschließend gelöscht.
                  Personenbezogene Auswertung oder Profilbildung durch mich findet nicht statt.
                </p>
              </article>

              {/* External Tools */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <ExternalLink className="w-6 h-6 text-primary-purple" aria-hidden="true" />
                  Externe KI-Tools
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Im Rahmen des Kurses empfehlen wir verschiedene externe KI-Tools. Diese werden 
                  von Drittanbietern betrieben und unterliegen deren jeweiligen Datenschutzbestimmungen. 
                  Wir empfehlen nur Tools, die:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Keine personenbezogenen Daten von Kindern sammeln</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Auf eine DSGVO-konforme Nutzung ausgelegt sind</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2" aria-hidden="true" />
                    <span className="text-neutral-gray">Keine Werbung anzeigen</span>
                  </li>
                </ul>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Bitte beachten Sie die Datenschutzerklärungen der jeweiligen Tools, bevor Sie 
                  diese nutzen. Eine Liste der empfohlenen Tools mit Links zu deren Datenschutzhinweisen 
                  finden Sie in unseren Materialien.
                </p>
              </article>

              {/* Rights */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-primary-teal" aria-hidden="true" />
                  Ihre Rechte
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Ihnen stehen folgende Rechte zu:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-purple">1</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">Auskunftsrecht (Art. 15 DSGVO)</span>
                      <p className="text-sm text-neutral-gray">Sie können jederzeit Auskunft über Ihre bei uns gespeicherten Daten verlangen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-purple">2</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">Recht auf Berichtigung (Art. 16 DSGVO)</span>
                      <p className="text-sm text-neutral-gray">Sie können die Berichtigung unrichtiger Daten verlangen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-purple">3</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">Recht auf Löschung (Art. 17 DSGVO)</span>
                      <p className="text-sm text-neutral-gray">Sie können die Löschung Ihrer Daten verlangen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-purple">4</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">Recht auf Einschränkung (Art. 18 DSGVO)</span>
                      <p className="text-sm text-neutral-gray">Sie können die Einschränkung der Verarbeitung verlangen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-purple">5</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</span>
                      <p className="text-sm text-neutral-gray">Sie können Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format erhalten.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-purple">6</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">Widerspruchsrecht (Art. 21 DSGVO)</span>
                      <p className="text-sm text-neutral-gray">Sie können jederzeit Widerspruch gegen die Verarbeitung Ihrer Daten einlegen, die auf berechtigten Interessen beruht.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-purple/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-purple">7</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)</span>
                      <p className="text-sm text-neutral-gray">
                        Sie können sich jederzeit bei der zuständigen Aufsichtsbehörde beschweren:<br />
                        <em>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)</em><br />
                        Lautenschlagerstraße 20, 70173 Stuttgart ·
                        {' '}
                        <a
                          href="https://www.baden-wuerttemberg.datenschutz.de/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-purple hover:text-primary-purple/80 transition-colors"
                        >
                          baden-wuerttemberg.datenschutz.de
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Zur Ausübung Ihrer Rechte kontaktieren Sie mich bitte unter der oben angegebenen
                  E-Mail-Adresse.
                </p>
              </article>

              {/* Automatisierte Entscheidungen */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary-teal" aria-hidden="true" />
                  Automatisierte Entscheidungsfindung (Art. 22 DSGVO)
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Auf dieser Website findet <strong>keine automatisierte Entscheidungsfindung
                  einschließlich Profiling</strong> im Sinne des Art. 22 DSGVO statt. Die Inhalte
                  der Website sind statisch; der Lernfortschritt wird rein lokal im Browser
                  gespeichert (Local Storage) und nicht zur Profilbildung verwendet.
                </p>
              </article>

              {/* Contact */}
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent-pink" aria-hidden="true" />
                  Kontakt bei Datenschutzfragen
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
                </p>
                <div className="mt-4 p-6 bg-neutral-light rounded-xl">
                  <p className="font-medium text-neutral-dark">Belkis Aslani</p>
                  <p className="text-neutral-gray mt-1">
                    Vogelsangstraße 32<br />
                    71691 Freiberg am Neckar
                  </p>
                  <a 
                    href="mailto:belkis.aslani@gmail.com?subject=Datenschutzanfrage"
                    className="inline-flex items-center gap-2 mt-4 text-primary-purple hover:text-primary-purple/80 transition-colors"
                    aria-label="E-Mail mit Datenschutzanfrage senden"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    belkis.aslani@gmail.com
                  </a>
                </div>
              </article>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-neutral-light text-center">
              <p className="text-sm text-neutral-gray">
                Stand: April 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
