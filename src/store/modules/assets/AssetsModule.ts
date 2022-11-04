import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { reactive } from "vue";
import ApiService from "@/services/ApiService";
import { formatDate, getEpochTime, hasAssetQuantity } from "@/store/modules/assets/helpers/helpers";
import type { AssetData } from "@/store/modules/assets/helpers/AssetsData";
import type { GetAssetResponse } from "@/store/modules/assets/helpers/AssetsResponse";


@Module({ namespaced: true })
export default class AuthModule extends VuexModule {
    assetsMap = reactive(new Map<string, AssetData>());

    /**
     * Get Assets
     * @returns Map<string, AssetsData>()
     */
    get getAssetsMap(): Map<string, AssetData> {
        return this.assetsMap;
    }

    @Mutation
    [Mutations.SET_ASSETS](data: Array<GetAssetResponse>) {
        this.assetsMap.clear();
        data.forEach((item: GetAssetResponse) => {
            /**
             * Calc total investment and value if Asset has quantity,
             * e.g., investment * quantity
             */
            const doCalc = hasAssetQuantity(item.assetItem.assetType);
            const totalInvestment = doCalc
                ? Number(item.invested.amount) * Number(item.quantity)
                : Number(item.invested.amount);
            const totalValue = doCalc
                ? Number(item.currentValue.amount) * Number(item.quantity)
                : Number(item.currentValue.amount);
            const assetData: AssetData = {
                id: item.assetId,
                image: "media/logos/logo.svg",
                name: item.assetItem.name,
                type: item.assetItem.assetType,
                addMethod: item.source.addMethod,
                origin: item.source.name,
                investment: Number(item.invested.amount),
                value: Number(item.currentValue.amount),
                totalInvestment: totalInvestment,
                totalValue: totalValue,
                roi: Number(item.roi),
                lastUpdated: formatDate(item.lastUpdated),
                epochTime: getEpochTime(item.lastUpdated),
                quantity: Number(item.quantity),
            };
            if (!this.assetsMap.has(item.assetId)) {
                this.assetsMap.set(item.assetId, assetData);
            }
        });
    }

    @Action
    [Actions._GET_ASSETS](forceFetch: boolean = false) {
        const doNotFetch: boolean = forceFetch ? false : this.assetsMap.size > 0;
        if (doNotFetch) {
            return;
        }
        if (ApiService.setHeader()) {
            ApiService.get("/assets")
                .then(({ data }) => {
                    this.context.commit(Mutations.SET_ASSETS, data);
                })
                .catch((error) => {
                    // TODO: handle error
                    console.log(error);
                });
        } else {
            // TODO: handle error
            console.log("No token when trying to get Assets.");
        }
    }
}
