export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    PROFILE: (id: string) => `/profile/${id}`,
} as const;

export type AppRouteKeys = keyof typeof ROUTES;
