import { useState } from "react";
import { type JSX } from "react";
import { ListItem } from "@/entities/list-item";
import { navItems } from "@/widgets/side-bar/model/nav-items.tsx";

export const SideBar = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <aside className="py-6">
            <h1 className="mb-7 text-[20px] font-extrabold text-center">
                <span className="text-[#4880FF]">Dash</span>Stack
            </h1>
            <nav>
                <ul className="flex flex-wrap gap-2">
                    {navItems.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <ListItem
                                key={index}
                                index={index}
                                item={item}
                                handleClick={handleClick}
                                isActive={isActive}
                                className="text-[14px] font-semibold mr-6"
                            />
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};
