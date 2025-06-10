import type { JSX } from "react";
import { StatsTotal } from "../../../widgets/stats-total";

export const Dashboard = (): JSX.Element => {
    return (
        <main className="p-7 bg-[#F5F6FA]">
            <StatsTotal />
        </main>
    );
};
