/**
 * GET '/assets' response
 */
export interface GetAssetResponse {
    assetId: string;
    assetItem: {
        assetType: string;
        name: string;
        valueId: string;
    };
    currentValue: {
        amount: string;
        currencySymbol: string;
    };
    invested: {
        amount: string;
        currencySymbol: string;
    };
    roi: number;
    source: {
        addMethod: string;
        name: string;
    };
    lastUpdated: string;
    quantity: number;
}

/**
 * GET '/assets/types' response
 */
export interface GetAssetTypesResponse {
    types: Map<string, string>;
} 
