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
