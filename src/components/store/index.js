import { createStore } from "vuex";
import productsModule from "./modules/productsModule/index";
import menuPlugin from "./modules/plugins/menuPlugins.js";

const store = createStore({
  modules: {
    products: productsModule
  },
  plugins: [menuPlugin]
});

export default store;
