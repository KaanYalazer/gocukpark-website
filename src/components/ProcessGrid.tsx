const steps = [
  {
    icon: "search",
    title: "1. Tespit & Ekspertiz",
    text: "Hasarlı bölge, özel ışık panelleri ve optik tarama ile detaylı şekilde incelenir. Metalin topografisi ve stres noktaları belirlenir. Müşterimize ücretsiz ve şeffaf bir rapor sunulur.",
  },
  {
    icon: "build",
    title: "2. Erişim & Hazırlık",
    text: "Panelin arkasına araca zarar vermeden erişim sağlanır. Netliğin kaydedilmesi için özel LED aydınlatma sistemleri tam açıyla konumlandırılır.",
  },
  {
    icon: "precision_manufacturing",
    title: "3. Mikro Müdahale",
    text: "Cerrahi hassasiyetteki çelik PDR aletleri ile metal, yüzlerce hesaplı mikro hareketle orijinal fabrika formuna geri getirilir. Boyasız, dolgusuz, izsiz.",
  },
];

export default function ProcessGrid() {
  return (
    <section
      id="surec"
      className="py-16 md:py-24 px-page bg-background border-t border-surface-container-highest"
    >
      <div className="container-max">
        <div className="mb-12 md:mb-16">
          <span className="text-label-caps text-surface-tint">SÜREÇ</span>
          <h2 className="text-headline-md text-primary mt-3 mb-4">
            Klinik Hassasiyetle Onarım
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Yapısal restorasyona çok aşamalı, klinik bir yaklaşım. Her adım,
            aracınızın orijinalliğini koruyacak şekilde planlanır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-surface-container rounded-xl p-6 md:p-8 metallic-edge flex flex-col gap-4 hover:bg-surface-container-high transition-colors border border-outline-variant/20"
            >
              <div className="w-12 h-12 rounded bg-surface-variant flex items-center justify-center border border-outline-variant/50">
                <span className="material-symbols-outlined text-surface-tint">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-body-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
