import { createSlice } from '@reduxjs/toolkit';
import {
    registerUser,
    loginUser,
    getCurrentUser,
    logOutUser,
} from './operations';
import { USERS_INIT_STATE } from '../../constants/reduxSliceState';

const usersSlice = createSlice({
    name: 'user',
    initialState: USERS_INIT_STATE,
    extraReducers: {
        [registerUser.fulfilled](state, { payload }) {
            state.id = payload._id;
            state.email = payload.email;
        },
        [loginUser.fulfilled](state, { payload }) {
            state.token = payload;
        },
        [getCurrentUser.fulfilled](state, { payload }) {
            state.id = payload._id;
            state.email = payload.email;
        },
        [logOutUser.fulfilled](state, { payload }) {
            state.token = payload;
            state.email = payload;
        },
    },
});

export const usersReducer = usersSlice.reducer;
