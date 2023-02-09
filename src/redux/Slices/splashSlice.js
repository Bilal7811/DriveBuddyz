import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
    profileImage: null,
}

export const splashSlice = createSlice({
    name: 'splash',
    initialState,
    reducers: {
        userSave: (state, action) => {
            state.value = action.payload.value;
            state.profileImage = action.payload.profileImage
        },
    },
})

export const { userSave } = splashSlice.actions

export default splashSlice.reducer