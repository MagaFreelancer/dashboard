import clsx from "clsx";
import { Gauge, Grid2x2 } from "lucide-react";
import type { JSX } from "react";
import { NavLink } from "react-router";
import { ROUTES } from "../../../shared/config/routes.ts";

export const SideBar = (): JSX.Element => {
    return (
        <aside className="py-6 pr-6">
            {/*TODO изменить test-[20] на готовые размеры*/}
            <h1 className="mb-7 text-[20px] font-extrabold text-center">
                <span className="text-[#4880FF]">Dash</span>Stack
            </h1>
            <nav>
                <ul className="flex flex-wrap gap-2">
                    <li className="w-full cursor-pointer text-[14px] font-semibold">
                        <NavLink
                            to={ROUTES.HOME}
                            className={({ isActive }) =>
                                clsx(
                                    "flex items-center gap-4 p-5 rounded-[6px] transition",
                                    isActive && "text-white bg-[#4880FF]"
                                )
                            }
                        >
                            <Gauge />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="w-full cursor-pointer text-[14px] font-semibold">
                        <NavLink
                            to={ROUTES.LOGIN}
                            className={({ isActive }) =>
                                clsx(
                                    "flex gap-4 p-5 rounded-[6px] transition",
                                    isActive && "text-white bg-[#4880FF]"
                                )
                            }
                        >
                            <Grid2x2 />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="w-full cursor-pointer text-[14px] font-semibold">
                        <NavLink
                            to={ROUTES.PROFILE}
                            className={({ isActive }) =>
                                clsx(
                                    "flex gap-4 p-5 rounded-[6px] transition",
                                    isActive && "text-white bg-[#4880FF]"
                                )
                            }
                        >
                            <Grid2x2 />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="w-full cursor-pointer text-[14px] font-semibold">
                        <NavLink
                            to={ROUTES.REGISTER}
                            className={({ isActive }) =>
                                clsx(
                                    "flex gap-4 p-5 rounded-[6px] transition",
                                    isActive && "text-white bg-[#4880FF]"
                                )
                            }
                        >
                            <Grid2x2 />
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
