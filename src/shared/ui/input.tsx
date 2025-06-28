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
        <div className={" flex justify-between relative"}>
            {leftIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
                    {leftIcon}
                </div>
            )}
            <input
                className={clsx(
                    "bg-grey w-full outline-none rounded-4xl border-border border-[1px]",
                    className
                )}
                onChange={(e) => onChange(e)}
                value={value}
                defaultValue={defaultValue}
                type={type}
                {...props}
            />
        </div>
    );
};
