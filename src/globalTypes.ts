export type SneakersType = {
    id: number;
    name: string;
    price: number;
    img: string;
    parentId: number;
}

export type CartSneakersType = {
    id: string;
    name: string;
    price: number;
    img: string;
    parentId: number;
    createdAt: string;
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


// export interface Error {
//     status: number;
//     data: string;
// }

// export interface OriginalArgs {
//     img: string;
//     name: string;
//     price: number;
//     id: number;
//     parentId: number;
// }

// export interface ErrorResponseType {
//     requestId: string;
//     status: string;
//     endpointName: string;
//     startedTimeStamp: number;
//     error: Error;
//     isUninitialized: boolean;
//     isLoading: boolean;
//     isSuccess: boolean;
//     isError: boolean;
//     originalArgs: OriginalArgs;
// }





