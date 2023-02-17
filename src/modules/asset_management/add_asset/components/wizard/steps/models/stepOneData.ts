export interface StepOneData {
    assetType: string;
}

export function emptyStepOneData(): StepOneData {
    return {
        assetType: "",
    }
}