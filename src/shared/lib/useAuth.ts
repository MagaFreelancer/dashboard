import { userSelector } from "@/entities/auth";
import { useAppSelector } from "./hooks";

export const useAuth = () => {
    const user = useAppSelector(userSelector);

    if (user.user === null) {
        console.log("ошибка");
    }

    return user.user;
};
