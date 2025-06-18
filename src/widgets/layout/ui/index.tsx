import React, { type JSX } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import { SideBar } from "@/widgets/side-bar";

export const LayoutComponent: React.FC = (): JSX.Element => {
    return (
        <div className="grid grid-cols-[240px_1fr] h-screen">
            <SideBar />

            <div className="grid grid-rows-[auto_1fr]">
                <Header className="flex items-center justify-between" />
                <Outlet />
            </div>
        </div>
    );
};
