import React from "react";
import { useLocation } from "react-router-dom";
import { SideBar } from "@/widgets/side-bar";

interface Props {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<Props> = ({ children }: Props) => {
    const location = useLocation();
    return location.pathname === "/login" ||
        location.pathname === "/register" ? (
        <>{children}</>
    ) : (
        <div className="grid grid-cols-[240px_1fr] h-screen ">
            <SideBar />
            {children}
        </div>
    );
};
