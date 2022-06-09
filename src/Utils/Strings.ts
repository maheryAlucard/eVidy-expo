export const _removeTags = (text: string) => {
    const regex = /(<([^>]+)>)/ig;
    const result = text.replace(regex, '');
    return result;
}

export const _thousandCommas = (text: string) => {
    var parts = text.split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
}