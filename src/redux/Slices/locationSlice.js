import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    curentlocation: null,
    pickupLocation: null,
    currentAddress: null,
    pickupAddress: null,
}

export const userLocationSlice = createSlice({
    name: 'splash',
    initialState,
    reducers: {
        userLocation: (state, action) => {
            state.curentlocation = action.payload.curentlocation;
            state.pickupLocation = action.payload.pickupLocation;
            state.currentAddress = action.payload.currentAddress;
            state.pickupAddress =  action.payload.pickupAddress;
        },
    },
})

export const { userLocation } = userLocationSlice.actions

export default userLocationSlice.reducer