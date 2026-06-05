"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/products";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Group categories by material for the dropdown
  const bakeliteCategories = categories.filter(c => c.slug.startsWith("bakelite"));
  const stainlessCategories = categories.filter(c => c.slug.startsWith("stainless"));
  const castCategories = categories.filter(c => c.slug.startsWith("cast"));

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex justify-between items-center">
        <Link href="/" className="group">
          <span className="text-3xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition duration-500">RYMETAL<span className="text-blue-600">.</span></span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-12">
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-slate-900 transition uppercase tracking-[0.2em]">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Dropdown Menu */}
              <div className={`absolute top-full -left-48 mt-0 w-[800px] bg-white shadow-2xl rounded-3xl border border-slate-50 overflow-hidden transition-all duration-500 origin-top-left ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
                <div className="grid grid-cols-3 p-10 gap-10">
                  {/* Bakelite Column */}
                  <div>
                    <h4 className="text-blue-600 font-black text-[10px] tracking-[0.3em] mb-6">BAKELITE SERIES</h4>
                    <ul className="space-y-4">
                      {bakeliteCategories.map(c => (
                        <li key={c.slug}>
                          <Link href={`/category/${c.slug}`} className="text-sm font-bold text-slate-400 hover:text-slate-900 transition block">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stainless Column */}
                  <div>
                    <h4 className="text-blue-600 font-black text-[10px] tracking-[0.3em] mb-6">STAINLESS SERIES</h4>
                    <ul className="space-y-4">
                      {stainlessCategories.map(c => (
                        <li key={c.slug}>
                          <Link href={`/category/${c.slug}`} className="text-sm font-bold text-slate-400 hover:text-slate-900 transition block">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cast Column */}
                  <div>
                    <h4 className="text-blue-600 font-black text-[10px] tracking-[0.3em] mb-6">CAST ZINC SERIES</h4>
                    <ul className="space-y-4">
                      {castCategories.map(c => (
                        <li key={c.slug}>
                          <Link href={`/category/${c.slug}`} className="text-sm font-bold text-slate-400 hover:text-slate-900 transition block">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 flex justify-between items-center">
                  <p className="text-[10px] font-bold text-slate-400">Can't find what you need? We offer full custom mold development.</p>
                  <Link href="/oem-odm" className="text-[10px] font-black text-blue-600 hover:underline tracking-widest">OEM SERVICES →</Link>
                </div>
              </div>
            </div>

            <Link href="/oem-odm" className="hover:text-slate-900 transition">Engineering</Link>
            <Link href="/about" className="hover:text-slate-900 transition">Factory</Link>
          </div>
          <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full text-xs font-bold hover:bg-blue-600 hover:scale-105 transition-all duration-500">REQUEST QUOTE</Link>
        </nav>
      </div>
    </header>
  );
}
