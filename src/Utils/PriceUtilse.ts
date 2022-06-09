import { _ArDollar } from "../Static/global";

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const priceConverter = (price: number) => {
    const cNumber = price.toString();
    const splitedNumber = cNumber.split('-');
    if (splitedNumber.length > 1) {
        const priceOne = parseFloat(splitedNumber[0]) * _ArDollar;
        const priceTwo = parseFloat(splitedNumber[1]) * _ArDollar;
        return `${numberWithCommas(Math.floor(priceOne))} - ${numberWithCommas(Math.floor(priceTwo))} Ar`
    } else return `${numberWithCommas(Math.floor(parseFloat(splitedNumber[0]) * _ArDollar))} Ar`
}