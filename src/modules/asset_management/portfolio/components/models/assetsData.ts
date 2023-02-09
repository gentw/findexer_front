interface assetsData {
    id: number;
    asset: {
        logo: string;
        name: string;
        type: string;
    }
    maintained: string;    
    holdings: string;
    total_roi: {
        type: string;
        percentage: string;
        price: string;
    };
    last_updated: string;
}


export { assetsData };