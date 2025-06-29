import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { loginSchema, registerSchema } from "@/entities/auth";
import { useAppDispatch } from "@/shared/lib/hooks";
import { fetchLogin, fetchRegister } from "..";

export const useYupForm = () => {
    const { pathname } = useLocation();
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
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
        const request = isLogin ? fetchLogin : fetchRegister;
        await dispatch(request(data));

        navigate("/");
    };

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
        onSubmit,
    };
};
