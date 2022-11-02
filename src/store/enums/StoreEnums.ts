enum Actions {
  // action types
  ADD_BODY_CLASSNAME = "addBodyClassName",
  REMOVE_BODY_CLASSNAME = "removeBodyClassName",
  ADD_BODY_ATTRIBUTE = "addBodyAttribute",
  REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  ADD_CLASSNAME = "addClassName",
  SET_BREADCRUMB_ACTION = "setBreadcrumbAction",
  SET_THEME_MODE_ACTION = "setThemeModeAction",

  GET_ASSETS = "getAssets",
  GET_ASSET_TYPES = "getAssetTypes",
}

enum Mutations {
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  SET_ERROR = "setError",
  SET_BREADCRUMB_MUTATION = "setBreadcrumbMutation",
  SET_LAYOUT_CONFIG_PROPERTY = "setLayoutConfigProperty",
  RESET_LAYOUT_CONFIG = "resetLayoutConfig",
  OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
  OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig",
  SET_THEME_MODE_MUTATION = "setThemeModeMutation",

  SET_ASSETS = "setAssets",
  SET_ASSET_TYPES = "setAssetTypes",
}

export { Actions, Mutations };
