export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  before: string;
  after: string;
  featured?: boolean;
};

// Yeni araç eklemek için aşağıdaki diziye yeni bir nesne ekleyin.
// `featured: true` olan öğe grid'de tam genişlikte gösterilir (yalnızca birini featured yapmanız önerilir).
// Before/After görsellerini /public/gallery/ altına koyup "/gallery/dosya-adi.jpg" şeklinde referanslayabilirsiniz.
export const galleryItems: GalleryItem[] = [
  {
    id: "porsche-911",
    title: "Porsche 911 Carrera",
    category: "Derin Çizik / Crease",
    before:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "tesla-model-s",
    title: "Tesla Model S",
    category: "Kapı Darbesi",
    before:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bmw-m4",
    title: "BMW M4",
    category: "Dolu Hasarı",
    before:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mercedes-c200",
    title: "Mercedes C200",
    category: "Park Hasarı",
    before:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "audi-a6",
    title: "Audi A6",
    category: "Mini Hasar",
    before:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1614026480418-bd11fde47c0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vw-passat",
    title: "VW Passat",
    category: "Lokal Boya",
    before:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
];
