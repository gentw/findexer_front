/**
* POST '/assets' request
*/
export interface AddAssetRequest {
    itemName: string;
    itemType: string;
    initialValue: number;
    currentValue: number;
    quantity: number;
}

/**
* PUT '/assets' request
*/
export interface EditAssetRequest {
    itemName: string;
    itemType: string;
    initialValue: number;
    currentValue: number;
    quantity: number;
}
