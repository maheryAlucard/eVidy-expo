export interface ICJGetAccessTokenReq {
    email: string;
    password: string;
}

export interface ICJGetAccessTokenRefresh {
    refreshToken: string;
}