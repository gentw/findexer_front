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

export interface EditAssetData {
    id: string;
    type: string;
    name: string;
    initialPricePerUnit: number;
    currentPricePerUnit: number;
    quantity: number;
}

export function emptyEditAssetData(): EditAssetData {
    return {
        id: "",
        type: "",
        name: "",
        initialPricePerUnit: 0,
        currentPricePerUnit: 0,
        quantity: 0,
    };
}
