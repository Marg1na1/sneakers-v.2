export interface SneakersModel {
    id: number;
    name: string;
    price: number;
    img: string;
    parentId: number;
}

export interface CartSneakersModel {
    id: string;
    name: string;
    price: number;
    img: string;
    parentId: number;
    createdAt: string;
}

export interface OrdersModel {
    [key: number]: CartSneakersModel;
    createdAt: string;
    id: string;
}

export interface ErrorResponseModel {
    endpointName?: string;
    error?: { status: number; data: string };
    isError?: boolean;
    isLoading?: boolean;
    isSuccess?: boolean;
    isUninitialized?: boolean;
    originalArgs?: SneakersModel | undefined;
    requestId?: string;
    reset?: () => void;
    startedTimeStamp?: number;
    status?: string;
}






