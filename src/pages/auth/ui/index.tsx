import clsx from "clsx";
import React, { type JSX } from "react";
import { Auth } from "@/features/auth";

interface Props {
    className?: string;
}

export const AuthPage: React.FC<Props> = ({
    className,
}: Props): JSX.Element => {
    return (
        <div
            className={clsx(
                "bg-[url('./public/bg.jpg')] bg-cover bg-center h-screen flex items-center justify-center",
                className
            )}
        >
            <Auth className="max-w-[630px] w-[100%] bg-white rounded-2xl py-[90px] px-11" />
        </div>
    );
};
