import clsx from "clsx";
import { type ReactNode } from "react";

interface ITitleProps {
    children: ReactNode;
    className?: string;
}

const Title = ({ children, className }: ITitleProps) => {
    return (
        <h1 className={clsx("font-medium text-5xl max-sm:text-3xl", className)}>
            {children}
        </h1>
    );
};

export default Title;
