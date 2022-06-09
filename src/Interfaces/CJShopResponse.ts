export interface ICJShopeGlobalResponse {
    result: boolean;
    message: string;
}

export interface ICJShopeResponseStart {
    result: string;
}

export interface ICJShopeResponseProductListDataItem {
    img: string;
    productId: string;
    price: string;
    packgeWeight: number;
    variantId: string;
    title: string;
    sku: string;
    shortSku: number;
}

export interface ICJShopeResponseProductList extends ICJShopeGlobalResponse {
    data: ICJShopeResponseProductListDataItem[]
}

export interface ICJShopeResponseTrendingProduct extends ICJShopeGlobalResponse {
    data: {
        Dropshipping: ICJShopeResponseProductListDataItem[]
    }
}

