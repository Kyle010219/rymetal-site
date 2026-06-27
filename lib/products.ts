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
    "description": "High-durability safety components for pots.",
    "image": "https://pub-f242d115d9ce4c4888c88bae02552ea7.r2.dev/BAKIELITE%20SIDE%20HANDLE1.png"
  },
  {
    "slug": "bakelite-knob",
    "name": "Bakelite Knob",
    "description": "Precision lid accessories for every cover.",
    "image": "https://pub-10ef6b710ab8474f9c9275fe25718b09.r2.dev/bakeliteknob1.png"
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
    "image": "https://sc02.alicdn.com/kf/Hdd008b0dd7cb409da53ad35a3aeffd4ay.png"
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
    "image": "https://sc02.alicdn.com/kf/Hf8ddddaa29ea42f98bbe0401b60a6dd07.png"
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
    "image": "https://sc02.alicdn.com/kf/Ha160f2a2ec30455e82f66bd1e6174ca4Q.png"
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
    "image": "https://sc02.alicdn.com/kf/H4003e64c04df4f5489eeaf41358576deo.png"
  },
  ...Array.from({ length: 43 }, (_, i) => {
    const id = String(i + 1).padStart(3, '0');
    const fileNameId = String(i + 1);
    return {
      "name": `Bakelite Knob BK-${id}`,
      "slug": `bakelite-knob-bk-${id}`,
      "category": "bakelite-knob",
      "description": "High-quality bakelite knob with customizable color options.",
      "material": "Bakelite",
      "finish": "Black / Custom Color",
      "heatResistance": "Up to 200°C",
      "moq": "1000 pcs",
      "image": fileNameId === "38" 
        ? "https://sc02.alicdn.com/kf/Hd36dc8fcef1a4b5885d9f7944e93148dv.png"
        : `https://pub-10ef6b710ab8474f9c9275fe25718b09.r2.dev/bakeliteknob${fileNameId}.png`
    };
  }),
  ...Array.from({ length: 90 }, (_, i) => {
    const id = String(i + 1).padStart(3, '0');
    const fileNameId = String(i + 1);
    return {
      "name": `Bakelite Side Handle BS-${id}`,
      "slug": `bakelite-side-handle-bs-${id}`,
      "category": "bakelite-side-handle",
      "description": "Durable bakelite side handle with high heat resistance and ergonomic grip.",
      "material": "Bakelite",
      "finish": "Matte Black",
      "heatResistance": "Up to 200°C",
      "moq": "1000 pcs",
      "image": `https://pub-f242d115d9ce4c4888c88bae02552ea7.r2.dev/BAKIELITE%20SIDE%20HANDLE${fileNameId}.png`
    };
  }),
  {
    "name": "Stainless Steel Knob SSK-001",
    "slug": "stainless-knob-ssk-001",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob1.png"
  },
  {
    "name": "Stainless Steel Knob SSK-002",
    "slug": "stainless-knob-ssk-002",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob2.png"
  },
  {
    "name": "Stainless Steel Knob SSK-003",
    "slug": "stainless-knob-ssk-003",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob3.png"
  },
  {
    "name": "Stainless Steel Knob SSK-004",
    "slug": "stainless-knob-ssk-004",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob4.png"
  },
  {
    "name": "Stainless Steel Knob SSK-005",
    "slug": "stainless-knob-ssk-005",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob5.png"
  },
  {
    "name": "Stainless Steel Knob SSK-006",
    "slug": "stainless-knob-ssk-006",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob6.png"
  },
  {
    "name": "Stainless Steel Knob SSK-007",
    "slug": "stainless-knob-ssk-007",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob7.png"
  },
  {
    "name": "Stainless Steel Knob SSK-008",
    "slug": "stainless-knob-ssk-008",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob8.png"
  },
  {
    "name": "Stainless Steel Knob SSK-009",
    "slug": "stainless-knob-ssk-009",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob9.png"
  },
  {
    "name": "Stainless Steel Knob SSK-010",
    "slug": "stainless-knob-ssk-010",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob10.png"
  },
  {
    "name": "Stainless Steel Knob SSK-011",
    "slug": "stainless-knob-ssk-011",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob11.png"
  },
  {
    "name": "Stainless Steel Knob SSK-012",
    "slug": "stainless-knob-ssk-012",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob12.png"
  },
  {
    "name": "Stainless Steel Knob SSK-013",
    "slug": "stainless-knob-ssk-013",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob13.png"
  },
  {
    "name": "Stainless Steel Knob SSK-014",
    "slug": "stainless-knob-ssk-014",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob14.png"
  },
  {
    "name": "Stainless Steel Knob SSK-015",
    "slug": "stainless-knob-ssk-015",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob15.png"
  },
  {
    "name": "Stainless Steel Knob SSK-016",
    "slug": "stainless-knob-ssk-016",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob16.png"
  },
  {
    "name": "Stainless Steel Knob SSK-017",
    "slug": "stainless-knob-ssk-017",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob17.png"
  },
  {
    "name": "Stainless Steel Knob SSK-018",
    "slug": "stainless-knob-ssk-018",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob18.png"
  },
  {
    "name": "Stainless Steel Knob SSK-019",
    "slug": "stainless-knob-ssk-019",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob19.png"
  },
  {
    "name": "Stainless Steel Knob SSK-020",
    "slug": "stainless-knob-ssk-020",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob20.png"
  },
  {
    "name": "Stainless Steel Knob SSK-021",
    "slug": "stainless-knob-ssk-021",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob21.png"
  },
  {
    "name": "Stainless Steel Knob SSK-022",
    "slug": "stainless-knob-ssk-022",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob22.png"
  },
  {
    "name": "Stainless Steel Knob SSK-023",
    "slug": "stainless-knob-ssk-023",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob23.png"
  },
  {
    "name": "Stainless Steel Knob SSK-024",
    "slug": "stainless-knob-ssk-024",
    "category": "stainless-knob",
    "description": "High-quality stainless steel knob with customizable color options and silicon additions.",
    "material": "Stainless Steel",
    "finish": "Mirror Polished / Brushed",
    "heatResistance": "Professional Grade",
    "moq": "1000 pcs",
    "image": "https://pub-8753fc03b5764b3d94f0b95d3b9473a8.r2.dev/stainlessknob24.png"
  }
];
