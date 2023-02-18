export interface StepThreeData {
    assetEvents: {
      event_type: string;
      no_shares: number;
      share_buy_price: number;
      buy_date: string;
      pub_date: string;
      currency: string;
    }[];
}