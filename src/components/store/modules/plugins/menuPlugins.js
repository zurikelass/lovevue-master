import navigationModule from '../navigationModules/index'
export default function menuPlugin(store) {
    store.registerModule('navigationModule', navigationModule)
}
