import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products | RT METAL",
  description:
    "Browse our full catalog of cookware handles, side handles, knobs and lid handles. Bakelite, stainless steel and cast zinc components with OEM & ODM service.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">
            Master Catalog
          </p>
          <h1 className="text-4xl lg:text-6xl font-light tracking-tight">
            Complete <span className="font-semibold">Collection.</span>
          </h1>
          <p className="mt-6 text-white/50 text-lg max-w-2xl leading-relaxed">
            Explore our full range of precision-engineered cookware hardware.
            Every component is backed by 18 years of manufacturing excellence
            and OEM/ODM customization capability.
          </p>
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat.slug);
        if (items.length === 0) return null;

        return (
          <section
            key={cat.slug}
            className="border-b border-white/5 last:border-b-0"
          >
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-2">
                    Series
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-light tracking-tight">
                    {cat.name}
                  </h2>
                  {cat.description && (
                    <p className="mt-2 text-white/40 text-sm max-w-xl">
                      {cat.description}
                    </p>
                  )}
                </div>
                <Link
                  href={`/category/${cat.slug}`}
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors shrink-0"
                >
                  View All
                  <span className="text-lg leading-none">&rarr;</span>
                </Link>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4">
            Can&apos;t find what you need?
          </p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4">
            Custom OEM <span className="font-semibold">&amp; ODM.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-8">
            Send us your drawings, samples or specifications. Our engineering
            team delivers tailored solutions from concept to container.
          </p>
          <Link
            href="/oem-odm"
            className="inline-block px-8 py-3 border border-white/20 hover:border-white/50 text-white/80 hover:text-white text-sm tracking-wider uppercase transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
