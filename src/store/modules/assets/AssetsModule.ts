import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { reactive } from "vue";
import ApiService from "@/services/ApiService";
import { formatDate, getEpochTime, hasAssetQuantity } from "@/store/modules/assets/helpers/helpers";
import type { AssetData, EditAssetData } from "@/store/modules/assets/helpers/AssetsData";
import type { GetAssetResponse, GetAssetTypesResponse } from "@/store/modules/assets/helpers/AssetsResponse";
import { AddAssetRequest } from "@/store/modules/assets/helpers/AssetsRequest";


@Module
export default class AuthModule extends VuexModule {
    assetsMap = reactive(new Map<string, AssetData>());
    assetTypesMap = reactive(new Map<string, string>());

    /**
     * Get Assets
     * @returns Map<string, AssetsData>()
     */
    get getAssetsMap(): Map<string, AssetData> {
        return this.assetsMap;
    }

    /**
     * Get Asset types
     * @returns Map<string, string>()
     */
    get getAssetTypesMap(): Map<string, string> {
        return this.assetTypesMap;
    }

    @Mutation
    [Mutations.DELETE_ASSET_ITEM](assetId: string) {
        if (this.assetsMap.has(assetId)) {
            this.assetsMap.delete(assetId);
        }
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

    @Mutation
    [Mutations.SET_ASSET_TYPES](data: GetAssetTypesResponse) {
        const keys = Object.keys(data.types)
        const values = Object.values(data.types)
        keys.forEach((key, i) => {
            const value = values[i];
            this.assetTypesMap.set(key, value);
        });
    }

    @Action
    [Actions.GET_ASSETS](forceFetch: boolean = false) {
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

    @Action
    [Actions.GET_ASSET_TYPES]() {
        if (this.assetTypesMap.size > 0) {
            return;
        }
        if (ApiService.setHeader()) {
            ApiService.get("/assets/types")
                .then(({ data }) => {
                    this.context.commit(Mutations.SET_ASSET_TYPES, data);
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

    @Action
    async [Actions.DELETE_ASSET](assetId: string): Promise<boolean | undefined> {
        if (ApiService.setHeader()) {
            try {
                const resp = await ApiService.delete("/assets", assetId);
                return resp.status === 204;
            } catch (error) {
                // TODO: handle error
                console.log(error);
            }
        } else {
            // TODO: handle error
            console.log("No token when trying to delete Asset.");
            return false;
        }
    }

    @Action
    async [Actions.EDIT_ASSET](editAssetData: EditAssetData): Promise<boolean | undefined> {
        if (ApiService.setHeader()) {
            const type = this.assetTypesMap.get(editAssetData.type);
            const payload: AddAssetRequest = {
                itemName: editAssetData.name,
                itemType: type ? type : "OTHER",
                initialValue: Number(editAssetData.initialPricePerUnit),
                currentValue: Number(editAssetData.currentPricePerUnit),
                quantity: Number(editAssetData.quantity),
            };
            try {
                const resp = await ApiService.put("/assets", editAssetData.id, payload);
                return resp.status === 200;
            } catch (error) {
                // TODO: handle error
                console.log(error);
            }
        } else {
            // TODO: handle error
            console.log("No token when trying to edit Asset.");
            return false;
        }
    }
}
