import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-slate-900 flex items-center py-24 lg:py-32">
      {/* Background Video with Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://sc02.alicdn.com/kf/H4d94bbb1ccda4bec95b4366dd8ac49e0T.png"
        src="/videos/factory-tour.mp4"
        className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale-[0.3]"
      >
      </video>

      {/* Modern Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent"></div>

      {/* Content */}
      <div className="container-xl relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Direct Factory Supply</span>
          </div>
          
          <h1 className="text-6xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl">
            Pure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">Engineering.</span>
          </h1>
          
          <p className="mt-8 max-w-xl text-xl font-light leading-relaxed text-slate-300">
            Professional Cookware Accessories Manufacturer. 18 years of excellence in Bakelite, Stainless Steel, and Zinc Alloy precision components.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <Link 
              href="/products" 
              className="group relative overflow-hidden rounded-full bg-white px-12 py-5 text-sm font-bold text-slate-900 transition-all hover:scale-105"
            >
              <span className="relative z-10 uppercase tracking-widest">Master Catalog</span>
            </Link>
            <Link 
              href="/contact" 
              className="rounded-full border-2 border-white/30 bg-white/5 px-12 py-5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900"
            >
              <span className="uppercase tracking-widest">Get a Quote</span>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 text-white md:grid-cols-4">
            {[
              { label: "R&D Experience", value: "18+ Years" },
              { label: "Daily Output", value: "50,000+ pcs" },
              { label: "Factory Size", value: "2,000 m²" },
              { label: "Global Partners", value: "300+" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black italic">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architectural grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
    </section>
  );
}
