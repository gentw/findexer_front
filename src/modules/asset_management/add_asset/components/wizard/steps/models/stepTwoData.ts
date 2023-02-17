export interface StepTwoData {
    company_name: string;
    current_share_price: string;
}
 
export function emptyStepTwoData(): StepTwoData {
    return {
        company_name: "",
        current_share_price: ""
    }
}