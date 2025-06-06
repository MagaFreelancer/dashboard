import clsx from "clsx";
import { Gauge, Grid2x2 } from "lucide-react";
import { useState } from "react";
import { type JSX } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../shared/config/routes.ts";

const navItems = [
    {
        label: "Dashboard",
        icon: <Gauge />,
        route: ROUTES.HOME,
    },
    {
        label: "Register",
        icon: <Grid2x2 />,
        route: ROUTES.REGISTER,
    },
    {
        label: "Login",
        icon: <Gauge />,
        route: ROUTES.LOGIN,
    },
];

export const SideBar = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const navigate = useNavigate();

    const handleClick = (index: number, route: string) => {
        setActiveIndex(index);
        navigate(route);
    };

    return (
        <aside className="py-6 pr-6">
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
                                className="w-full transition relative cursor-pointer text-[14px] font-semibold "
                                onClick={() => handleClick(index, item.route)}
                            >
                                <div
                                    className={clsx(
                                        "absolute transition left-0 top-0 w-1.5 h-full rounded-r-[6px]",
                                        isActive
                                            ? "bg-[#4880FF]"
                                            : "bg-transparent"
                                    )}
                                />
                                <div className="ml-5">
                                    <div
                                        className={clsx(
                                            "flex items-center gap-4 p-4 rounded-[6px] transition hover:bg-[#ebebeb]",
                                            isActive &&
                                                "text-white bg-[#4880FF] hover:bg-[#6694fa]!"
                                        )}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};
