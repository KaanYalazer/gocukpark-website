import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeri | Göçük Park",
  description:
    "Boyasız göçük düzeltme projelerimiz. Öncesi ve sonrası karşılaştırmalarla gerçek müşteri araçları üzerinde yapılan restorasyonlar.",
};

export default function GaleriPage() {
  return (
    <>
      <Header activePath="/galeri" />
      <main className="grow pt-18 md:pt-20">
        <div className="container-max px-page pt-12 md:pt-20 pb-16 md:pb-24">
          <header className="mb-12 md:mb-20 text-left max-w-3xl">
            <span className="text-label-caps text-surface-tint mb-4 block">
              PORTFÖY
            </span>
            <h1 className="text-headline-xl text-primary mb-6">
              Görünmez Sonuçlar.
              <br />
              <span className="text-surface-tint">Kanıtlı Hassasiyet.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Karmaşık göçük, çizik ve dolu hasarı restorasyon projelerimizden
              seçkiler. Sürgüyü hareket ettirerek uzman tekniklerimizin ham,
              düzenlenmemiş sonucunu görün.
            </p>
          </header>

          <GalleryGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
