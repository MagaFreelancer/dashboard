import { clsx } from "clsx";
import React from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./overlay";

interface Props {
    className?: string;
    trigger: React.ReactNode;
    children?: React.ReactNode;
    // onToggle: () => void
}

export const Dropdown: React.FC<Props> = ({
    className,
    trigger,
    children,
    // onToggle
}: Props) => {
    const [open, setOpen] = React.useState(false);
    const [coords, setCoords] = React.useState<{ top: number; left: number }>({
        top: 0,
        left: 0,
    });
    const triggerRef = React.useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setOpen((prev) => !prev);
    };

    React.useEffect(() => {
        if (open && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            });
        }
    }, [open]);

    return (
        <>
            <div
                ref={triggerRef}
                onClick={toggleDropdown}
                style={{ display: "inline-block" }}
            >
                {trigger ? trigger : "button"}
            </div>

            {open &&
                createPortal(
                    <>
                        <div
                            style={{
                                top: coords.top,
                                left: coords.left,
                            }}
                            className={clsx(
                                className,
                                "absolute top-[100px] right-0  mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50"
                            )}
                        >
                            {children}
                        </div>
                        <Overlay onClose={toggleDropdown} />
                    </>,
                    document.getElementById("modal")!
                )}
        </>
    );
};
