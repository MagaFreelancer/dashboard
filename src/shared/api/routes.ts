export const API_ROUTES = {
    AUTH: {
        LOGIN: "/auth",
        REGISTER: "/register",
        AUTH_ME: "/auth_me",
    },
    PRODUCTS: {
        ALL: "/products",
        BY_ID: (id: string) => `/products/${id}`,
    },
} as const;
