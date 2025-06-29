import { StatWidget } from "@/entities/stat-widget";
import peopleIcon from "@/shared/assets/icons/people-icon.svg";

export const StatsTotal = () => {
    return (
        <div className="flex justify-between">
            <StatWidget title="total user" counter={3000} icon={peopleIcon} />
        </div>
    );
};
