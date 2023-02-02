import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'

const storage = createStore({
    state: {
        isAuthenticated: false,
        name: '',
    },
    mutations: {
        setAuthenticated(state, value)
        {
            state.isAuthenticated = value;
        },
        setUserdata(state, name)
        {
            state.name = name;
        },
    },
    plugins: [
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
});

export default storage