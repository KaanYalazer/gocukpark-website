import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Göçük Park",
  description:
    "Boyasız göçük düzeltme (PDR), dolu hasarı onarımı, park hasarları, mini hasar, lokal boya ve profesyonel pasta cila hizmetleri.",
};

export default function HizmetlerPage() {
  return (
    <>
      <Header activePath="/hizmetler" />
      <main className="grow pt-18 md:pt-20">
        <section className="px-page pt-12 md:pt-20 pb-8 md:pb-12 container-max">
          <div className="max-w-2xl">
            <span className="text-label-caps text-surface-tint mb-4 block">
              UZMANLIK ALANLARIMIZ
            </span>
            <h1 className="text-headline-xl text-primary mb-6">
              Tavizsiz Restorasyon.
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Göçük Park'ta, gelişmiş metalurjik masaj teknikleri ile aracınızın
              fabrika boyasını koruyarak hasarı geri çeviriyoruz. Her hizmet, 1
              yıl işçilik garantimiz altındadır.
            </p>
          </div>
        </section>
        <ServicesGrid showIntro={false} />
      </main>
      <Footer />
    </>
  );
}
