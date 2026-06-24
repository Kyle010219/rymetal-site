import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="aspect-[4/3] bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-200/40 transition-all duration-700 group-hover:shadow-blue-100/50 group-hover:-translate-y-2 flex items-center justify-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="relative z-10 max-h-full max-w-full object-contain transition duration-1000 group-hover:scale-110 drop-shadow-[0_20px_20px_rgba(0,0,0,0.08)]" 
        />
      </div>
      <div className="py-6 text-center">
        <div className="mb-2 flex justify-center">
          <span className="h-0.5 w-0 bg-[#FF9900] group-hover:w-8 transition-all duration-500"></span>
        </div>
        <h3 className="text-[12px] font-black italic tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors duration-500 uppercase">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
