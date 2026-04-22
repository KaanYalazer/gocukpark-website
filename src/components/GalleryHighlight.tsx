import Link from "next/link";
import GalleryGrid from "./GalleryGrid";

export default function GalleryHighlight() {
  return (
    <section className="px-page py-16 md:py-24 border-t border-surface-container-highest bg-surface-container-lowest">
      <div className="container-max">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-label-caps text-surface-tint mb-4 block">
            GALERİ
          </span>
          <h2 className="text-headline-md md:text-headline-xl text-primary mb-6">
            Öncesi ve Sonrası.
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Gerçek müşteri araçları üzerindeki çalışmalarımızdan seçkiler.
            Sürgüyü hareket ettirerek hassas restorasyonlarımızın ham sonucunu
            görün.
          </p>
        </div>

        <GalleryGrid limit={3} />

        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/galeri"
            className="group inline-flex items-center gap-2 text-label-lg text-surface-tint hover:text-primary transition-colors border border-outline-variant/40 hover:border-surface-tint/40 rounded-full px-6 py-3"
          >
            Daha Fazlasını Gör
            <span
              className="material-symbols-outlined transition-transform group-hover:translate-x-1"
              style={{ fontSize: 18 }}
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
