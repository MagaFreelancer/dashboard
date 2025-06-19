import type { JSX } from "react";
import { Chart } from "@/entities/chart";
import { StatsTotal } from "@/widgets/stats-total";

export const Dashboard = (): JSX.Element => {
    return (
        <div>
            <h1 className="text-[32px] text-base font-bold mb-5">Dashboard</h1>
            <StatsTotal className="mb-7" />
            <Chart />
        </div>
    );
};
