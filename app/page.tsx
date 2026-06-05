import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { categories, products, type Category } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      {/* Material Innovation Section: Luxury Showroom Version */}
      <section className="max-w-6xl mx-auto py-32 relative overflow-hidden bg-white px-8">
        {/* Architectural background texture */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row mb-20 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#FF9900]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF9900]">Materiality & Engineering</span>
            </div>
            <h2 className="text-6xl lg:text-[80px] font-black tracking-tighter leading-[0.8] text-slate-900 mb-6 italic">
              THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">TRINITY.</span>
            </h2>
          </div>
          <p className="muted max-w-xs text-base font-light leading-relaxed border-l border-slate-200 pl-8 mt-2">
            Forging the future of cookware with the three pillars of high-performance hardware. Precision defined.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          {categories.slice(0, 3).map((c: Category, index) => (
            <Link 
              key={c.slug} 
              href={`/category/${c.slug}`} 
              className="group relative min-h-[520px] bg-white rounded-[2.5rem] border border-slate-50 shadow-2xl shadow-slate-200/50 hover:shadow-blue-100/40 transition-all duration-1000 overflow-hidden flex flex-col p-10"
            >
              {/* Background Geometric Number */}
              <div className="absolute top-6 right-6 text-[140px] font-black leading-none italic pointer-events-none select-none text-slate-50 group-hover:text-[#FF9900]/5 transition-colors duration-700">
                0{index + 1}
              </div>

              {/* Title & Index */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-4 bg-blue-600 group-hover:bg-[#FF9900] transition-colors duration-500"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-600 group-hover:text-[#FF9900]">Series 0{index + 1}</span>
                </div>
                <h3 className="text-3xl font-black tracking-tighter text-slate-900 mb-3 group-hover:translate-x-2 transition-transform duration-500">{c.name}</h3>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-loose max-w-[180px] group-hover:text-slate-600 transition-colors duration-500">
                   {index === 0 ? "ULTRA HEAT-SHIELD SOLUTIONS" : index === 1 ? "MIRROR-FORGED ARCHITECTURAL HARDWARE" : "SOLID-CORE PRECISION CASTING"}
                </p>
              </div>

              {/* Centered Luxury Visual */}
              <div className="relative flex-grow flex items-center justify-center py-4">
                {/* Floating Shadow/Glow Base */}
                <div className="absolute bottom-1/4 w-40 h-8 bg-blue-600/5 rounded-[100%] blur-2xl group-hover:bg-[#FF9900]/10 group-hover:w-56 transition-all duration-1000"></div>
                
                {c.image ? (
                  <div className="relative z-20 w-full h-full flex items-center justify-center">
                     <img 
                      src={c.image} 
                      alt={c.name} 
                      className={`max-h-full max-w-[115%] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_35px_35px_rgba(59,130,246,0.1)] transition-all duration-1000 transform group-hover:scale-110 group-hover:-translate-y-4 ${index === 1 ? 'mix-blend-multiply' : ''}`} 
                    />
                  </div>
                ) : (
                  <div className="h-32 w-32 rounded-full border-2 border-dashed border-slate-100 flex items-center justify-center">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest italic">Specs Pending</span>
                  </div>
                )}
              </div>

              {/* Bottom Interaction */}
              <div className="relative z-10 mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-blue-600 transition-colors duration-500">Master Collection</span>
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-300 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Collection: Professional Grid */}
      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="text-left">
              <span className="tag-industrial mb-4 block tracking-[0.3em]">Curated Selection</span>
              <h2 className="text-5xl font-black tracking-tighter">Precision Components.</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:text-[#FF9900] transition group">
              Master Catalog <span className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 transition duration-500">→</span>
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {products.slice(0, 6).map(p => (
              <div key={p.slug} className="group transition-transform duration-500 hover:-translate-y-2">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Excellence: Dark Luxury Mode */}
      <section className="container-xl py-32 grid gap-24 lg:grid-cols-2 items-center">
        <div>
          <span className="text-[#FF9900] text-[10px] font-black tracking-[0.4em] mb-6 block uppercase">Bespoke R&D</span>
          <h2 className="text-6xl font-black tracking-tighter leading-none mb-10 italic">Blueprints <br/> to Reality.</h2>
          <p className="muted text-lg mb-12 font-light max-w-lg">
            Our 18-year legacy in industrial engineering allows us to transform technical drawings into container-ready production within 25 business days.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            {[
              { title: "2D/3D CAD", desc: "Expert prototyping." },
              { title: "Custom Tooling", desc: "Precision molds." },
              { title: "ISO Certified", desc: "Global quality." },
              { title: "ROHS Compliant", desc: "Safe materials." }
            ].map(item => (
              <div key={item.title} className="border-b border-slate-100 pb-4">
                <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/oem-odm" className="inline-block bg-slate-900 text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-blue-600 transition shadow-2xl">Initialize Project</Link>
        </div>
        
        <div className="relative p-12 lg:p-20">
          <div className="absolute inset-0 bg-blue-50/30 rounded-[4rem] -rotate-3 border border-blue-100"></div>
          <div className="relative z-10 grid grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center aspect-square transform hover:-rotate-3 transition duration-500">
              <div className="text-5xl font-black text-slate-900 mb-2 italic">18Y</div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#FF9900]">Engineering</p>
            </div>
            <div className="bg-slate-900 p-12 rounded-[2.5rem] shadow-2xl text-center flex flex-col justify-center aspect-square mt-12 transform hover:rotate-3 transition duration-500">
              <div className="text-5xl font-black text-white mb-2 italic text-transparent bg-clip-text bg-gradient-to-tr from-white to-blue-400">15</div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-400">High-Tech Lines</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center aspect-square transform hover:rotate-3 transition duration-500">
              <div className="text-5xl font-black text-slate-900 mb-2 italic text-transparent bg-clip-text bg-gradient-to-tr from-slate-900 to-slate-400">50K</div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400">Daily Output</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center aspect-square mt-12 transform hover:-rotate-3 transition duration-500 border-2 border-blue-50">
              <div className="text-5xl font-black text-blue-600 mb-2 italic">100%</div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-600">QC Verified</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
