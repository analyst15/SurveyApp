import {createStore} from "vuex";

const store = createStore(options, {
    state: {
        user: {
            date: {name: 'Zura'},
            token: null
        }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {}
})

export default store;