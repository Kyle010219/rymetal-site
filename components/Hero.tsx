import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white via-white to-slate-100">
      <div className="container-xl grid min-h-[620px] items-center gap-8 py-14 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">PROFESSIONAL <span className="text-brand-orange">COOKWARE HANDLE</span> MANUFACTURER</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">Bakelite, Stainless Steel & Cast Zinc handles, side handles and knobs for cookware brands, importers and factories.</p>
          <div className="mt-8 grid grid-cols-2 gap-5 text-sm md:grid-cols-4">
            {["20+ Years", "OEM & ODM", "Strict QC", "Global Export"].map(x => <div key={x} className="rounded-xl bg-white p-4 text-center shadow-soft font-semibold">{x}</div>)}
          </div>
          <div className="mt-8 flex gap-4"><Link href="/category/bakelite-handle" className="btn-primary">View Products</Link><Link href="/contact" className="btn-secondary">Contact Us</Link></div>
        </div>
        <div className="rounded-3xl bg-white p-4 shadow-soft">
          <img src="/images/hero/cookware-hero.png" alt="RT METAL cookware handles applied on cookware" className="h-full w-full rounded-2xl object-contain" />
        </div>
      </div>
    </section>
  );
}
