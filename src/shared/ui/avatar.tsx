import clsx from "clsx";
import React from "react";

interface Props {
    className?: string;
    src: string;
}

export const Avatar: React.FC<Props> = ({ className, src }: Props) => {
    return (
        <div className={clsx("w-[40px] h-[40px] rounded-full", className)}>
            <img
                src={src}
                className="w-full h-full object-cover"
                alt="avatar"
            />
        </div>
    );
};
