const navigationConfig = [
  {
    label: "Strona główna",
    href: "/",
  },
  {
    label: "Kategorie",
    subLinks: [
      { label: "Wszystkie", href: "/products" },
      { label: "Podkategoria 1", href: "/products/subcategory1" },
      { label: "Podkategoria 2", href: "/products/subcategory2" },
    ],
  },
  {
    label: "Dodatki i akcesoria",
    subLinks: [
      { label: "Wszystkie", href: "/accessories" },
      { label: "Akcesorium 1", href: "/accessories/accessory1" },
      { label: "Akcesorium 2", href: "/accessories/accessory2" },
    ],
  },
  {
    label: "Nowości i promocje",
    subLinks: [
      { label: "Nowości", href: "/promotions" },
      { label: "Promocja 1", href: "/promotions/promo1" },
      { label: "Promocja 2", href: "/promotions/promo2" },
    ],
  },
  {
    label: "Kontakt",
    href: "/contact",
  },
];

export default navigationConfig;
