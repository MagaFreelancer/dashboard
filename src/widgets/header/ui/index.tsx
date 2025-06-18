import clsx from "clsx";
import React from "react";
import { Profile } from "@/entities/profile";
import { Dropdown } from "@/shared/ui/dropdown";
import { Input } from "@/shared/ui/input";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }: Props) => {
    const [search, setSearch] = React.useState("");
    return (
        <header className={clsx("", className)}>
            <div>
                <Input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            <div>
                <Dropdown
                    trigger={
                        <Profile
                            name="John Doe"
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                        />
                    }
                >
                    lol
                </Dropdown>
            </div>
        </header>
    );
};
