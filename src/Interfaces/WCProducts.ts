import { tWCStatus, tWCStockStatus, tWCType } from "./WCProductRequest";

export type tWCCatalogueVisibility = 'visible' | 'catalog' | 'search' | 'hidden';
export type tWCTaxStatus = 'taxable' | 'shipping' | 'none';
export type tWCBackorders = 'no' | 'notify' | 'yes';

export interface IWCProductDownload {
    id: number;
    name: string;
    file: string;
}


export interface IWCProductDimensions {
    length: string;
    width: string;
    height: string;
}

export interface IWCProductCategories {
    id: number;
    name: string;
    slug: string;
}

export interface IWCProductTag {
    id: number;
    name: string;
    slug: string;
}

export interface IWCProductImage {
    id: number;
    date_created: Date;
    date_created_gmt: Date;
    date_modified: Date;
    date_modified_gmt: Date;
    src: string;
    name: string;
    alt: string;
}

export interface IWCAttributes {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
}

export interface IWCDefaultAttributes {
    id: number;
    name: string;
    options: string;
}

export interface IWCMetaData {
    id: number;
    key: string;
    value: string;
}

export interface IWCProductPropriety {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: Date;
    date_created_gmt: Date;
    date_modified: Date;
    date_modified_gmt: Date;
    type: tWCType;
    status: tWCStatus;
    featured: boolean;
    catalog_visibility: tWCCatalogueVisibility;
    description: string;
    short_description: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: Date;
    date_on_sale_from_gmt: Date;
    date_on_sale_to: Date;
    date_on_sale_to_gmt: Date;
    price_html: string;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: IWCProductDownload[];
    download_limit: number;
    download_expiry: number;
    external_url: string;
    button_text: string;
    tax_status: tWCTaxStatus;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number;
    stock_status: tWCStockStatus;
    backorders: tWCBackorders;
    backorders_allowed: boolean;
    backordered: boolean;
    sold_individually: boolean;
    weight: string;
    dimensions: IWCProductDimensions;
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    average_rating: string;
    rating_count: string;
    related_ids: number[];
    upsell_ids: number[];
    cross_sell_ids: number[];
    parent_id: number[];
    purchase_note: string;
    categories: IWCProductCategories[];
    tags: IWCProductTag[];
    images: IWCProductImage[];
    attributes: IWCAttributes[]
    default_attributes: IWCDefaultAttributes[];
    variations: number[];
    grouped_products: number[];
    menu_order: number;
    meta_data: IWCMetaData[];
}