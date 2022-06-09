import { IWCProductImage } from "./WCProducts";

export type tCategoriesDisplay = 'default' | 'products' | 'subcategory' | 'both';
export type tCategoriesOrder = 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';

export interface IWCProductCategoriesAll {
    id: number;
    name: string;
    slug: string;
    parent: number;
    description: string;
    display: tCategoriesDisplay;
    image: IWCProductImage;
    menu_order: number;
    count: number;
}

export interface IWCProductCategoriesRequest {
    context: string;
    page: number;
    per_page: number;
    search: string;
    exclude: number[];
    include: number[];
    order: 'asc' | 'desc';
    orderby: tCategoriesOrder;
    hide_empty: boolean;
    parent: number;
    product: number;
    slug: string;
}