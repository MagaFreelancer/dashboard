import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IAuthResponse, IUser } from "@/entities/auth";
import { instance } from "@/shared/api/base";
import { API_ROUTES } from "@/shared/api/routes";

export const fetchRegister = createAsyncThunk(
    "user/fetchRegister",
    async (
        {
            email,
            password,
            username,
            avatar,
        }: {
            email: string;
            password: string;
            username: string;
            avatar: string;
        },
        thunkAPI
    ) => {
        try {
            const response = await instance.post<IAuthResponse>(
                API_ROUTES.AUTH.REGISTER,
                { email, password, username, avatar }
            );
            console.log(response);

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
