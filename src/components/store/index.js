import { createStore } from "vuex";
import navigationModule from './modules/navigationModules/index.js'
import menuPlugin from "./modules/plugins/menuPlugins.js";
const store = createStore({
    modules: [productsModule],
    plugins: [menuPlugin]
})
export default store