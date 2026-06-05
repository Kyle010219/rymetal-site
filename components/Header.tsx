"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const productCategories = [
    { name: "Bakelite Long Handle", href: "/category/bakelite-handle" },
    { name: "Bakelite Side Handle", href: "/category/bakelite-side-handle" },
    { name: "Bakelite Knob", href: "/category/bakelite-knob" },
    { name: "Stainless Long Handle", href: "/category/stainless-handle" },
    { name: "Stainless Side Handle", href: "/category/stainless-side-handle" },
    { name: "Stainless Knob", href: "/category/stainless-knob" },
    { name: "Cast Long Handle", href: "/category/cast-zinc-handle" },
    { name: "Cast Side Handle", href: "/category/cast-zinc-side-handle" },
    { name: "Cast Lid Handle", href: "/category/cast-zinc-lid-handle" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-8 h-28 flex justify-between items-center">
        {/* Large RYMETAL Logo */}
        <Link href="/" className="group">
          <span className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 group-hover:opacity-80 transition duration-500 italic">
            <span className="text-[#FF9900]">RY</span>METAL
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <div className="flex gap-10 text-[20px] font-bold tracking-tight text-slate-700">
            <Link href="/" className="hover:text-[#FF9900] transition duration-300">Home</Link>
            
            {/* Products with Secondary Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#FF9900] transition duration-300">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#FF9900]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sub-menu Dropdown */}
              <div className={`absolute top-full -left-10 mt-0 w-72 bg-white shadow-2xl rounded-2xl border border-slate-50 overflow-hidden transition-all duration-500 origin-top ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
                <div className="py-4">
                  {productCategories.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      className="block px-8 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-[#FF9900] transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/oem-odm" className="hover:text-[#FF9900] transition duration-300">OEM & ODM</Link>
            <Link href="/factory" className="hover:text-[#FF9900] transition duration-300">Factory</Link>
            <Link href="/about" className="hover:text-[#FF9900] transition duration-300">About Us</Link>
            <Link href="/contact" className="hover:text-[#FF9900] transition duration-300">Contact</Link>
          </div>
          <Link href="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-full text-xs font-bold hover:bg-[#FF9900] hover:scale-105 transition-all duration-500 shadow-xl shadow-slate-200">
            GET A QUOTE
          </Link>
        </nav>
      </div>
    </header>
  );
}
