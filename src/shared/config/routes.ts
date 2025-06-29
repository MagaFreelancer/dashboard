export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile",
    LOGOUT: "/logout",
} as const;

export type AppRouteKeys = keyof typeof ROUTES;
