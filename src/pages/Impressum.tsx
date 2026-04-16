import { Mail, MapPin, Phone, User } from 'lucide-react';

const Impressum = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 bg-gradient-to-br from-neutral-dark to-neutral-gray overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="container-wide text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
              Impressum
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) und § 18 MStV
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="container-wide max-w-3xl">
            {/* Provider Information */}
            <div className="bg-neutral-light rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-6">
                Dienstanbieter
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gray mb-1">Name</p>
                    <p className="font-medium text-neutral-dark">Belkis Aslani</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gray mb-1">Anschrift</p>
                    <p className="font-medium text-neutral-dark">
                      Vogelsangstraße 32<br />
                      71691 Freiberg am Neckar<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gray mb-1">Telefon</p>
                    <a
                      href="tel:+4917681462526"
                      className="font-medium text-primary-purple hover:text-primary-purple/80 transition-colors"
                      aria-label="Telefonnummer anrufen"
                    >
                      +49 176 81462526
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-pink/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-pink" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gray mb-1">E-Mail</p>
                    <a
                      href="mailto:belkis.aslani@gmail.com"
                      className="font-medium text-primary-purple hover:text-primary-purple/80 transition-colors"
                      aria-label="E-Mail an belkis.aslani@gmail.com senden"
                    >
                      belkis.aslani@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="space-y-8">
              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich
                  als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                  den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                  ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                  möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
                  Inhalte umgehend entfernen.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4">
                  Haftung für Links
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
                  keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr
                  übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                  oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                  Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
                  von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4">
                  Urheberrecht
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                  Gebrauch gestattet. Es gilt die Lizenz
                  <a
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-purple hover:text-primary-purple/80 transition-colors"
                  > Creative Commons BY-NC-ND 4.0</a>.
                </p>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                  gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                  werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
                  Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </p>
              </article>

              <article>
                <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4">
                  Streitschlichtung
                </h2>
                <p className="text-neutral-gray leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                  bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-purple hover:text-primary-purple/80 transition-colors"
                    aria-label="Online-Streitbeilegungsplattform der EU öffnen (öffnet in neuem Tab)"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-neutral-gray leading-relaxed mt-4">
                  Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
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

export default Impressum;
