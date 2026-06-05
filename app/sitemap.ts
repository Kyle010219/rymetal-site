import { categories, products } from "@/lib/products";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = ["", "/oem-odm", "/factory", "/about", "/contact", "/blog"].map(path => ({ url: `${site.url}${path}`, lastModified: new Date() }));
  const categoryRoutes = categories.map(c => ({ url: `${site.url}/category/${c.slug}`, lastModified: new Date() }));
  const productRoutes = products.map(p => ({ url: `${site.url}/products/${p.slug}`, lastModified: new Date() }));
  const blogRoutes = posts.map(p => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date() }));
  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
