// Nav bar categories

export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "UI_Kits" as const, //tells typescript this is a string
    featured: [
      {
        name: "Editor picks",
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "new Arrivals",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestseller",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const, //tells typescript this is a string
    featured: [
      {
        name: "Favourite Icon Picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "new Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling icons",
        href: "#",
        imageSrc: "/nav/icons/bestseller.jpg",
      },
    ],
  },
];
