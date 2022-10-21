import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSneakers } from './asyncAction';
import { IState, SneakersType } from "./types";

const initialState: IState = {
    sneakers: [],
};

const cartSlice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {
        setSneakers: (state, action: PayloadAction<SneakersType[]>) => {
            state.sneakers = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSneakers.pending, (state) => {
            state.sneakers = [];
        });

        // builder.addCase(fetchSneakers.fulfilled, (state, action) => {
        //     state.items = action.payload;
        // });

        builder.addCase(fetchSneakers.rejected, (state) => {
            state.sneakers = [];
        });
    },
})

export const { setSneakers } = cartSlice.actions;

export default cartSlice.reducer;