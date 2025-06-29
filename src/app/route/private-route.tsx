import React, { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/lib/useAuth";

interface IProps {
    children: ReactNode;
}
export const PrivateRoute: React.FC<IProps> = ({
    children,
}: IProps): ReactNode => {
    const user = useAuth();
    const navigate = useNavigate();
    console.log(user);

    React.useEffect(() => {
        if (user === null) {
            navigate("/login", { replace: true });
        }
    }, [navigate, user]);

    return children;
};
