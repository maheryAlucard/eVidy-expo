export interface ICJBaseResponse {
    code: number;
    result: boolean;
    message: string;
    requestId: string;
}

export interface ICJGetAccessTokenResData {
    accessToken: string;
    accessTokenExpiryDate: string;
    refreshToken: string;
    refreshTokenExpiryDate: string;
    createDate: string;
}

export interface ICJGetAccessTokenRes extends ICJBaseResponse {
    data?: ICJGetAccessTokenResData;
}

export interface ICJCategoriesResData {
    categoryId: string;
    categoryName: string;
}

export interface ICJCategoriesResDataSecondList {
    categorySecondName: string;
    categorySecondList: ICJCategoriesResData[];
}

export interface ICJCategoriesResDataFirstList {
    categoryFirstName: string;
    categoryFirstList: ICJCategoriesResDataSecondList[];
}

export interface ICJCategoriesRes extends ICJBaseResponse {
    data?: ICJCategoriesResDataFirstList[];
}

export interface ICJProductsResDataItem {
    pid: string;
    productName: string;
    productNameEn: string;
    productSku: string;
    productImage: string;
    productWeight: number;
    productType: null | string;
    productUnit: string;
    sellPrice: number;
    categoryId: string;
    categoryName: string;
    sourceFrom: number;
    remark: string;
    createTime: null | string;
}

export interface ICJProductsResData {
    pageNum: number;
    pageSize: number;
    total: number;
    list: ICJProductsResDataItem[]
}

export interface ICJProductsRes extends ICJBaseResponse {
    data?: ICJProductsResData
}