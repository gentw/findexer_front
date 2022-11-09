import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import BodyModule from "@/store/modules/BodyModule";
import ConfigModule from "@/store/modules/ConfigModule";
import ThemeModeModule from "@/store/modules/ThemeModeModule";


config.rawError = true;

const store = createStore({
  modules: {
    BodyModule,
    ConfigModule,
    ThemeModeModule,
  },
});

export default store;
