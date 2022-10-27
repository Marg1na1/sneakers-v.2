export type SneakersType = {
    id: number
    name: string
    price: number
    img: string 
}

export type CartSneakersType = {
    id: string
    name: string
    price: number
    img: string 
    parentId: number
    createdAt: string
}
