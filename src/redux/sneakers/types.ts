export type SneakersType = {
    id: number
    name: string
    price: number
    img: string
}

export interface IState {
    sneakers: SneakersType[];
}