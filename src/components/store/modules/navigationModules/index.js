const navigationModule ={
    state(){
        return {
            menu : [
                { routeName: 'Home', title: 'Main Page' },
                { routeName: 'About', title: 'About Us' },
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