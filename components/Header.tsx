import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-8 h-28 flex justify-between items-center">
        {/* Large RYMETAL Logo */}
        <Link href="/" className="group">
          <span className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 group-hover:opacity-80 transition duration-500 italic">
            <span className="text-[#FF9900]">RY</span>METAL
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-12">
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <Link href="/category/bakelite-handle" className="hover:text-slate-900 transition">Products</Link>
            <Link href="/oem-odm" className="hover:text-slate-900 transition">OEM & ODM</Link>
            <Link href="/factory" className="hover:text-slate-900 transition">Factory</Link>
            <Link href="/about" className="hover:text-slate-900 transition">About Us</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
          </div>
          <Link href="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-full text-xs font-bold hover:bg-[#FF9900] hover:scale-105 transition-all duration-500 shadow-xl shadow-slate-200">
            GET A QUOTE
          </Link>
        </nav>
      </div>
    </header>
  );
}
