import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGeoDataState {
    geoDataState: JSON;
}

const initialState: IGeoDataState = {
    geoDataState: false,
};

export const geoDataSlice = createSlice({
    name: "geoData",
    initialState,
    reducers: {
        setGeoDataState: (state, action: PayloadAction<JSON>) => {
            state.geoDataState = action.payload;
        },
    },
});

export const { setGeoDataState } = geoDataSlice.actions;
export const geoDataReducer = geoDataSlice.reducer;