export interface Category {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export const categories: Category[] = [
  {
    "slug": "bakelite-handle",
    "name": "Bakelite Series",
    "description": "",
    "image": "https://sc02.alicdn.com/kf/H4d94bbb1ccda4bec95b4366dd8ac49e0T.png"
  },
  {
    "slug": "stainless-handle",
    "name": "Stainless Series",
    "description": "",
    "image": "https://sc02.alicdn.com/kf/Hbebb95e0d4fa4e8389a0c9a817b643d6Z.png"
  },
  {
    "slug": "cast-zinc-handle",
    "name": "Cast Series",
    "description": "",
    "image": "https://sc02.alicdn.com/kf/H1c50026d8b1846f4991a272091be23c00.png"
  },
  {
    "slug": "bakelite-side-handle",
    "name": "Bakelite Side Handle",
    "description": "High-durability safety components for pots."
  },
  {
    "slug": "bakelite-knob",
    "name": "Bakelite Knob",
    "description": "Precision lid accessories for every cover.",
    "image": "https://sc02.alicdn.com/kf/H987654321.jpg"
  },
  {
    "slug": "stainless-side-handle",
    "name": "Stainless Side Handle",
    "description": "Architectural grade forged hardware.",
    "image": "https://sc02.alicdn.com/kf/Hf9b746ff16ae43118025b5ee44761740O.png"
  },
  {
    "slug": "stainless-knob",
    "name": "Stainless Knob",
    "description": "Elegant luxury details for high-end lids.",
    "image": "https://sc02.alicdn.com/kf/Hf9b746ff16ae43118025b5ee44761740O.png"
  },
  {
    "slug": "cast-zinc-side-handle",
    "name": "Cast Zinc Side Handle",
    "description": "Solid-core industrial kitchenware parts.",
    "image": "https://sc02.alicdn.com/kf/H987654321.jpg"
  },
  {
    "slug": "cast-zinc-lid-handle",
    "name": "Cast Lid Handle",
    "description": "Seamless transition from CAD to casting.",
    "image": "https://sc02.alicdn.com/kf/H987654321.jpg"
  }
];

export interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  material: string;
  finish: string;
  heatResistance: string;
  moq: string;
  image: string;
}

