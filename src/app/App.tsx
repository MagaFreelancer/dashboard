import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "@/app/store";
// import { AuthPage } from "@/pages/auth";
import { Dashboard } from "@/pages/dashboard";
import { ProductStock } from "@/pages/product-stock";
import { ROUTES } from "@/shared/config/routes.ts";
import { SideBar } from "@/widgets/side-bar";
import "./styles/index.css";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="grid grid-cols-[240px_1fr] h-screen">
                    <SideBar />
                    <main className="p-7 bg-[#F5F6FA]">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route
                                path={ROUTES.PRODUCT__STOCK}
                                element={<ProductStock />}
                            />
                            {/*<Route path="/:type" element={<AuthPage />} />*/}
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
