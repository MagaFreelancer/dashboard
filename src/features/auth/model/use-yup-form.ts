import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { loginSchema, registerSchema } from "@/entities/auth";

export const useYupForm = () => {
    const { pathname } = useLocation(); // "login" | "register"
    const isLogin = pathname.includes("login");
    const {
        handleSubmit,
        register,
        reset,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    });

    useEffect(() => {
        clearErrors();
    }, [isLogin]);

    return {
        register,
        handleSubmit,
        reset,
        setValue,
        errors,
        isLogin,
        clearErrors,
    };
};
