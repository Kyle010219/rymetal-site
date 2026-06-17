import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block overflow-hidden">
      <div className="aspect-[4/3] bg-slate-50 p-7 rounded-2xl border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain transition duration-700 group-hover:scale-105" />
      </div>
      <div className="py-4 text-center">
        <h3 className="text-sm font-black italic tracking-widest text-slate-400 group-hover:text-[#FF9900] transition-colors duration-500 uppercase">{product.name}</h3>
      </div>
    </Link>
  );
}
