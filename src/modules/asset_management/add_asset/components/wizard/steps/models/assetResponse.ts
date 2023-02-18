export interface AssetResponse {
    id: number,
    assetType: string;
    company_name: string;
    current_share_price: number;
    
    assetEvents: {
        event_type: string;
        no_shares: number;
        share_buy_price: number;
        buy_date: string;
        pub_date: string;
        currency: string;
    }[];
}