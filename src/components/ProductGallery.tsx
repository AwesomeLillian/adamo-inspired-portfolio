type Product = {
  image: string;
  alt: string;
  description: string;
};

type ProductGalleryProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  products: Product[];
};

export function ProductGallery({ eyebrow, title, introduction, products }: ProductGalleryProps) {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="editorial-kicker">{eyebrow}</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-none text-foreground md:text-6xl">
            {title}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{introduction}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <figure key={product.image} className="overflow-hidden border border-border bg-background">
              <div className="aspect-[4/3] bg-product p-3">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  width={1600}
                  height={1243}
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="min-h-24 border-t border-border px-4 py-4 text-xs leading-relaxed text-muted-foreground">
                {product.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}