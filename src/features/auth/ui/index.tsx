import clsx from "clsx";
import React from "react";
import { AuthForm } from "@/entities/auth";
import { useYupForm } from "../model/use-yup-form";

interface Props {
    className?: string;
}

export const Auth: React.FC<Props> = ({ className }: Props) => {
    const { register, handleSubmit, errors, isLogin } = useYupForm();
    const onSubmit = (data: any) => {
        console.log(`${isLogin ? "Login" : "Register"} data:`, data);
    };
    return (
        <div className={clsx("", className)}>
            <AuthForm
                {...{ register, handleSubmit, errors, isLogin, onSubmit }}
            />
        </div>
    );
};
