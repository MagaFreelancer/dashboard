import { Gauge, Layers } from "lucide-react";
import { ROUTES } from "@/shared/config/routes.ts";

export const navItems = [
    {
        label: "Dashboard",
        icon: <Gauge />,
        route: ROUTES.HOME,
    },
    {
        label: "Login",
        icon: <Gauge />,
        route: ROUTES.LOGIN,
    },
    {
        label: "Product Stock",
        icon: <Layers />,
        route: ROUTES.PRODUCT__STOCK,
    },
];
