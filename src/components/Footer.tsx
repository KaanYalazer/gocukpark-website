import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-highest bg-surface-container-lowest">
      <div className="container-max grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 px-page py-14 md:py-16">
        <div className="flex flex-col gap-4 md:col-span-1">
          <span className="text-lg font-bold text-primary uppercase tracking-tight">
            GÖÇÜK PARK
          </span>
          <p className="text-body-sm text-on-surface-variant">
            Boyasız göçük düzeltme ve profesyonel kaporta restorasyonu.
            Haramidere, Beylikdüzü.
          </p>
          <p className="text-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} Göçük Park. Tüm hakları saklıdır.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-label-caps text-surface-tint mb-1">
            HİZMETLER
          </span>
          {[
            "Boyasız Göçük Düzeltme",
            "Dolu Hasarı Onarımı",
            "Park Hasarları",
            "Lokal Boya Onarımı",
            "Profesyonel Pasta Cila",
          ].map((s) => (
            <Link
              key={s}
              href="#hizmetler"
              className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {s}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-label-caps text-surface-tint mb-1">
            İLETİŞİM
          </span>
          <a
            href="tel:+905326590075"
            className="text-body-sm text-on-surface hover:text-primary transition-colors"
          >
            0532 659 00 75
          </a>
          <p className="text-body-sm text-on-surface-variant">
            Pazartesi – Cumartesi
            <br />
            09:00 – 19:00
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-label-caps text-surface-tint mb-1">ADRES</span>
          <p className="text-body-sm text-on-surface-variant">
            Kristal Sok, Yakuplu Mah.
            <br />
            Haramidere Sanayi Sitesi
            <br />
            Haramidere Yolu No: 108 M Blok
            <br />
            34542 Beylikdüzü / İstanbul
          </p>
        </div>
      </div>
    </footer>
  );
}
