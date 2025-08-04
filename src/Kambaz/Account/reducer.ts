import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
};
const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;

// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     currentUser: null,
//     isLoading: true,  // Add this
// };
//
// const accountSlice = createSlice({
//     name: "account",
//     initialState,
//     reducers: {
//         setCurrentUser: (state, action) => {
//             state.currentUser = action.payload;
//             state.isLoading = false;  // Set to false when user is set
//         },
//         setLoading: (state, action) => {
//             state.isLoading = action.payload;
//         },
//     },
// });
//
// export const { setCurrentUser, setLoading } = accountSlice.actions;