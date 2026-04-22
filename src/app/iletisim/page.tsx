import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim | Göçük Park",
  description:
    "Göçük Park ile iletişime geçin. Haramidere, Beylikdüzü / İstanbul konumumuzda ücretsiz ekspertiz ve profesyonel PDR hizmeti.",
};

const MAPS_QUERY = encodeURIComponent(
  "Göçük Park, Kristal Sok, Yakuplu Mah. Haramidere Sanayi Sitesi, Haramidere Yolu No: 108 M Blok, 34542 Beylikdüzü/İstanbul",
);
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

const hours = [
  { day: "Pazartesi – Cuma", value: "09:00 – 19:00" },
  { day: "Cumartesi", value: "09:00 – 19:00" },
  { day: "Pazar", value: "Kapalı", closed: true },
];

export default function IletisimPage() {
  return (
    <>
      <Header activePath="/iletisim" />
      <main className="grow pt-18 md:pt-20 flex flex-col">
        {/* Hero */}
        <section className="relative w-full h-[320px] md:h-[409px] min-h-[300px] flex items-center justify-center overflow-hidden border-b border-outline-variant">
          <div className="absolute inset-0 z-0 bg-surface-container-high">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 text-center px-page">
            <h1 className="text-headline-xl text-primary mb-4 drop-shadow-lg">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Mühendislik hassasiyeti, üstün müşteri hizmetiyle buluşuyor.
              Ücretsiz ekspertiz veya randevu için bize ulaşın.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full container-max px-page py-14 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sol: Bilgiler */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <h2 className="text-headline-md text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  location_on
                </span>
                Adres
              </h2>
              <div className="space-y-2 text-on-surface text-body-lg">
                <p>Kristal Sok, Yakuplu Mah.</p>
                <p>Haramidere Sanayi Sitesi</p>
                <p>Haramidere Yolu No: 108 M Blok</p>
                <p className="text-on-surface-variant">
                  34542 Beylikdüzü / İstanbul
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-outline-variant/50" />

            <div>
              <h2 className="text-headline-md text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  schedule
                </span>
                Çalışma Saatleri
              </h2>
              <div className="space-y-3 text-body-lg">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <span className="text-on-surface-variant">{h.day}</span>
                    <span
                      className={
                        h.closed
                          ? "text-outline"
                          : "font-medium text-primary"
                      }
                    >
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-outline-variant/50" />

            <div>
              <h2 className="text-headline-md text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  call
                </span>
                Direkt Hat
              </h2>
              <a
                href="tel:+905326590075"
                className="block text-primary font-bold tracking-tight mb-8 hover:text-surface-tint transition-colors"
                style={{ fontSize: 32, lineHeight: 1.1 }}
              >
                0532 659 00 75
              </a>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+905326590075"
                  className="px-6 py-4 bg-gradient-to-r from-secondary to-primary text-on-primary text-label-caps rounded transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  ŞİMDİ ARA
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 16 }}
                  >
                    arrow_forward
                  </span>
                </a>
                <a
                  href="https://wa.me/905326590075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 border border-outline text-on-surface text-label-caps rounded transition-colors hover:border-surface-tint hover:text-surface-tint flex items-center justify-center gap-2"
                >
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* Sağ: Harita */}
          <div className="lg:col-span-8 w-full">
            <div className="relative w-full h-[420px] md:h-[600px] bg-surface-container border border-outline-variant/40 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                title="Göçük Park konumu"
                src={MAPS_EMBED_URL}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18 }}
              >
                open_in_new
              </span>
              Google Haritalar'da aç
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
