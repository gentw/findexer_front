import moment from "moment";

/**
 * Formats date string, '2022-06-01T10:04:48.774Z' to 'May, 31'
 * @param value: string
 * @returns string
 */
export function formatDate(value: string): string {
    return value && moment(value).isValid()
        ? moment(value).format("MMM, DD")
        : value;
}

/**
 * Get unix millisecond timestamp
 * https://momentjs.com/docs/#/parsing/string-format/
 * @param value
 * @returns
 */
export function getEpochTime(value: string): number | string {
    return value && moment(value).isValid()
        ? Number(moment(value).format('x'))
        : value;
}

/**
 * Check if Asset has quantity. Current 'Debt' and 'Real Estate 
 * do not have quantity.
 * @param type 
 * @returns 
 */
export function hasAssetQuantity(type: string): boolean {
    return !(
        type === "Debt" ||
        type === "Real Estate"
    );
}
