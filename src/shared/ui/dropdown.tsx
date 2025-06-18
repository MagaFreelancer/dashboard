import { clsx } from "clsx";
import React from "react";
import { createPortal } from "react-dom";

interface Props {
    className?: string;
    trigger: React.ReactNode;
    children?: React.ReactNode;
}

export const Dropdown: React.FC<Props> = ({
    className,
    trigger,
    children,
}: Props) => {
    const [open, setOpen] = React.useState(false);
    const toggleDropdown = () => {
        setOpen((prev) => !prev);
    };
    return (
        <>
            <div onClick={toggleDropdown} style={{ display: "inline-block" }}>
                {trigger ? trigger : "button"}
            </div>

            {open &&
                createPortal(
                    <div
                        className={clsx(
                            className,
                            "absolute top-[100%] right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50"
                        )}
                    >
                        {children}
                    </div>,
                    document.getElementById("portal-root")!
                )}
        </>
    );
};
