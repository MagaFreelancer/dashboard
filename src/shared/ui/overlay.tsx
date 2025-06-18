import clsx from "clsx";
import React from "react";

interface Props {
    className?: string;
    onClose: () => void;
}

export const Overlay: React.FC<Props> = ({ className, onClose }: Props) => {
    return (
        <div
            className={clsx("fixed top-0 left-0 w-full h-full z-1", className)}
            onClick={onClose}
        ></div>
    );
};
