const cjBaseUrl = 'https://developers.cjdropshipping.com/api2.0/v1/';
const cjShopApiUrl = 'https://developers.cjdropshipping.com/';

export const _CJAPI = {
    getAccessToken: cjBaseUrl + 'authentication/getAccessToken',
    refreshToken: cjBaseUrl + 'authentication/refreshAccessToken',
    getCategories: cjBaseUrl + 'product/getCategory',
    getProducts: cjBaseUrl + 'product/list'
}

export const _CJ_API_SHOP = {
    start: cjShopApiUrl + 'api/account/start',
    connectedLists: cjShopApiUrl + 'api/product/connectList',
    trendingProduct: cjShopApiUrl + 'api/product/queryHomeProducts'
}

export const _CJAPIKEY = '1404719cd8ac4fed92284fc753a52687';
export const _CJEMAIL = 'r.dagoswat@gmail.com';