const productsModule = {
  state() {
    return {
      products: {
        title: "WatchList",
        action: true,
        data: [
          { id: 1, name: "კაცები", description: "კაცები რომში" },
          { id: 2, name: "Product 2", price: 100 },
          { id: 3, name: "Product 3", price: 100 },
          { id: 4, name: "Product 4", price: 100 },
        ],
      },
      cart: {
        title: "WishList",
        action: false,
        data: [],
      },
    };
  },
  getters: {
    getProductsListTitle(state) {
      return state.products.title;
    },
    getCartTitle(state) {
      return state.cart.title;
    },
    getProducts(state) {
      return state.products.data;
    },
    getCart(state) {
      return state.cart.data
    }
  },
  mutations: {
    addToWishList(state, payload) {
      const product = state.products.data.find((item) => item.id == payload);
      state.products.data.splice(state.products.data.indexOf(product), 1);
      state.cart.data.push(product);
    },
    removeFromWishList(state, payload) {
      const product = state.cart.data.find((item) => item.id == payload);
      state.cart.data.splice(state.cart.data.indexOf(product), 1);
      state.products.data.push(product);
    },

    search(state, payload) {
      state.products.data = state.products.data.filter(item => item.name.toLowerCase().includes(payload))
      console.log(state.products)
    }
  },
};
export default productsModule;
