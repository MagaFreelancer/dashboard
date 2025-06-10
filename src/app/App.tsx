import { BrowserRouter } from "react-router";
import { Dashboard } from "../pages/dashboard";
import { SideBar } from "../widgets/side-bar";
import "./styles/index.css";

function App() {
    return (
        <BrowserRouter>
            <div className="grid grid-cols-[240px_1fr] h-screen">
                <SideBar />
                <Dashboard />
            </div>
        </BrowserRouter>
    );
}

export default App;
