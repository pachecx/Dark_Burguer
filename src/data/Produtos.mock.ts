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
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: "2",
    name: "Goku Black",
    desc: "Blend 180g • queijo prato • bacon crocante • molho dark sweet",
    price: "R$ 39,90",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: "3",
    name: "Naruto Kyuubi",
    desc: "Duplo smash • cheddar • pimenta suave • onion rings • molho da casa",
    price: "R$ 38,90",
    tag: "Mais pedido",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
  },
  {
    id: "4",
    name: "Sasuke Curse Mark",
    desc: "Blend 180g • mussarela • cebola roxa • barbecue defumado • alface",
    price: "R$ 37,90",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add"
  },
  {
    id: "5",
    name: "Ichigo Hollow",
    desc: "Duplo smash • cheddar • molho spicy • picles • cebola caramelizada",
    price: "R$ 37,90",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398"
  },
  {
    id: "13",
    name: "Eren Titan",
    desc: "Blend 180g • cheddar • picles • maionese de alho • cebola roxa",
    price: "R$ 38,90",
    tag: "Apimentado",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5"
  },
  {
    id: "14",
    name: "Gojo Unsealed",
    desc: "Duplo smash • cheddar • crispy de bacon • molho white x dark",
    price: "R$ 41,90",
    tag: "Premium",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b"
  },
  {
    id: "15",
    name: "Sukuna Maledict",
    desc: "Duplo smash • queijo prato • jalapeño • onion rings • molho inferno",
    price: "R$ 40,90",
    tag: "Mais pedido",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },

  // Combos
  {
    id: "6",
    name: "Combo Goku Black",
    desc: "Goku Black + batata + refri",
    price: "R$ 54,90",
    tag: "Melhor custo",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330"
  },
  {
    id: "7",
    name: "Combo Kyuubi",
    desc: "Naruto Kyuubi + batata + refri",
    price: "R$ 53,90",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1600891963935-c6c2c3f8c5f4"
  },
  {
    id: "8",
    name: "Combo Deku Dark",
    desc: "Deku Dark + batata + refri",
    price: "R$ 52,90",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b"
  },
  {
    id: "16",
    name: "Combo Sukuna",
    desc: "Sukuna Maledict + batata + refri",
    price: "R$ 56,90",
    tag: "Destaque",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1600891965050-8c5c4c90b5b4"
  },
  {
    id: "17",
    name: "Combo Titan",
    desc: "Eren Titan + batata + refri",
    price: "R$ 55,90",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e"
  },
  {
    id: "18",
    name: "Combo Unsealed",
    desc: "Gojo Unsealed + batata + refri",
    price: "R$ 58,90",
    tag: "Premium",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },

  // Acompanhamentos
  {
    id: "9",
    name: "Batata Kuro Trufada",
    desc: "Batata rústica • parmesão • toque trufado • sal black",
    price: "R$ 21,90",
    tag: "Destaque",
    category: "Acompanhamentos",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
  },
  {
    id: "10",
    name: "Onion Rings Shadow",
    desc: "Anéis de cebola crocantes • tempero da casa • molho dark",
    price: "R$ 18,90",
    category: "Acompanhamentos",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d"
  },
  {
    id: "19",
    name: "Batata Infernal",
    desc: "Batata frita • páprica picante • parmesão • molho inferno",
    price: "R$ 20,90",
    tag: "Apimentado",
    category: "Acompanhamentos",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713"
  },
  {
    id: "20",
    name: "Nuggets Void",
    desc: "8 unidades • crocantes • molho dark BBQ",
    price: "R$ 17,90",
    category: "Acompanhamentos",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d"
  },
  {
    id: "21",
    name: "Cheddar Bomb Dark",
    desc: "Porção de cheddar cremoso • bacon bits • cebolinha",
    price: "R$ 16,90",
    tag: "Extra",
    category: "Acompanhamentos",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae"
  },

  // Bebidas
  {
    id: "11",
    name: "Refrigerante Lata",
    desc: "350ml • bem gelado",
    price: "R$ 6,90",
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a"
  },
  {
    id: "12",
    name: "Chá Gelado Midnight",
    desc: "500ml • limão • toque de hortelã",
    price: "R$ 9,90",
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc"
  },
  {
    id: "22",
    name: "Soda Black Lemon",
    desc: "500ml • limão • gás alto • bem gelada",
    price: "R$ 10,90",
    tag: "Refrescante",
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e"
  },
  {
    id: "23",
    name: "Milkshake Eclipse",
    desc: "500ml • chocolate • chantilly • calda dark",
    price: "R$ 19,90",
    tag: "Destaque",
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699"
  },
  {
    id: "24",
    name: "Água Mineral",
    desc: "500ml • sem gás",
    price: "R$ 4,90",
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4"
  }
];