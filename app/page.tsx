import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { categories, products, type Category } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      {/* Material Innovation Section */}
      <section className="container-xl py-48 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex flex-col items-end justify-between gap-12 md:flex-row mb-32 relative z-10">
          <div className="max-w-2xl">
            <span className="tag-industrial mb-6 block tracking-[0.3em]">Engineering The Future</span>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-slate-900">
              The Trinity of <br/> <span className="text-blue-600">Hardware.</span>
            </h2>
          </div>
          <p className="muted max-w-sm text-lg border-l-2 border-slate-100 pl-8">
            Every handle is a masterclass in ergonomics. We define the standard for Bakelite, Stainless, and Zinc components.
          </p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-3 relative z-10">
          {categories.slice(0, 3).map((c: Category, index) => (
            <Link 
              key={c.slug} 
              href={`/category/${c.slug}`} 
              className="group card-luxury relative h-[600px] flex flex-col items-center text-center justify-between py-16"
            >
              <div className="relative z-10 w-full">
                <span className="text-7xl font-black text-blue-600/10 group-hover:text-[#FF9900]/20 transition-colors duration-700 italic block mb-2">0{index + 1}</span>
                <h3 className="text-3xl font-bold tracking-tighter mb-4 group-hover:text-blue-600 transition-colors duration-500">{c.name}</h3>
                <p className="muted text-xs font-bold uppercase tracking-[0.2em] px-4 opacity-60">{c.description}</p>
              </div>

              {/* Centered Product Visual */}
              <div className="relative z-10 h-80 w-full flex items-center justify-center my-4">
                <div className="absolute inset-0 bg-slate-50 rounded-full scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"></div>
                {c.image ? (
                  <img src={c.image} alt={c.name} className="relative z-20 max-h-full max-w-[95%] object-contain drop-shadow-2xl transition-all duration-1000 transform group-hover:scale-105" />
                ) : (
                  <div className="relative z-20 h-32 w-32 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-[10px] font-bold uppercase tracking-widest">Image Pending</div>
                )}
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex flex-col items-center gap-4 text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] group-hover:text-blue-600 transition-all duration-500">
                  <span className="w-px h-8 bg-slate-200 group-hover:bg-blue-600 transition-all duration-500 mb-2"></span>
                  Discover Series
                </div>
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
