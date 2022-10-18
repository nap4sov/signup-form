import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/users';
import { authToken } from '../../api/config';

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
        const { user } = thunkAPI.getState();
        const persistedToken = user.token;

        if (!persistedToken) return thunkAPI.rejectWithValue(null);

        authToken.set(persistedToken);

        const userData = await userApi.getCurrent();

        if (userData.error) {
            return thunkAPI.rejectWithValue(userData.error);
        }

        return userData;
    },
);

export const logOutUser = createAsyncThunk('user/logout', () => {
    authToken.unset();
    return null;
});
