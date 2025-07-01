import clsx from "clsx";
import type { JSX } from "react";
import { StatWidget } from "@/entities/stat-widget";
import boxIcon from "@/shared/assets/icons/box-icon.svg";
import peopleIcon from "@/shared/assets/icons/people-icon.svg";
import timeIcon from "@/shared/assets/icons/time-icon.svg";
import tradingIcon from "@/shared/assets/icons/trading-icon.svg";

interface IPropsStatsTotal {
    className?: string;
}

export const StatsTotal = ({ className }: IPropsStatsTotal): JSX.Element => {
    return (
        <div className={clsx("flex flex-wrap gap-7 max-w-[1150px]", className)}>
            <StatWidget title="total user" counter={3000} icon={peopleIcon} />
            <StatWidget title="total user" counter={3000} icon={boxIcon} />
            <StatWidget
                title="total user"
                counter={3000}
                icon={tradingIcon}
                formater="currency"
            />
            <StatWidget title="total user" counter={3000} icon={timeIcon} />
        </div>
    );
};
