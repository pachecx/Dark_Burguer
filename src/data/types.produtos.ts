export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  tag?: string;
  category: "Burgers" | "Combos" | "Acompanhamentos" | "Bebidas";
};


export const categories: Array<MenuItem["category"] | "Todos"> = [
  "Todos",
  "Burgers",
  "Combos",
  "Acompanhamentos",
  "Bebidas",
];