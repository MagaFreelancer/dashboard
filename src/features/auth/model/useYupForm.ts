import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { loginSchema, registerSchema } from "@/entities/auth";

export const useYupForm = () => {
    const { type } = useParams(); // "login" | "register"
    const isLogin = type === "login";

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
