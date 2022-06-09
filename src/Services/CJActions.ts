import { ICJProductsRes } from './../Interfaces/CJResponse';
import { ICJCategoriesRes, ICJGetAccessTokenRes } from "../Interfaces/CJResponse";
import { _CJAPI, _CJAPIKEY, _CJEMAIL, _CJ_API_SHOP } from "../Static/CJApis";
import { Http } from "./Http";
import { ICJShopeResponseProductList, ICJShopeResponseStart, ICJShopeResponseTrendingProduct } from '../Interfaces/CJShopResponse';
import { ICJShopeProductList } from '../Interfaces/CJShopeRequest';

const http = new Http();

export const authentUser = (): Promise<ICJGetAccessTokenRes> => {
    return http.post<ICJGetAccessTokenRes>(_CJAPI.getAccessToken, {
        email: _CJEMAIL,
        password: _CJAPIKEY
    })
}

export const refreshToken = (refreshToken: string): Promise<ICJGetAccessTokenRes> => {
    return http.post<ICJGetAccessTokenRes>(_CJAPI.refreshToken, { refreshToken })
}

export const getProductCategories = (): Promise<ICJCategoriesRes> => {
    return http.get<ICJCategoriesRes>(_CJAPI.getCategories);
}

export const getProductLists = (filter?: {
    pageNum?: number,
    pageSize?: number,
    categoryId?: string,
    categoryKeyword?: string,
    pid?: string,
    productSku?: string,
}) => {
    let pFilter = null;
    if (filter) {
        pFilter = new URL(_CJAPI.getProducts);
        const allFilter = { ...filter } as any;
        const keys = Object.keys(filter);
        for (let key of keys) {
            pFilter.searchParams.append(key, allFilter[key]);
        }
        return http.get<ICJProductsRes>(pFilter.href);
    } else return http.get<ICJProductsRes>(_CJAPI.getProducts);
}

/** Methods for main shope */

export const startCJApi = () => {
    return http.post<ICJShopeResponseStart>(_CJ_API_SHOP.start, { access: 'hello' }, _CJAPIKEY);
}

export const getConnectedList = (filter: ICJShopeProductList) => {
    return http.post<ICJShopeResponseProductList>(_CJ_API_SHOP.connectedLists, filter, _CJAPIKEY);
}

export const getTrendingProduct = () => {
    return http.post<ICJShopeResponseTrendingProduct>(_CJ_API_SHOP.trendingProduct, { type: "Dropshipping" }, _CJAPIKEY);
}