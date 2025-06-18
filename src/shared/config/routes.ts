export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: (id: string) => `/profile/${id}`,
} as const;

export type AppRouteKeys = keyof typeof ROUTES;
