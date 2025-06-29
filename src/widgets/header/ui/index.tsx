import clsx from "clsx";
import React from "react";
import { Profile } from "@/entities/profile";
import { Dropdown } from "@/shared/ui/dropdown";
import { Input } from "@/shared/ui/input";
import { DropdownList } from "./dropdown-list";

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
                    className=" !shadow-lg  "
                    trigger={
                        <Profile
                            name="John Doe"
                            src="https://i1.sndcdn.com/avatars-000776229100-mdfped-t240x240.jpg"
                        />
                    }
                >
                    <DropdownList />
                </Dropdown>
            </div>
        </header>
    );
};
