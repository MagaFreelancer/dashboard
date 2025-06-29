import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUser } from "@/entities/auth";
import { instance } from "@/shared/api/base";
import { API_ROUTES } from "@/shared/api/routes";

export const fetchAuthMe = createAsyncThunk<IUser, void>(
    "user/fetchAuthMe",
    async (_, thunkAPI) => {
        try {
            const response = await instance.get(API_ROUTES.AUTH.AUTH_ME);
            console.log(response);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Unauthorized");
        }
    }
);
