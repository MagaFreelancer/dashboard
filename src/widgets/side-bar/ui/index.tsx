import clsx from "clsx";
import { useState } from "react";
import { type JSX } from "react";
import { NavLink } from "react-router";
import { navItems } from "@/widgets/side-bar/model/nav-items.tsx";

export const SideBar = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <aside className="py-6">
            <h1 className="mb-7 text-[20px] font-extrabold text-center">
                <span className="text-[#4880FF]">Dash</span>Stack
            </h1>
            <nav>
                <ul className="flex flex-wrap gap-2">
                    {navItems.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <li
                                key={index}
                                className="w-full relative cursor-pointer text-[14px] font-semibold mr-6"
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
                    })}
                </ul>
            </nav>
        </aside>
    );
};
