
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getBaseUrl } from '../../../helpers/config/envConfig'
import { decodedToken } from '@/utils/jwt'


type InitialStateType = {
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
    error: string,
    user: any,
    userByRole: any
}

const initialState: InitialStateType = {
    user: {},
    userByRole: {},
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: ""
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (token: string) => {
    const decoded: any = decodedToken(token)
    const response = await fetch(`${getBaseUrl()}user/single/${decoded?.user_id}/`);
    const data = await response.json();
    console.log(data)
    return data;
});
export const fetchUserByRole = createAsyncThunk('user/fetchUserByRole', async ({ userId, role }: any) => {
    const response = await fetch(`${getBaseUrl()}user/${role}/${userId}/`);
    const data = await response.json();
    return data[role];
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = {}
            state.userByRole = {}
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.error = '';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.error = '';

            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.error = action.error.message as string;
            })
            .addCase(fetchUserByRole.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.error = '';
            })
            .addCase(fetchUserByRole.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.userByRole = action.payload;
                state.error = '';

            })
            .addCase(fetchUserByRole.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.error = action.error.message as string;
            });
    },
})


export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer