import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/users';

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, thunkAPI) => {
        const newUser = await userApi.register(userData);

        if (newUser.error) return thunkAPI.rejectWithValue(newUser.error);
        return newUser;
    },
);

export const loginUser = createAsyncThunk(
    'user/login',
    async (userData, thunkAPI) => {
        const token = await userApi.login(userData);

        if (token.error) return thunkAPI.rejectWithValue(token.error);
        return token;
    },
);

export const getCurrentUser = createAsyncThunk(
    'user/getCurrent',
    async (_, thunkAPI) => {
        const userData = await userApi.getCurrent();

        if (userData.error) return thunkAPI.rejectWithValue(userData.error);
        return userData;
    },
);
