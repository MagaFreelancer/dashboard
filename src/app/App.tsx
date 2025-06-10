import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { Dashboard } from "../pages/dashboard";
import { SideBar } from "../widgets/side-bar";
import "./styles/index.css";

function App() {
    return (
        <BrowserRouter>
            <div className="grid grid-cols-[240px_1fr] h-screen">
                <SideBar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/auth/:type" element={<AuthPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
