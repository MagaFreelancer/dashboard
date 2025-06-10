import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import "./styles/index.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/:type" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
