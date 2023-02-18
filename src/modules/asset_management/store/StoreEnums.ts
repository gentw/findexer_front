enum Actions {
  GET_ASSETS = "asset_management/getAssets",
  _GET_ASSETS = "getAssets",
  GET_ASSET_BY_ID = "getAssetById",
}

enum Mutations {
  SET_ASSETS = "setAssets",
  UPDATE_FORM_DATA_STEP1 = "updateFormDataStep1",
  UPDATE_FORM_DATA_STEP2 = "updateFormDataStep2",
}

enum Getters {
  GET_ASSETS = "asset_management/getAssetsMap",
}

export { Actions, Mutations, Getters };
