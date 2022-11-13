export type SneakersType = {
    id: number
    name: string
    price: number
    img: string
    parentId: number
}

export type CartSneakersType = {
    id: string
    name: string
    price: number
    img: string
    parentId: number
    createdAt: string
}

export type OrdersType = {
    [key: number]: CartSneakersType;
    createdAt: string;
    id: string;
}

export type ErrorResponseType = {
    endpointName?: string;
    error?: { status: number; data: string };
    isError?: boolean;
    isLoading?: boolean;
    isSuccess?: boolean;
    isUninitialized?: boolean;
    originalArgs?: SneakersType | undefined;
    requestId?: string;
    reset?: () => void;
    startedTimeStamp?: number;
    status?: string;
}


