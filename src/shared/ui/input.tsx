import clsx from "clsx";
import React, { type JSX, type ReactNode } from "react";

interface Props {
    className?: string;
    leftIcon?: ReactNode;
    value: string;
    onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
    className,
    leftIcon,
    onChange,
    value,
}: Props): JSX.Element => {
    return (
        <div className={"flex justify-between relative"}>
            {leftIcon && leftIcon}
            <input
                className={clsx("", className)}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                type="text"
            />
        </div>
    );
};
