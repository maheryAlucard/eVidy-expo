export type tWCOrderBy = 'date' | 'id' | 'include' | 'title' | 'slug' | 'price' | 'popularity' | 'rating';
export type tWCStatus = 'any' | 'draft' | 'pending' | 'private' | 'publish';
export type tWCType = 'simple' | 'grouped' | 'external' | 'variable';
export type tWCTaxClass = 'standard' | 'reduced-rate' | 'zero-rate';
export type tWCStockStatus = 'instock' | 'outofstock' | 'onbackorder';
export type tDateStringISO8601 = string;

export interface IWCProductRequestFilter {
    context: string;
    page: number;
    per_page: number;
    search: string;
    after: tDateStringISO8601;
    before: tDateStringISO8601;
    exclude: number[];
    include: number[];
    offset: number;
    order: 'asc' | 'desc';
    orderby: tWCOrderBy;
    parent: number[];
    parent_exclude: number[];
    slug: string;
    status: tWCStatus;
    type: tWCType;
    sku: string;
    featured: boolean;
    category: string;
    tags: string;
    shipping_class: string;
    attribute: string;
    attribute_term: string;
    tax_class: tWCTaxClass;
    on_sale: boolean;
    min_price: string;
    max_price: number;
    stock_status: tWCStockStatus;
}