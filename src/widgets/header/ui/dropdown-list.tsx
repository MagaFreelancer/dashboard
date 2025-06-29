import clsx from "clsx";
import { Gauge } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";

interface Props {
    className?: string;
}
const navItems = [
    {
        label: "Dashboard",
        icon: <Gauge />,
        route: ROUTES.HOME,
    },
];
export const DropdownList: React.FC<Props> = ({ className }: Props) => {
    return (
        <ul className={clsx("", className)}>
            {navItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link
                            to={item.route}
                            className="group flex items-center gap-2 py-2 px-4 transition duration-200 hover:bg-grey"
                        >
                            <span className="group-hover:text-blue transition-colors duration-200">
                                {item.icon}
                            </span>
                            {item.label}
                        </Link>
                    </li>
                );
            })}
            <li className="cursor-pointer group flex items-center gap-2 py-2 px-4 transition duration-200 hover:bg-grey">
                <LogoutButton />
            </li>
        </ul>
    );
};
