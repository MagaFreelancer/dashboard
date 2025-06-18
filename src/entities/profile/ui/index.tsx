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
        <div className={clsx("", className)}>
            <Avatar src={src} />
            <div>
                <div>{name}</div>
                <span>Admin</span>
            </div>
        </div>
    );
};
