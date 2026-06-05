import { site } from "@/lib/site";
export default function WhatsApp() {
  return <a href={`https://wa.me/${site.whatsapp}`} className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-4 font-bold text-white shadow-xl">WhatsApp</a>;
}
