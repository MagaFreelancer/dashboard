import { useEffect } from "react";
import { fetchAuthMe } from "@/features/auth";
import { useAppDispatch } from "@/shared/lib/hooks";

export const AppInitializer = () => {
    const dispatch = useAppDispatch();
    console.log("AppInitializer");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(fetchAuthMe());
        }
    }, [dispatch]);

    return null;
};
