import { products, categories } from "@/lib/products";
import InquiryForm from "@/components/InquiryForm";
import { notFound } from "next/navigation";

export function generateStaticParams(){ return products.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find(x => x.slug === slug);
  return { title: p ? `${p.name} | RT METAL` : "Product | RT METAL", description: p?.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  const category = categories.find(c => c.slug === product.category);
  return (
    <main className="container-xl py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="card p-8"><img src={product.image} alt={product.name} className="h-[460px] w-full object-contain" /></div>
        <div>
          <p className="font-bold text-brand-orange">{category?.name}</p>
          <h1 className="mt-2 text-4xl font-black">{product.name}</h1>
          <p className="muted mt-5">{product.description}</p>
          <dl className="mt-8 grid gap-3 text-sm">
            <div className="flex justify-between border-b py-3"><dt>Material</dt><dd className="font-semibold">{product.material}</dd></div>
            <div className="flex justify-between border-b py-3"><dt>Finish</dt><dd className="font-semibold">{product.finish}</dd></div>
            <div className="flex justify-between border-b py-3"><dt>Heat Resistance</dt><dd className="font-semibold">{product.heatResistance}</dd></div>
            <div className="flex justify-between border-b py-3"><dt>MOQ</dt><dd className="font-semibold">{product.moq}</dd></div>
          </dl>
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="card p-8"><h2 className="text-2xl font-bold">OEM Options</h2><p className="muted mt-4">Custom color, logo embossing, surface finish, screw hole distance, packing and mold development are available.</p></section>
        <InquiryForm productName={product.name} />
      </div>
    </main>
  );
}
