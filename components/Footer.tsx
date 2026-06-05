import Link from "next/link";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-xl grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="text-2xl font-black"><span className="text-brand-orange">RT</span> METAL</div>
          <p className="mt-4 text-sm leading-6 text-slate-300">Professional cookware handle, side handle and knob manufacturer with OEM & ODM service.</p>
        </div>
        <div><h3 className="font-bold">Quick Links</h3><div className="mt-4 grid gap-2 text-sm text-slate-300"><Link href="/products/bakelite-handle-rt-001">Products</Link><Link href="/oem-odm">OEM & ODM</Link><Link href="/factory">Factory</Link><Link href="/contact">Contact</Link></div></div>
        <div><h3 className="font-bold">Categories</h3><div className="mt-4 grid gap-2 text-sm text-slate-300">{categories.slice(0,6).map(c => <Link key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>)}</div></div>
        <div><h3 className="font-bold">Contact</h3><p className="mt-4 text-sm text-slate-300">{site.email}<br />{site.phone}</p></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">© 2026 RT METAL. All rights reserved.</div>
    </footer>
  );
}
