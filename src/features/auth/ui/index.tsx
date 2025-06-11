import clsx from "clsx";
import React from "react";
import { AuthForm } from "@/entities/auth";
import { useYupForm } from "../model/use-yup-form";
import { SupportDescr } from "./support-descr";

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
            <h3 className="text-3xl font-bold text-center mb-4">
                {isLogin ? "Login to Account" : "Register Account"}
            </h3>
            <p className="text-center mb-9">
                Please enter your email and password to continue
            </p>
            <AuthForm
                {...{
                    register,
                    handleSubmit,
                    errors,
                    isLogin,
                    onSubmit,
                }}
            />
            <SupportDescr isLogin={isLogin} />
        </div>
    );
};
