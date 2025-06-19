export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    PROFILE: (id: string) => `/profile/${id}`,
    PRODUCT__STOCK: "/product-stock",
} as const;

export type AppRouteKeys = keyof typeof ROUTES;
