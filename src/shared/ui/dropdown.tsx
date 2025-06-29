import Popover from "@mui/material/Popover";
import clsx from "clsx";
import React from "react";

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
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <div className=" cursor-pointer" onClick={handleClick}>
                {trigger}
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                PaperProps={{
                    className: clsx(className, "mt-3 "),
                }}
            >
                {children}
            </Popover>
        </div>
    );
};
