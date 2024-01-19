import {createSlice} from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'appSettings',
    initialState: {
        isSideBarVisible: true,
    },
    reducers: {
        toggleSideBar: (state, action) => {
            state.isSideBarVisible = !state.isSideBarVisible;
        }
    }
})

export const { toggleSideBar} = configSlice.actions;
export default configSlice.reducer;