export const products: Product[] = [
  {
    "name": "Foldable Bakelite Handle RY-F01",
    "slug": "foldable-bakelite-handle-ry-f01",
    "category": "bakelite-handle",
    "description": "Space-saving foldable bakelite handle. Features a red safety lock button and heat-resistant construction, perfect for modern nested cookware sets.",
    "material": "Bakelite & Stainless Steel",
    "finish": "Matte Black with Red Accents",
    "heatResistance": "Up to 200°C",
    "moq": "1000 pcs",
    "image": "https://sc02.alicdn.com/kf/H4023b9f6808d416993508337d2ffa6c5b.png"
  },
  {
    "name": "Bakelite Handle RY-F02",
    "slug": "lavender-series-cookware-set",
    "category": "stainless-handle",
    "description": "Premium 3-piece stainless steel cookware set featuring ergonomic lavender-purple heat-resistant handles and mirror-polished finish.",
    "material": "Stainless Steel & Bakelite",
    "finish": "Mirror Polished / Lavender Soft-touch",
    "heatResistance": "Professional Grade",
    "moq": "500 sets",
    "image": "https://sc02.alicdn.com/kf/A22689bb9e9a04f3da434a0d3a2a8152a6.png"
  },
  {
    "name": "Stainless Steel Handle RY-S01",
    "slug": "stainless-steel-handle-ry-s01",
    "category": "stainless-handle",
    "description": "Premium heavy-duty stainless steel long handle. Ergonomically engineered for balanced weight distribution, offering architectural-grade durability and a sleek mirror-polished finish for high-end cookware lines.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished",
    "heatResistance": "Ultra-High Metal Construction",
    "moq": "1000 pcs",
    "image": "https://sc02.alicdn.com/kf/A886a308b15a246cdbf6e01c0c2a8714f0.png"
  },
  {
    "name": "Stainless Handle RY-S02",
    "slug": "stainless-handle-ry-s02",
    "category": "stainless-handle",
    "description": "High-precision stainless steel cookware component with a durable brushed finish.",
    "material": "Stainless Steel",
    "finish": "Brushed / Satin",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://sc02.alicdn.com/kf/He3c5d0f2468d428da4167251c56fb638W.png"
  },
  {
    "name": "Bakelite Handle RY-001",
    "slug": "bakelite-handle-ry-001",
    "category": "bakelite-handle",
    "description": "Heat-resistant bakelite long handles for frying pans, saucepans and cookware sets.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220°C",
    "moq": "1000 pcs",
    "image": "https://sc02.alicdn.com/kf/Ha160f2a2ec30455e82f66bd1e6174ca4Q.png"
  },
  {
    "name": "Bakelite Handle RY-002",
    "slug": "bakelite-handle-ry-002",
    "category": "bakelite-handle",
    "description": "Heat-resistant bakelite long handles for frying pans, saucepans and cookware sets.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220°C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-handle.svg"
  },
  {
    "name": "Bakelite Handle RY-003",
    "slug": "bakelite-handle-ry-003",
    "category": "bakelite-handle",
    "description": "Heat-resistant bakelite long handles for frying pans, saucepans and cookware sets.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220°C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-handle.svg"
  },
  {
    "name": "Bakelite Handle RY-004",
    "slug": "bakelite-handle-ry-004",
    "category": "bakelite-handle",
    "description": "Heat-resistant bakelite long handles for frying pans, saucepans and cookware sets.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-handle.svg"
  },
  {
    "name": "Bakelite Handle RY-005",
    "slug": "bakelite-handle-ry-005",
    "category": "bakelite-handle",
    "description": "Heat-resistant bakelite long handles for frying pans, saucepans and cookware sets.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-handle.svg"
  },
  {
    "name": "Bakelite Handle RY-006",
    "slug": "bakelite-handle-ry-006",
    "category": "bakelite-handle",
    "description": "Heat-resistant bakelite long handles for frying pans, saucepans and cookware sets.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-handle.svg"
  },
  {
    "name": "Bakelite Side Handle RY-001",
    "slug": "bakelite-side-handle-ry-001",
    "category": "bakelite-side-handle",
    "description": "Durable bakelite side handles for pots, casseroles and stockpots.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-side-handle.svg"
  },
  {
    "name": "Bakelite Side Handle RY-002",
    "slug": "bakelite-side-handle-ry-002",
    "category": "bakelite-side-handle",
    "description": "Durable bakelite side handles for pots, casseroles and stockpots.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-side-handle.svg"
  },
  {
    "name": "Bakelite Side Handle RY-003",
    "slug": "bakelite-side-handle-ry-003",
    "category": "bakelite-side-handle",
    "description": "Durable bakelite side handles for pots, casseroles and stockpots.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-side-handle.svg"
  },
  {
    "name": "Bakelite Side Handle RY-004",
    "slug": "bakelite-side-handle-ry-004",
    "category": "bakelite-side-handle",
    "description": "Durable bakelite side handles for pots, casseroles and stockpots.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-side-handle.svg"
  },
  {
    "name": "Bakelite Side Handle RY-005",
    "slug": "bakelite-side-handle-ry-005",
    "category": "bakelite-side-handle",
    "description": "Durable bakelite side handles for pots, casseroles and stockpots.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-side-handle.svg"
  },
  {
    "name": "Bakelite Side Handle RY-006",
    "slug": "bakelite-side-handle-ry-006",
    "category": "bakelite-side-handle",
    "description": "Durable bakelite side handles for pots, casseroles and stockpots.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-side-handle.svg"
  },
  {
    "name": "Bakelite Knob RY-001",
    "slug": "bakelite-knob-ry-001",
    "category": "bakelite-knob",
    "description": "Bakelite lid knobs for glass lids and stainless steel lids.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-knob.svg"
  },
  {
    "name": "Bakelite Knob RY-002",
    "slug": "bakelite-knob-ry-002",
    "category": "bakelite-knob",
    "description": "Bakelite lid knobs for glass lids and stainless steel lids.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-knob.svg"
  },
  {
    "name": "Bakelite Knob RY-003",
    "slug": "bakelite-knob-ry-003",
    "category": "bakelite-knob",
    "description": "Bakelite lid knobs for glass lids and stainless steel lids.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-knob.svg"
  },
  {
    "name": "Bakelite Knob RY-004",
    "slug": "bakelite-knob-ry-004",
    "category": "bakelite-knob",
    "description": "Bakelite lid knobs for glass lids and stainless steel lids.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-knob.svg"
  },
  {
    "name": "Bakelite Knob RY-005",
    "slug": "bakelite-knob-ry-005",
    "category": "bakelite-knob",
    "description": "Bakelite lid knobs for glass lids and stainless steel lids.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-knob.svg"
  },
  {
    "name": "Bakelite Knob RY-006",
    "slug": "bakelite-knob-ry-006",
    "category": "bakelite-knob",
    "description": "Bakelite lid knobs for glass lids and stainless steel lids.",
    "material": "Bakelite",
    "finish": "Black / custom color",
    "heatResistance": "Up to 220\u00b0C",
    "moq": "1000 pcs",
    "image": "/images/products/bakelite-knob.svg"
  },
  {
    "name": "Stainless Handle RY-001",
    "slug": "stainless-handle-ry-001",
    "category": "stainless-handle",
    "description": "Polished stainless steel long handles for premium cookware.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-handle.svg"
  },
  {
    "name": "Stainless Handle RY-002",
    "slug": "stainless-handle-ry-002",
    "category": "stainless-handle",
    "description": "Polished stainless steel long handles for premium cookware.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-handle.svg"
  },
  {
    "name": "Stainless Handle RY-003",
    "slug": "stainless-handle-ry-003",
    "category": "stainless-handle",
    "description": "Polished stainless steel long handles for premium cookware.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-handle.svg"
  },
  {
    "name": "Stainless Handle RY-004",
    "slug": "stainless-handle-ry-004",
    "category": "stainless-handle",
    "description": "Polished stainless steel long handles for premium cookware.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-handle.svg"
  },
  {
    "name": "Stainless Handle RY-005",
    "slug": "stainless-handle-ry-005",
    "category": "stainless-handle",
    "description": "Polished stainless steel long handles for premium cookware.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-handle.svg"
  },
  {
    "name": "Stainless Handle RY-006",
    "slug": "stainless-handle-ry-006",
    "category": "stainless-handle",
    "description": "Polished stainless steel long handles for premium cookware.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-handle.svg"
  },
  {
    "name": "Stainless Side Handle RY-001",
    "slug": "stainless-side-handle-ry-001",
    "category": "stainless-side-handle",
    "description": "Stainless side handles with strong rivet or screw mounting.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-side-handle.svg"
  },
  {
    "name": "Stainless Side Handle RY-002",
    "slug": "stainless-side-handle-ry-002",
    "category": "stainless-side-handle",
    "description": "Stainless side handles with strong rivet or screw mounting.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-side-handle.svg"
  },
  {
    "name": "Stainless Side Handle RY-003",
    "slug": "stainless-side-handle-ry-003",
    "category": "stainless-side-handle",
    "description": "Stainless side handles with strong rivet or screw mounting.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-side-handle.svg"
  },
  {
    "name": "Stainless Side Handle RY-004",
    "slug": "stainless-side-handle-ry-004",
    "category": "stainless-side-handle",
    "description": "Stainless side handles with strong rivet or screw mounting.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-side-handle.svg"
  },
  {
    "name": "Stainless Side Handle RY-005",
    "slug": "stainless-side-handle-ry-005",
    "category": "stainless-side-handle",
    "description": "Stainless side handles with strong rivet or screw mounting.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-side-handle.svg"
  },
  {
    "name": "Stainless Side Handle RY-006",
    "slug": "stainless-side-handle-ry-006",
    "category": "stainless-side-handle",
    "description": "Stainless side handles with strong rivet or screw mounting.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-side-handle.svg"
  },
  {
    "name": "Stainless Knob RY-001",
    "slug": "stainless-knob-ry-001",
    "category": "stainless-knob",
    "description": "Stainless steel knobs for cookware lids and glass covers.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-knob.svg"
  },
  {
    "name": "Stainless Knob RY-002",
    "slug": "stainless-knob-ry-002",
    "category": "stainless-knob",
    "description": "Stainless steel knobs for cookware lids and glass covers.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-knob.svg"
  },
  {
    "name": "Stainless Knob RY-003",
    "slug": "stainless-knob-ry-003",
    "category": "stainless-knob",
    "description": "Stainless steel knobs for cookware lids and glass covers.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-knob.svg"
  },
  {
    "name": "Stainless Knob RY-004",
    "slug": "stainless-knob-ry-004",
    "category": "stainless-knob",
    "description": "Stainless steel knobs for cookware lids and glass covers.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-knob.svg"
  },
  {
    "name": "Stainless Knob RY-005",
    "slug": "stainless-knob-ry-005",
    "category": "stainless-knob",
    "description": "Stainless steel knobs for cookware lids and glass covers.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-knob.svg"
  },
  {
    "name": "Stainless Knob RY-006",
    "slug": "stainless-knob-ry-006",
    "category": "stainless-knob",
    "description": "Stainless steel knobs for cookware lids and glass covers.",
    "material": "Stainless Steel",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/stainless-knob.svg"
  },
  {
    "name": "Cast Zinc Handle RY-001",
    "slug": "cast-zinc-handle-ry-001",
    "category": "cast-zinc-handle",
    "description": "Cast zinc handles with chrome plating or custom finishes.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-handle.svg"
  },
  {
    "name": "Cast Zinc Handle RY-002",
    "slug": "cast-zinc-handle-ry-002",
    "category": "cast-zinc-handle",
    "description": "Cast zinc handles with chrome plating or custom finishes.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-handle.svg"
  },
  {
    "name": "Cast Zinc Handle RY-003",
    "slug": "cast-zinc-handle-ry-003",
    "category": "cast-zinc-handle",
    "description": "Cast zinc handles with chrome plating or custom finishes.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-handle.svg"
  },
  {
    "name": "Cast Zinc Handle RY-004",
    "slug": "cast-zinc-handle-ry-004",
    "category": "cast-zinc-handle",
    "description": "Cast zinc handles with chrome plating or custom finishes.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-handle.svg"
  },
  {
    "name": "Cast Zinc Handle RY-005",
    "slug": "cast-zinc-handle-ry-005",
    "category": "cast-zinc-handle",
    "description": "Cast zinc handles with chrome plating or custom finishes.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-handle.svg"
  },
  {
    "name": "Cast Zinc Handle RY-006",
    "slug": "cast-zinc-handle-ry-006",
    "category": "cast-zinc-handle",
    "description": "Cast zinc handles with chrome plating or custom finishes.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-handle.svg"
  },
  {
    "name": "Cast Zinc Side Handle RY-001",
    "slug": "cast-zinc-side-handle-ry-001",
    "category": "cast-zinc-side-handle",
    "description": "Cast zinc side handles for cookware and lids.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-side-handle.svg"
  },
  {
    "name": "Cast Zinc Side Handle RY-002",
    "slug": "cast-zinc-side-handle-ry-002",
    "category": "cast-zinc-side-handle",
    "description": "Cast zinc side handles for cookware and lids.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-side-handle.svg"
  },
  {
    "name": "Cast Zinc Side Handle RY-003",
    "slug": "cast-zinc-side-handle-ry-003",
    "category": "cast-zinc-side-handle",
    "description": "Cast zinc side handles for cookware and lids.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-side-handle.svg"
  },
  {
    "name": "Cast Zinc Side Handle RY-004",
    "slug": "cast-zinc-side-handle-ry-004",
    "category": "cast-zinc-side-handle",
    "description": "Cast zinc side handles for cookware and lids.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-side-handle.svg"
  },
  {
    "name": "Cast Zinc Side Handle RY-005",
    "slug": "cast-zinc-side-handle-ry-005",
    "category": "cast-zinc-side-handle",
    "description": "Cast zinc side handles for cookware and lids.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-side-handle.svg"
  },
  {
    "name": "Cast Zinc Side Handle RY-006",
    "slug": "cast-zinc-side-handle-ry-006",
    "category": "cast-zinc-side-handle",
    "description": "Cast zinc side handles for cookware and lids.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-side-handle.svg"
  },
  {
    "name": "Cast Zinc Lid Handle RY-001",
    "slug": "cast-zinc-lid-handle-ry-001",
    "category": "cast-zinc-lid-handle",
    "description": "Cast zinc lid handles for glass lids and stainless covers.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-lid-handle.svg"
  },
  {
    "name": "Cast Zinc Lid Handle RY-002",
    "slug": "cast-zinc-lid-handle-ry-002",
    "category": "cast-zinc-lid-handle",
    "description": "Cast zinc lid handles for glass lids and stainless covers.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-lid-handle.svg"
  },
  {
    "name": "Cast Zinc Lid Handle RY-003",
    "slug": "cast-zinc-lid-handle-ry-003",
    "category": "cast-zinc-lid-handle",
    "description": "Cast zinc lid handles for glass lids and stainless covers.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-lid-handle.svg"
  },
  {
    "name": "Cast Zinc Lid Handle RY-004",
    "slug": "cast-zinc-lid-handle-ry-004",
    "category": "cast-zinc-lid-handle",
    "description": "Cast zinc lid handles for glass lids and stainless covers.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-lid-handle.svg"
  },
  {
    "name": "Cast Zinc Lid Handle RY-005",
    "slug": "cast-zinc-lid-handle-ry-005",
    "category": "cast-zinc-lid-handle",
    "description": "Cast zinc lid handles for glass lids and stainless covers.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-lid-handle.svg"
  },
  {
    "name": "Cast Zinc Lid Handle RY-006",
    "slug": "cast-zinc-lid-handle-ry-006",
    "category": "cast-zinc-lid-handle",
    "description": "Cast zinc lid handles for glass lids and stainless covers.",
    "material": "Cast Zinc",
    "finish": "Mirror polish / matte / chrome plating",
    "heatResistance": "High temperature metal construction",
    "moq": "1000 pcs",
    "image": "/images/products/cast-zinc-lid-handle.svg"
  }
] as const;

export type Product = typeof products[number];
