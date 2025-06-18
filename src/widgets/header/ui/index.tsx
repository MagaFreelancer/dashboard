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
            <div className="relative">
                <Dropdown
                    trigger={
                        <Profile
                            name="John Doe"
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                        />
                    }
                >
                    <ul>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        </header>
    );
};
