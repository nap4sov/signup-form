import { createReducer } from '@reduxjs/toolkit';
import { loginUser, registerUser, getCurrentUser } from './users/operations';

export const errorReducer = createReducer(null, {
    [loginUser.rejected]: (_, { payload }) => payload,
    [registerUser.rejected]: (_, { payload }) => payload,
    [getCurrentUser.rejected]: (_, { payload }) => payload,
    [loginUser.pending]: () => null,
    [registerUser.pending]: () => null,
    [getCurrentUser.pending]: () => null,
});
