import { LineChart } from "@mui/x-charts";

export const Chart = () => {
    return (
        <div className="bg-white shadow rounded-[14px] p-7">
            <p className="text-[20px] font-bold">Sales Details</p>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                    },
                ]}
                height={300}
                grid={{
                    horizontal: true,
                }}
                margin={{
                    left: -20,
                }}
            />
        </div>
    );
};
