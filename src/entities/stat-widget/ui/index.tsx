import { TrendingUp } from "lucide-react";
import type { JSX } from "react";

interface IPropsStatWidget {
    title: string;
    counter: number;
    icon: string;
    formater?: "currency";
}

export const StatWidget = (props: IPropsStatWidget): JSX.Element => {
    const { title, counter, icon, formater } = props;

    const formatted = new Intl.NumberFormat("en-US", {
        style: formater,
        currency: "USD",
        minimumFractionDigits: 0, // убираем центы
        maximumFractionDigits: 0,
    }).format(counter);

    return (
        <div className="max-w-[262px] w-full bg-white p-4 rounded-[14px] shadow">
            <div className="flex mb-7 gap-[74px] items-center">
                <div>
                    <p className="font-semibold text-[16px] text-[#202224] mb-4">
                        {title}
                    </p>
                    <p className="font-bold text-[28px]">{formatted}</p>
                </div>
                <img src={icon} alt="people" />
            </div>
            <p className="flex items-center gap-2 font-semibold text-[16px]">
                <span className="flex gap-2 text-green-600">
                    <TrendingUp />
                    8.5%
                </span>
                geg
            </p>
        </div>
    );
};
