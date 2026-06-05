export default function InquiryForm({ productName = "" }: { productName?: string }) {
  return (
    <form action="/api/inquiry" method="post" className="card p-6">
      <h3 className="text-xl font-bold">Request a Quote</h3>
      <input type="hidden" name="productName" value={productName} />
      <div className="mt-5 grid gap-4">
        <input required name="name" placeholder="Your Name" className="rounded-md border p-3" />
        <input required name="email" type="email" placeholder="Email Address" className="rounded-md border p-3" />
        <input name="company" placeholder="Company Name" className="rounded-md border p-3" />
        <textarea required name="message" placeholder="Tell us your product, quantity and target market" className="min-h-32 rounded-md border p-3" />
        <button className="btn-primary" type="submit">Submit Inquiry</button>
      </div>
    </form>
  );
}
