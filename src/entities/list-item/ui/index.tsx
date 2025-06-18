import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
    className?: string;
    index: number;
    item: any;
    handleClick: (index: number) => void;
    isActive: boolean;
}

export const ListItem: React.FC<Props> = ({
    className,
    index,
    item,
    handleClick,
    isActive,
}: Props) => {
    return (
        <li
            key={index}
            className={clsx(
                "w-full relative cursor-pointer text-[14px] font-semibold mr-6",
                className
            )}
            onClick={() => handleClick(index)}
        >
            <NavLink to={item.route}>
                <div
                    className={clsx(
                        "absolute transition duration-200 -translate-x-2 transform left-0 top-0 w-1.5 h-full rounded-r-[6px]",
                        isActive
                            ? "bg-[#4880FF] translate-x-0"
                            : "bg-transparent "
                    )}
                />
                <div className="ml-5">
                    <div
                        className={clsx(
                            "flex transition duration-200 items-center gap-4 p-4 rounded-[6px]  hover:bg-[#ebebeb]",
                            isActive &&
                                "text-white bg-[#4880FF] hover:bg-[#6694fa]!"
                        )}
                    >
                        {item.icon}
                        {item.label}
                    </div>
                </div>
            </NavLink>
        </li>
    );
};
