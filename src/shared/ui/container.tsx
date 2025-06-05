import clsx from "clsx";
import type { ReactNode } from "react";

interface IPropsContainer {
    className?: string;
    children: ReactNode;
}

const Container = ({ className, children }: IPropsContainer) => {
    return (
        <div
            className={clsx(
                "max-w-[1455px] px-[15px] mx-auto w-full",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
