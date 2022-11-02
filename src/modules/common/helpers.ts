import { AssetData } from "@/store/modules/assets/helpers/AssetsData";

/**
 * Comma separate numbers by thousands, e.g., format
 * 123456.678 to 123,456.678
 * @param value
 * @param decimals
 * @returns
 */
export function toCommaSeparated(value, decimals = 2) {
    return value.toLocaleString('en-US', { maximumFractionDigits: decimals })
}

/**
 * If initialPrice and currentPrice then compute ROI, else return 0
 * ROI = ((Final value of investment - Initial value of investment) / Cost of investment) * 100 
 * @param initialPrice
 * @param currentPrice
 * @returns ROI
 */
export function computeRoi(initialPrice: string | number, currentPrice: string | number): number {
    return initialPrice && currentPrice ?
        toCommaSeparated(
            ((Number(currentPrice) -
                Number(initialPrice)) /
                Number(initialPrice)) *
            100
            , 1)
        : 0;
};

/**
 *
 * @param assetsMap
 * @returns
 */
export function computeTotalValue(assetsMap: Map<string, AssetData>): number {
    let sum = 0;
    assetsMap.forEach((value, _) => {
        sum += value.totalValue;
    });
    return sum;
}

/**
 *
 * @param assetsMap
 * @returns
 */
export function computeTotalProfit(assetsMap: Map<string, AssetData>): number {
    let sum = 0;
    assetsMap.forEach((value, _) => {
        sum += value.totalValue - value.totalInvestment;
    });
    return sum;
}

/**
 *
 * @param assetsMap
 * @returns
 */
export function computeTotalRoi(assetsMap: Map<string, AssetData>): number {
    let totalInvestment = 0;
    let totalValue = 0;
    assetsMap.forEach((value, _) => {
        totalInvestment += value.totalInvestment;
        totalValue += value.totalValue;
    });
    const totalRoi = computeRoi(totalInvestment, totalValue);
    return totalRoi;
}

/**
 * 
 * @param assetsMap 
 * @param key 
 * @param numOfAssets
 * @param ascending
 * @returns 
 */
export function sortAssets(assetsMap: Map<string, AssetData>, key: string, numOfAssets: number, ascending = false): Array<AssetData> {
    // To array of AssetData
    const values: Array<AssetData> = Array.from(assetsMap.values());
    // Sort by key in AssetData
    values.sort((a: AssetData, b: AssetData) => {
        return a[key] - b[key];
    });

    if (!ascending) {
        values.reverse()
    }

    return values.slice(0, numOfAssets);
}
