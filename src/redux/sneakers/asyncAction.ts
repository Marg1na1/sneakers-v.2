import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getSneakers } from './slice';
const url: string = 'https://6351a086dfe45bbd55c560cb.mockapi.io/cards';

export const fetchSneakers = createAsyncThunk(
    'carts/fetchSneakers',
    async (_, { dispatch }) => {
        const response = await axios.get(url);
        dispatch(getSneakers(response.data));
});