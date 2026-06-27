import { categories, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export function generateStaticParams(){ return categories.map(c => ({ slug: c.slug })); }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  if (!category) notFound();
  const items = products.filter(p => p.category === slug);
  return (
    <main className="container-xl py-14">
      <h1 className="section-title">{category.name}</h1>
      <p className="muted mt-4 max-w-3xl">{category.description} RT METAL provides OEM & ODM production for cookware brands and importers.</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{items.map(p => <ProductCard key={p.slug} product={p} />)}</div>
    </main>
  );
}
