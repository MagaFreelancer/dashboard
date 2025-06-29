import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/shared/api/base";
import { API_ROUTES } from "@/shared/api/routes";

export const fetchLogin = createAsyncThunk(
    "user/fetchLogin",
    async (
        { email, password }: { email: string; password: string },
        thunkAPI
    ) => {
        const response = await instance.post(API_ROUTES.AUTH.LOGIN, {
            email,
            password,
        });

        return response.data;
    }
);
