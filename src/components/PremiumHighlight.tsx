import BeforeAfterSlider from "./BeforeAfterSlider";
import { galleryItems } from "@/data/gallery";

const features = [
  { icon: "verified", text: "%100 Fabrika Boyası Koruması" },
  { icon: "speed", text: "Küçük Hasarlarda Aynı Gün Teslim" },
  { icon: "shield", text: "1 Yıl İşçilik Garantisi" },
];

export default function PremiumHighlight() {
  const showcase =
    galleryItems.find((i) => i.featured) ?? galleryItems[0];

  return (
    <section className="py-16 md:py-24 px-page bg-surface-container-lowest">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h2 className="text-headline-md text-primary">
            Orijinalliği Koruma Sanatı
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Geleneksel kaporta yöntemleri zımparalama, dolgu ve boyama içerir;
            bu süreç aracınızın DNA'sını kalıcı olarak değiştirir. Göçük Park'ta
            hassas tekniklerimizle metali panelin arkasından orijinal formuna
            masaj yaparak geri getiriyoruz.
          </p>
          <p className="text-body-lg text-on-surface-variant">
            Sonuç; yapısal olarak sağlam, görsel olarak kusursuz bir onarımdır.
            Fabrika boyası garantinizi ve aracınızın ikinci el değerini korur.
            Titiz sahipler için yüksek seviyeli işçilik.
          </p>

          <ul className="flex flex-col gap-4 mt-2 md:mt-4 text-body-sm text-on-surface">
            {features.map((f) => (
              <li key={f.icon} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-surface-tint">
                  {f.icon}
                </span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="aspect-4/5 rounded-xl overflow-hidden metallic-edge border border-outline-variant/30 relative">
            <BeforeAfterSlider
              before={showcase.before}
              after={showcase.after}
              alt={showcase.title}
              size="featured"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
