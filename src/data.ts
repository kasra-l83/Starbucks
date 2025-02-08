export interface IProductlist{
  img: string
  name: string
  price: number
  quantity: number
}

export const Products: IProductlist[]= [
  {
    price: 3.5,
    quantity: 0,
    name: "Cappuccino",
    img: "/img/Cappuccino.png"
  },
  {
    price: 4,
    quantity: 0,
    name: "Latte",
    img: "/img/Latte.png"
  },
  {
    price: 2.5,
    quantity: 0,
    name: "Espresso",
    img: "/img/Espresso.png"
  },
  {
    price: 4.5,
    quantity: 0,
    name: "Mocha",
    img: "/img/Mocha.png"
  },
  {
    price: 3,
    quantity: 0,
    name: "Americano",
    img: "/img/Americano.png"
  }
]