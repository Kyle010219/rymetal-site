import Link from "next/link";
import { categories } from "@/lib/products";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white shadow-lg">
      <div className="container-xl flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tight"><span className="text-brand-orange">RY</span>METAL<span className="block text-[10px] font-medium tracking-widest text-slate-300">COOKWARE HANDLE MANUFACTURER</span></Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <Link href="/">Home</Link>
          <Link href="/category/bakelite-handle">Products</Link>
          <Link href="/oem-odm">OEM & ODM</Link>
          <Link href="/factory">Factory</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">News</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <Link href="/contact" className="btn-primary py-2.5">Get A Quote</Link>
      </div>
    </header>
  );
}
