const navigationModule ={
    state(){
        return {
            menu : [
                { routeName: 'watchlist', title: 'Watchlist' },
                { routeName: 'wishlist', title: 'Wishlist' },
                { routeName: 'currencies', title: 'Currencies' },
                { routeName: 'slider', title: 'Slider' },
            ]
        }
    },
    getters:{
        navigationMenu(state){
          return state.menu
        }
      },
}
export default navigationModule