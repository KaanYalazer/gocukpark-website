import BeforeAfterSlider from "./BeforeAfterSlider";
import { galleryItems, type GalleryItem } from "@/data/gallery";

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface-variant px-3 py-1 rounded text-label-caps text-on-surface-variant border-t border-outline-variant whitespace-nowrap">
      {children}
    </div>
  );
}

function FeaturedCard({ item }: { item: GalleryItem }) {
  return (
    <div className="col-span-1 md:col-span-12 group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h2 className="text-headline-md text-primary">{item.title}</h2>
        <CategoryBadge>{item.category}</CategoryBadge>
      </div>
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] shadow-lg">
        <BeforeAfterSlider
          before={item.before}
          after={item.after}
          alt={item.title}
          size="featured"
        />
      </div>
    </div>
  );
}

function StandardCard({ item }: { item: GalleryItem }) {
  return (
    <div className="col-span-1 md:col-span-6 group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-body-lg font-semibold text-primary">{item.title}</h3>
        <CategoryBadge>{item.category}</CategoryBadge>
      </div>
      <div className="relative w-full aspect-square md:aspect-[4/3]">
        <BeforeAfterSlider
          before={item.before}
          after={item.after}
          alt={item.title}
          size="standard"
        />
      </div>
    </div>
  );
}

type Props = {
  items?: GalleryItem[];
  limit?: number;
};

export default function GalleryGrid({ items = galleryItems, limit }: Props) {
  const list = limit ? items.slice(0, limit) : items;
  const featured = list.find((i) => i.featured);
  const rest = list.filter((i) => i !== featured);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter gap-y-8 md:gap-y-12">
      {featured && <FeaturedCard item={featured} />}
      {rest.map((item) => (
        <StandardCard key={item.id} item={item} />
      ))}
    </div>
  );
}
