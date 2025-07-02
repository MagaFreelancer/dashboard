import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ProductStock } from "@/pages/product-stock";
import { store } from "@/app/store";
import { AuthPage } from "@/pages/auth";
import { LayoutComponent } from "@/widgets/layout";
// import { Dashboard } from "@/pages/dashboard";
// import { AppInitializer } from "./app-initializer";

// import { PrivateRoute } from "./route/private-route";
import "./styles/index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <LayoutComponent />
            </>
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
            {/*<AppInitializer />*/}
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
