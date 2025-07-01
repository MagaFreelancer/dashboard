import type { RootState } from "@/app/appStore";

export const userSelector = (state: RootState) => state.user.user;
