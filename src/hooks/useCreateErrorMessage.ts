import { ErrorResponseModel } from '../models';

export const useCreateErrorMessage = (anError: ErrorResponseModel) => {

    let todo = '';
    let pretext = '';
    let where = '';

    if (anError.endpointName === 'addFavorites' || anError.endpointName === "addSneakers") {
        todo = 'добавления'
    } else {
        todo = 'удаления'
    }

    if (anError.endpointName === 'addOrder') {
        todo = 'оформления'
    }

    if (anError.endpointName === 'addFavorites' || anError.endpointName === 'addSneakers') {
        pretext = ' в'
    } else {
        pretext = ' из'
    }

    if (anError.endpointName === 'addFavorites' || pretext === 'в') {
        where = ' избранное'
    } else {
        where = ' избранного'
    }

    if (anError.endpointName === 'addSneakers') {
        where = ' корзину'
    } else if (anError.endpointName === 'deleteSneakers') {
        where = ' корзины'
    }

    return { todo, pretext, where }
}