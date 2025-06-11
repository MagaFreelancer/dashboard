import clsx from "clsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthForm } from "@/entities/auth";
import { useYupForm } from "../model/use-yup-form";

interface Props {
    className?: string;
}

export const Auth: React.FC<Props> = ({ className }: Props) => {
    const naviagte = useNavigate();
    const { register, handleSubmit, errors, isLogin } = useYupForm();
    const onSubmit = (data: any) => {
        console.log(`${isLogin ? "Login" : "Register"} data:`, data);
    };
    return (
        <div className={clsx("", className)}>
            <h3>{isLogin ? "Login" : "Register"}</h3>
            <p>Please enter your email and password to continue</p>
            <AuthForm
                {...{ register, handleSubmit, errors, isLogin, onSubmit }}
            />
            <p>
                Don’t have an account?{" "}
                <span onClick={() => naviagte("/register")}>
                    {" "}
                    Create Account
                </span>
            </p>
        </div>
    );
};
