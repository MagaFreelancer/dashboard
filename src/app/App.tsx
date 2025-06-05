import { Search } from "lucide-react";
import React from "react";
import Container from "../shared/ui/container";
import { Input } from "../shared/ui/input";
import "./styles/index.css";

function App() {
    const [value, setValue] = React.useState("");
    return (
        <div>
            <Input
                className="py-2 pl-11 pr-2 max-w-[388px]"
                leftIcon={<Search size={20} />}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
            />
            <Container className="text-primaryy">test</Container>
        </div>
    );
}

export default App;
