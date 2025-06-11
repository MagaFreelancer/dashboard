import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { LayoutComponent } from "@/widgets/layout";
import { Dashboard } from "../pages/dashboard";
import { PrivateRoute } from "./route/private-route";
import "./styles/index.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route element={<LayoutComponent />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route path="/register" element={<AuthPage />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="*" element={<>ошибка</>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
