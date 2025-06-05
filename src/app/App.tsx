import React from "react";
import Container from "../shared/ui/container";
import { Input } from "../shared/ui/input";
import "./styles/index.css";

function App() {
    const [value, setValue] = React.useState("");
    return (
        <div>
            <Input value={value} onChange={setValue} />
            <Container className="text-primaryy">test</Container>
        </div>
    );
}

export default App;
