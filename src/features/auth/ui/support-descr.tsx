import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    isLogin: boolean;
}

export const SupportDescr: React.FC<Props> = ({ isLogin }: Props) => {
    const naviagte = useNavigate();
    return (
        <>
            {isLogin ? (
                <p className="text-center pt-3 text-grey700">
                    Don’t have an account?{" "}
                    <span
                        className="text-blue underline cursor-pointer"
                        onClick={() => naviagte("/register")}
                    >
                        Create Account
                    </span>
                </p>
            ) : (
                <p className="text-center pt-3 text-grey700">
                    Already have an account?{" "}
                    <span
                        className="text-blue underline cursor-pointer"
                        onClick={() => naviagte("/login")}
                    >
                        Login
                    </span>
                </p>
            )}
        </>
    );
};
