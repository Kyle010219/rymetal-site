import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="card group overflow-hidden">
      <div className="aspect-[4/3] bg-slate-50 p-7">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain transition group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-slate-950 group-hover:text-brand-orange">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{product.description}</p>
      </div>
    </Link>
  );
}
