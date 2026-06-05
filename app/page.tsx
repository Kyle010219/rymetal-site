import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { categories, products, type Category } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      {/* Material Innovation Section */}
      <section className="container-xl py-32">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row mb-20">
          <div className="max-w-xl">
            <span className="tag-industrial mb-4 block">Our Materiality</span>
            <h2 className="section-title leading-none">The Trinity of <br/> Cookware Hardware.</h2>
          </div>
          <p className="muted max-w-sm">Every handle is a promise of engineering excellence. We specialize in the three fundamental materials of modern kitchens.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {categories.slice(0, 3).map((c: Category, index) => (
            <Link 
              key={c.slug} 
              href={`/category/${c.slug}`} 
              className="group card-luxury relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-500 italic block mb-6">0{index + 1}</span>
                <h3 className="text-2xl font-bold tracking-tight mb-4">{c.name}</h3>
                <p className="muted mb-8 line-clamp-2">{c.description}</p>
                <div className="flex items-center gap-3 text-blue-600 font-bold text-xs uppercase tracking-widest">
                  Explore Series <span>→</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 h-64 w-64 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                {c.image ? (
                  <img src={c.image} alt={c.name} className="h-full w-full object-contain" />
                ) : (
                  <div className="h-full w-full rounded-full bg-slate-100"></div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="container-xl">
          <div className="text-center mb-24">
            <span className="tag-industrial mb-4 block">Master Collection</span>
            <h2 className="section-title">Precision Crafted Components.</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {products.slice(0, 6).map(p => (
              <div key={p.slug} className="group">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link href="/products" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:text-blue-600 transition group">
              View Entire Catalog 
              <span className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition duration-500">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OEM/ODM Excellence */}
      <section className="container-xl py-32 grid gap-24 lg:grid-cols-2 items-center">
        <div>
          <span className="tag-industrial mb-6 block">Industrial R&D</span>
          <h2 className="section-title mb-10">From Blueprints <br/> to Mass Production.</h2>
          <p className="muted text-lg mb-12">
            Equipped with 15 sets of high-tonnage injection machines and a dedicated CAD laboratory, RYMETAL provides seamless OEM/ODM services for global cookware brands.
          </p>
          <div className="space-y-8 mb-12">
            {[
              { title: "2D/3D Prototyping", desc: "Digital blueprints to physical samples in 48 hours." },
              { title: "Custom Mold Tooling", desc: "High-precision mold development within 25 days." },
              { title: "Global Logisitcs", desc: "Optimized shipping for containers to 60+ countries." }
            ].map(item => (
              <div key={item.title} className="flex gap-6 items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2.5"></div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/oem-odm" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition shadow-xl">Start Your Project</Link>
        </div>
        
        <div className="relative">
           {/* Decorative grid pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none -translate-x-12 translate-y-12">
            <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          </div>
          <div className="grid grid-cols-2 gap-6 relative z-10">
            <div className="card-luxury p-8 aspect-square flex flex-col justify-center text-center">
              <div className="text-4xl font-black mb-2 italic">18Y</div>
              <p className="tag-industrial text-[8px]">Experience</p>
            </div>
            <div className="card-luxury p-8 aspect-square flex flex-col justify-center text-center mt-12 bg-blue-600 border-blue-600 shadow-blue-100">
              <div className="text-4xl font-black mb-2 text-white italic">15</div>
              <p className="tag-industrial text-[8px] text-blue-100">High-Tech Machines</p>
            </div>
            <div className="card-luxury p-8 aspect-square flex flex-col justify-center text-center">
              <div className="text-4xl font-black mb-2 italic">50K+</div>
              <p className="tag-industrial text-[8px]">Daily Output</p>
            </div>
            <div className="card-luxury p-8 aspect-square flex flex-col justify-center text-center mt-12">
              <div className="text-4xl font-black mb-2 italic">100%</div>
              <p className="tag-industrial text-[8px]">QC Verified</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
