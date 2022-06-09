export const _initUrlData = (pFilter: URL, params: any) => {
    for (let key of params) {
        pFilter.searchParams.append(key, params[key]);
    }
}