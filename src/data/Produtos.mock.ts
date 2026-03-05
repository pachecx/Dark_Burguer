import type { MenuItem } from "./types.produtos";

export const mockItems: MenuItem[] = [
  // Burgers
  {
    id: "1",
    name: "Deku Dark",
    desc: "Duplo smash • cheddar • maionese black • cebola crocante",
    price: "R$ 36,90",
    tag: "Destaque",
    category: "Burgers",
  },
  {
    id: "2",
    name: "Goku Black",
    desc: "Blend 180g • queijo prato • bacon crocante • molho dark sweet",
    price: "R$ 39,90",
    category: "Burgers",
  },
  {
    id: "3",
    name: "Naruto Kyuubi",
    desc: "Duplo smash • cheddar • pimenta suave • onion rings • molho da casa",
    price: "R$ 38,90",
    tag: "Mais pedido",
    category: "Burgers",
  },
  {
    id: "4",
    name: "Sasuke Curse Mark",
    desc: "Blend 180g • mussarela • cebola roxa • barbecue defumado • alface",
    price: "R$ 37,90",
    category: "Burgers",
  },
  {
    id: "5",
    name: "Ichigo Hollow",
    desc: "Duplo smash • cheddar • molho spicy • picles • cebola caramelizada",
    price: "R$ 37,90",
    category: "Burgers",
  },
  // +3 Burgers
  {
    id: "13",
    name: "Eren Titan",
    desc: "Blend 180g • cheddar • picles • maionese de alho • cebola roxa",
    price: "R$ 38,90",
    tag: "Apimentado",
    category: "Burgers",
  },
  {
    id: "14",
    name: "Gojo Unsealed",
    desc: "Duplo smash • cheddar • crispy de bacon • molho white x dark",
    price: "R$ 41,90",
    tag: "Premium",
    category: "Burgers",
  },
  {
    id: "15",
    name: "Sukuna Maledict",
    desc: "Duplo smash • queijo prato • jalapeño • onion rings • molho inferno",
    price: "R$ 40,90",
    tag: "Mais pedido",
    category: "Burgers",
  },

  // Combos
  {
    id: "6",
    name: "Combo Goku Black",
    desc: "Goku Black + batata + refri",
    price: "R$ 54,90",
    tag: "Melhor custo",
    category: "Combos",
  },
  {
    id: "7",
    name: "Combo Kyuubi",
    desc: "Naruto Kyuubi + batata + refri",
    price: "R$ 53,90",
    category: "Combos",
  },
  {
    id: "8",
    name: "Combo Deku Dark",
    desc: "Deku Dark + batata + refri",
    price: "R$ 52,90",
    category: "Combos",
  },
  // +3 Combos
  {
    id: "16",
    name: "Combo Sukuna",
    desc: "Sukuna Maledict + batata + refri",
    price: "R$ 56,90",
    tag: "Destaque",
    category: "Combos",
  },
  {
    id: "17",
    name: "Combo Titan",
    desc: "Eren Titan + batata + refri",
    price: "R$ 55,90",
    category: "Combos",
  },
  {
    id: "18",
    name: "Combo Unsealed",
    desc: "Gojo Unsealed + batata + refri",
    price: "R$ 58,90",
    tag: "Premium",
    category: "Combos",
  },

  // Acompanhamentos
  {
    id: "9",
    name: "Batata Kuro Trufada",
    desc: "Batata rústica • parmesão • toque trufado • sal black",
    price: "R$ 21,90",
    tag: "Destaque",
    category: "Acompanhamentos",
  },
  {
    id: "10",
    name: "Onion Rings Shadow",
    desc: "Anéis de cebola crocantes • tempero da casa • molho dark",
    price: "R$ 18,90",
    category: "Acompanhamentos",
  },
  // +3 Acompanhamentos
  {
    id: "19",
    name: "Batata Infernal",
    desc: "Batata frita • páprica picante • parmesão • molho inferno",
    price: "R$ 20,90",
    tag: "Apimentado",
    category: "Acompanhamentos",
  },
  {
    id: "20",
    name: "Nuggets Void",
    desc: "8 unidades • crocantes • molho dark BBQ",
    price: "R$ 17,90",
    category: "Acompanhamentos",
  },
  {
    id: "21",
    name: "Cheddar Bomb Dark",
    desc: "Porção de cheddar cremoso • bacon bits • cebolinha",
    price: "R$ 16,90",
    tag: "Extra",
    category: "Acompanhamentos",
  },

  // Bebidas
  {
    id: "11",
    name: "Refrigerante Lata",
    desc: "350ml • bem gelado",
    price: "R$ 6,90",
    category: "Bebidas",
  },
  {
    id: "12",
    name: "Chá Gelado Midnight",
    desc: "500ml • limão • toque de hortelã",
    price: "R$ 9,90",
    category: "Bebidas",
  },
  // +3 Bebidas
  {
    id: "22",
    name: "Soda Black Lemon",
    desc: "500ml • limão • gás alto • bem gelada",
    price: "R$ 10,90",
    tag: "Refrescante",
    category: "Bebidas",
  },
  {
    id: "23",
    name: "Milkshake Eclipse",
    desc: "500ml • chocolate • chantilly • calda dark",
    price: "R$ 19,90",
    tag: "Destaque",
    category: "Bebidas",
  },
  {
    id: "24",
    name: "Água Mineral",
    desc: "500ml • sem gás",
    price: "R$ 4,90",
    category: "Bebidas",
  },
];
