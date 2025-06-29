import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchAuthMe, fetchLogin, fetchRegister } from "@/features/auth";
import type { IAuthResponse, IUser, IUserState } from "./types";

const initialState: IUserState = {
    loading: false,
    error: null,
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.fulfilled, (state, action: any) => {
            state.loading = false;
            state.user = action.payload.user;
            localStorage.setItem("token", action.payload.token);
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRegister.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(fetchLogin.fulfilled, (state, action: any) => {
            state.loading = false;
            state.user = action.payload.user;
            localStorage.setItem("token", action.payload.token);
            console.log("login", action.payload);
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchLogin.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(fetchAuthMe.fulfilled, (state, action: any) => {
            state.loading = false;
            console.log("authme", action.payload);

            state.user = action.payload;
        });
        builder.addCase(fetchAuthMe.rejected, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAuthMe.pending, (state) => {
            state.loading = false;
        });
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
