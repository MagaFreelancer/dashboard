import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { LayoutComponent } from "@/widgets/layout";
import { Dashboard } from "../pages/dashboard";
import { PrivateRoute } from "./route/private-route";
import "./styles/index.css";

function App() {
    return (
        <BrowserRouter>
            <LayoutComponent>
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                    <Route path="/:type" element={<AuthPage />} />
                </Routes>
            </LayoutComponent>
        </BrowserRouter>
    );
}

export default App;
