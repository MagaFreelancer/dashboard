import clsx from "clsx";
import { LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "@/entities/auth";
import { useAppDispatch } from "@/shared/lib/hooks";

interface Props {
    className?: string;
}

export const LogoutButton: React.FC<Props> = ({ className }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    return (
        <button onClick={handleLogout} className={clsx("", className)}>
            <span className="group-hover:text-blue transition-colors duration-200">
                <LogOut />
            </span>
            Logout
        </button>
    );
};
