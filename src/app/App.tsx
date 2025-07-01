import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { Dashboard } from "@/pages/dashboard";
import { AppInitializer } from "./app-initializer";
import { store } from "./appStore";
import { PrivateRoute } from "./route/private-route";
import "./styles/index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
    },
    {
        path: "/register",
        element: <AuthPage />,
    },
    {
        path: "/login",
        element: <AuthPage />,
    },
]);
function App() {
    return (
        <Provider store={store}>
            <AppInitializer />
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
