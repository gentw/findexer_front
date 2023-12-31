import { Actions, Mutations } from "@/modules/asset_management/store/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { reactive, ref } from "vue";
import ApiService from "@/services/ApiService";
import { formatDate, getEpochTime, hasAssetQuantity } from "@/modules/asset_management/store/helpers";
import type { AssetData } from "@/modules/asset_management/store/models/assetsData";
import type { GetAssetResponse } from "@/modules/asset_management/store/models/assetsResponse";

import assets from "@/modules/asset_management/portfolio/components/models/assetsData";
import { AssetResponse } from "@/modules/asset_management/add_asset/components/wizard/steps/models/assetResponse";


import { StepOneData } from "@/modules/asset_management/add_asset/components/wizard/steps/models/stepOneData";
import { StepTwoData } from "@/modules/asset_management/add_asset/components/wizard/steps/models/stepTwoData";


@Module({ namespaced: true })
export default class AssetsModule extends VuexModule {

    asset_id = ref<null>();

    formDataStep1 = ref<StepOneData>({
        assetType: "",
    });


    formDataStep2 = ref<StepTwoData>({
        company_name: "",
        current_share_price: ""
    });

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

    @Mutation
    [Mutations.UPDATE_FORM_DATA_STEP1](payload) {
        this.formDataStep1 = payload
    }


    @Mutation
    [Mutations.UPDATE_FORM_DATA_STEP2](payload) {
        this.formDataStep2 = payload
    }

    @Action
    [Actions._GET_ASSETS](forceFetch = false) {
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
     [Actions.GET_ASSET_BY_ID](id: Number) {
        let assetToFind = {};
        for(let i=0; i<=assets.length; i++) {
            if(assets[i].id == id) {
                assetToFind = assets[i];
                break;
            }
        }

        if(assetToFind){
            const data = assetToFind;
            return data;
        } else {
            console.log(`Object with id ${id} not found.`);
        }
    }
}
