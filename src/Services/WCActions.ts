import { IWCProductCategoriesAll, IWCProductCategoriesRequest } from "../Interfaces/WCProductCategorie";
import { IWCProductRequestFilter } from "../Interfaces/WCProductRequest";
import { IWCProductPropriety } from "../Interfaces/WCProducts";
import { _WC_API_KEY, _WC_BASE_URL, _WC_BASE_VERSION } from "../Static/WC";
import { _WC_API } from "../Static/WCApis";
import { Http } from "./Http";

const http = new Http({
    auth: {
        username: _WC_API_KEY.consumerKey,
        password: _WC_API_KEY.consumerSecret,
    }
});

export const listAllWCProducts = () => {
    return http.get<IWCProductPropriety[]>(_WC_API.listAllProduct);
}

export const getProductByFiler = (filter: Partial<IWCProductRequestFilter>) => {
    const pFilter = new URL(_WC_API.listAllProduct);
    const allFilter = { ...filter } as any;
    const keys = Object.keys(filter);
    for (let key of keys) {
        pFilter.searchParams.append(key, allFilter[key]);
    }
    return http.get<IWCProductPropriety[]>(pFilter.href);
}

export const getCategorieList = (filter: Partial<IWCProductCategoriesRequest>) => {
    const pFilter = new URL(_WC_API.category);
    const allFilter = { ...filter } as any;
    const keys = Object.keys(filter);
    for (let key of keys) {
        pFilter.searchParams.append(key, allFilter[key]);
    }
    return http.get<IWCProductCategoriesAll[]>(pFilter.href);
}