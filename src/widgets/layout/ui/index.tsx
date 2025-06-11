import React, { type JSX } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "@/widgets/side-bar";

export const LayoutComponent: React.FC = (): JSX.Element => {
    return (
        <div className="grid grid-cols-[240px_1fr] h-screen">
            <SideBar />
            <Outlet />
        </div>
    );
};
