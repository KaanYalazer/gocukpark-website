const services = [
  {
    icon: "healing",
    title: "Boyasız Göçük Düzeltme (PDR)",
    text: "Aracınızın orijinalliğini ve fabrika boyasını bozmadan, değer kaybı yaşatmadan yapılan profesyonel göçük onarımı. Metal, panelin arkasından hassas aletlerle orijinal formuna getirilir.",
  },
  {
    icon: "grain",
    title: "Dolu Hasarı Onarımı",
    text: "En zorlu hava koşulları sonrası oluşan çoklu göçüklerin, özel ışık sistemleri ve mikro-push teknikleri ile panellerin tamamında eşit ve izsiz şekilde giderilmesi.",
  },
  {
    icon: "minor_crash",
    title: "Park Hasarları Onarımı",
    text: "Kapı çarpmaları, otopark sürtmeleri ve günlük küçük darbelerin cerrahi hassasiyetle tamiri. Aracınızın zarif hatlarını boyasız yöntemle yeniden kazandırırız.",
  },
  {
    icon: "horizontal_rule",
    title: "Mini Hasar Onarımı",
    text: "Küçük çaplı kaporta eziklerinin hassas işçilikle, orijinal boyaya zarar vermeden düzeltilmesi. Hızlı teslim süresi ve ekonomik çözüm.",
  },
  {
    icon: "format_paint",
    title: "Lokal Boya Onarımı",
    text: "Parçanın tamamını boyamadan, yalnızca hasarlı bölgeye uygulanan hassas boya müdahalesi. Renk uyumu ve pürüzsüz geçiş için özel tonlama süreci.",
  },
  {
    icon: "auto_fix_high",
    title: "Profesyonel Pasta Cila",
    text: "Onarım sonrası yüzey parlatma, koruma ve detaylı bakım işlemleri. Aracınızın boyasına derin parlaklık kazandırır ve uzun ömürlü koruma sağlar.",
  },
];

type Props = {
  showIntro?: boolean;
  id?: string;
};

export default function ServicesGrid({ showIntro = true, id = "hizmetler" }: Props) {
  return (
    <section
      id={id}
      className="px-page py-16 md:py-24 border-t border-surface-container-highest bg-background"
    >
      <div className="container-max">
        {showIntro && (
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="text-label-caps text-surface-tint mb-4 block">
              UZMANLIK ALANLARIMIZ
            </span>
            <h2 className="text-headline-md md:text-headline-xl text-primary mb-6">
              Tavizsiz Restorasyon.
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Gelişmiş metalurjik masaj teknikleri ile aracınızın fabrika
              boyasını koruyarak hasarı geri çeviriyoruz. Özel onarım
              protokollerimizi aşağıda inceleyin.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden bg-gradient-to-br from-surface-container to-surface-container-low rounded-xl p-8 md:p-10 border-t border-l border-outline-variant/40 border-b border-r border-transparent flex flex-col gap-6 hover:border-surface-tint/30 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-surface-tint/5 rounded-full blur-3xl group-hover:bg-surface-tint/10 transition-colors duration-500" />

              <div className="relative w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/30 text-surface-tint">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 24 }}
                >
                  {s.icon}
                </span>
              </div>

              <div className="relative">
                <h3 className="text-headline-md text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-body-lg text-on-surface-variant">{s.text}</p>
              </div>

              <a
                href={`https://wa.me/905326590075?text=${encodeURIComponent(
                  `Merhaba, "${s.title}" hizmeti için fiyat teklifi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-auto inline-flex items-center gap-2 text-label-lg text-surface-tint hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  chat
                </span>
                Fiyat Teklifi Al
                <span
                  className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                  style={{ fontSize: 18 }}
                >
                  arrow_forward
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
