import clsx from "clsx";
import React from "react";
import { Avatar } from "@/shared/ui/avatar";

interface Props {
    className?: string;
    src: string;
    name: string;
}

export const Profile: React.FC<Props> = ({ className, src, name }: Props) => {
    return (
        <div className={clsx("flex items-center gap-3", className)}>
            <Avatar src={src} className="w-[50px] h-[50px]" />
            <div className="flex flex-col">
                <div className="font-bold text-[14px] mb-">{name}</div>
                <span className="text-[#565656] text-xs">Admin</span>
            </div>
        </div>
    );
};
