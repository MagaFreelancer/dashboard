export interface IUser {
    id?: string;
    email: string;
    username: string;
    avatar: string;
}

export interface IUserState {
    loading: boolean;
    error: null;
    user: IUser | null;
}

export interface IAuthResponse {
    token: string;
    user: IUser;
}
