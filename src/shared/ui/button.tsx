import clsx from "clsx";
import React from "react";

interface Props {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    type: "submit" | "button";
}

export const Button: React.FC<Props> = ({
    className,
    onClick,
    children,
    type,
}: Props) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                "bg-blue text-white py-3 rounded-xl font-bold text-xl",
                className
            )}
        >
            {children}
        </button>
    );
};
