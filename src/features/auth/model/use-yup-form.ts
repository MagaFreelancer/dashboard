import { yupResolver } from "@hookform/resolvers/yup";
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
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    });

    return { register, handleSubmit, reset, setValue, errors, isLogin };
};
