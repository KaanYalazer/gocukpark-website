import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import PremiumHighlight from "@/components/PremiumHighlight";
import ProcessGrid from "@/components/ProcessGrid";
import ServicesGrid from "@/components/ServicesGrid";
import GalleryHighlight from "@/components/GalleryHighlight";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow pt-18">
        <div className="min-h-[calc(100svh-4.5rem)] flex flex-col border-b border-surface-container-highest">
          <Hero />
          <StatsGrid />
        </div>
        <FadeIn>
          <PremiumHighlight />
        </FadeIn>
        <FadeIn delay={0.05}>
          <ProcessGrid />
        </FadeIn>
        <FadeIn delay={0.05}>
          <GalleryHighlight />
        </FadeIn>
        <FadeIn delay={0.05}>
          <ServicesGrid />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
