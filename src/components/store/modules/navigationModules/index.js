const navigationModule ={
    state(){
        return {
            menu : [
                { routeName: 'watchlist', title: 'Watchlist' },
                { routeName: 'wishlist', title: 'Wishlist' },
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