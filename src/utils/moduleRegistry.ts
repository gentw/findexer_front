import router from "@/router";
import store from "@/store";

export const registerModules = modules => {
    Object.entries(modules).forEach(
        ([path, module]) => _registerModule(path, module)
    );
};

const _registerModule = (path: string, module) => {
    if (module.store) {
        store.registerModule(path, module.store);
    }
    if (module.router) {
        const parentRoute = router.options.routes[0].name?.toString()
        if (parentRoute) {
            router.addRoute(parentRoute, module.router);
        }
        else {
            //TODO: Handle case?
        }
    }
};
