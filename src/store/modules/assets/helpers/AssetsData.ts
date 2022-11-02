export interface AssetData {
    id: string;
    image: string;
    name: string;
    type: string;
    addMethod: string;
    origin: string;
    investment: number;
    value: number;
    totalInvestment: number,
    totalValue: number,
    roi: number;
    lastUpdated: string;
    epochTime: number | string,
    quantity: number;
}

export interface TopAssetData {
    name: string;
    image: string;
    totalValue: number;
    roi: number;
}

export function emptyTopAssetData(): TopAssetData {
    return {
        name: "",
        image: "",
        totalValue: 0,
        roi: 0
    }
}
