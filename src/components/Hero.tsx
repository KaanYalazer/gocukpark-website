export default function Hero() {
  return (
    <section className="relative flex-1 flex items-center px-page overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container-max grid grid-cols-1 md:grid-cols-12 gap-gutter py-12 md:py-16">
        <div className="md:col-span-9 lg:col-span-8 flex flex-col items-start gap-6 md:gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border-t border-l border-outline-variant rounded-full text-label-caps text-on-surface">
            <span className="w-2 h-2 rounded-full bg-surface-tint shadow-[0_0_8px_rgba(193,199,207,0.6)]" />
            TİTİZ RESTORASYON
          </div>

          <h1 className="text-headline-xl text-primary max-w-3xl">
            Kusursuz Hassasiyet.
            <br />
            <span className="text-surface-tint">Görünmez Onarım.</span>
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Lüks ve performans araçları için gelişmiş Boyasız Göçük Düzeltme
            (PDR) teknolojisi. Aracınızın orijinal fabrika boyasını koruyarak,
            dolgu ve boyaya ihtiyaç duymadan klinik hassasiyetle değerini
            koruruz.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
            <a
              href="tel:+905326590075"
              className="bg-surface-tint text-on-primary-fixed text-body-sm font-semibold px-8 py-4 rounded hover:shadow-[0_0_15px_rgba(193,199,207,0.3)] transition-all"
            >
              Ücretsiz Ekspertiz Al
            </a>
            <a
              href="#surec"
              className="bg-transparent border border-outline text-on-surface text-body-sm font-semibold px-8 py-4 rounded hover:border-surface-tint hover:text-surface-tint transition-colors flex items-center gap-2"
            >
              Sürecimizi İnceleyin
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18 }}
              >
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
