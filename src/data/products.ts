export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aero Stealth Jacket",
    price: 289.00,
    image: "/jacket.jpg",
    category: "Outerwear"
  },
  {
    id: "2",
    name: "Onyx Essential T-Shirt",
    price: 85.00,
    image: "/tshirt.jpg",
    category: "Tops"
  },
  {
    id: "3",
    name: "Nova Kinetic Sneakers",
    price: 320.00,
    image: "/sneakers.jpg",
    category: "Footwear"
  },
  {
    id: "4",
    name: "Eclipse Heavyweight Hoodie",
    price: 150.00,
    image: "/hoodie.jpg",
    category: "Hoodies"
  }
];
