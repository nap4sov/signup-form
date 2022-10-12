import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/users';

export const registerUser = createAsyncThunk(
    'users/register',
    async userData => {
        const newUser = await userApi.register(userData);
        return newUser;
    },
);

export const loginUser = createAsyncThunk('users/login', async userData => {
    const token = await userApi.login(userData);
    return token;
});

export const getCurrentUser = createAsyncThunk('users/getCurrent', async () => {
    const userData = await userApi.getCurrent();
    return userData;
});
