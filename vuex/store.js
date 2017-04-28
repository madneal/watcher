import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {}
}

const mutations = {

}

export defualt new Vuex.Store({
    state,
    mutations
})