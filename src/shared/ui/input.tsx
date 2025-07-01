import clsx from "clsx";
import React, { type JSX, type ReactNode } from "react";

interface Props {
    className?: string;
    leftIcon?: ReactNode;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    defaultValue?: string;
    type?: string;
}

export const Input: React.FC<Props> = ({
    className,
    leftIcon,
    defaultValue,
    type,
    onChange,
    value,
    ...props
}: Props): JSX.Element => {
    return (
        <div className="relative flex justify-between w-full">
            {leftIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    {leftIcon}
                </div>
            )}
            <input
                className={clsx(
                    "py-3  pl-4 pr-2 bg-grey w-full  outline-none rounded-4xl border-border border-[1px]",
                    className,
                    leftIcon && "pl-10" // чтобы не налезал текст на иконку
                )}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                type={type}
                {...props}
            />
        </div>
    );
};
