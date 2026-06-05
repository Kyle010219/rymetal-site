import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container-xl py-16">
        <div className="text-center"><h2 className="section-title">Product Categories</h2><p className="muted mt-3">A wide range of cookware handles and knobs to meet different needs.</p></div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(c => <Link key={c.slug} href={`/category/${c.slug}`} className="card p-6 hover:border-brand-orange"><h3 className="text-xl font-bold">{c.name}</h3><p className="mt-2 text-sm text-slate-600">{c.description}</p></Link>)}
        </div>
      </section>
      <section className="bg-brand-gray py-16"><div className="container-xl"><h2 className="section-title text-center">Featured Products</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{products.slice(0,9).map(p => <ProductCard key={p.slug} product={p} />)}</div></div></section>
      <section className="container-xl grid gap-10 py-16 lg:grid-cols-2">
        <div><p className="font-bold text-brand-orange">OEM & ODM SERVICE</p><h2 className="section-title mt-2">From Idea To Mass Production</h2><p className="muted mt-5">We support product design, 3D modeling, mold development, sampling, mass production, quality inspection and export packaging.</p><Link href="/oem-odm" className="btn-primary mt-7">Learn More</Link></div>
        <div className="grid grid-cols-2 gap-4">{["Product Design","Mold Development","Mass Production","Quality Control"].map(x => <div key={x} className="card p-8 font-bold">{x}</div>)}</div>
      </section>
    </main>
  );
}
