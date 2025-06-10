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
        <div className={clsx("", className)}>
            <Auth />
        </div>
    );
};
