import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import bed_sizes from './categories/krov/bed_sizes'
import sofa_sizes from './categories/sofas/sofa_sizes'

//подсчитывает стоимость кровати
import totalPriceBED from './functions/totalPriceBED'
import bed_sizes_categories from './categories/krov/bed_sizes_categories'

//подсчитывает стоимость диванов
import totalPriceSOFA from './functions/totalPriceSofa'
import sofas_sizes_categories from './categories/sofas/sofa_sizes_categories'



let store = new Vuex.Store({
    state: {
        sprecialists: [],
        beds: [],
        materials: [],
        bed_sizes,
        sofa_sizes,
        global_width: 1200,
        global_length: 1400,
        mehanizmSum: 7000,
        bed_other_expenses: 2500,
        div_other_expenses: 100,
        active_data: {},
        bed_sizes_categories,
        sofas_sizes_categories
    },
    mutations: {
        GET_SPECIALISTS_FROM_GITHUB(state, data){
            state.sprecialists = data
        },
        GET_BEDS_FROM_GITHUB(state, data){
            state.beds = data
        },
        GET_MATERIALS_FROM_GITHUB(state, data){
            state.materials = data
        },
        UPDATE_ACTIVE_DATA(state, data){
            state.active_data = data
        },
        UPDATE_GLOBAL_WIDTH(state, width){
            state.global_width = width
        },
        UPDATE_GLOBAL_LENGTH(state, length){
            state.global_length = length
        }
    },
    actions: {
        GET_SPECIALISTS_FROM_GITHUB({commit}){
            return fetch('https://raw.githubusercontent.com/ArtemRostomyan/specialists/main/specialists.js')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                commit('GET_SPECIALISTS_FROM_GITHUB', data)
            })
        },
        GET_BEDS_FROM_GITHUB({commit}){
            return fetch('https://raw.githubusercontent.com/ArtemRostomyan/beds/main/beds.js')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                commit('GET_BEDS_FROM_GITHUB', data)
            })
        },
        GET_MATERIALS_FROM_GITHUB({commit}){
            return fetch('https://raw.githubusercontent.com/ArtemRostomyan/materials/main/materials.js')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                commit('GET_MATERIALS_FROM_GITHUB', data)
            })
        },
        UPDATE_ACTIVE_DATA({commit}, data){
            commit('UPDATE_ACTIVE_DATA', data)
        },
        UPDATE_GLOBAL_WIDTH({commit}, width){
            commit('UPDATE_GLOBAL_WIDTH', width)
        },
        UPDATE_GLOBAL_LENGTH({commit}, length){
            commit('UPDATE_GLOBAL_LENGTH', length)
        }
    },
    getters: {
        BEDS(states){
            return states.beds
        },
        BED_SIZES(states){
            return states.bed_sizes
        },
        SOFA_SIZES(states){
            return  states.sofa_sizes
        },
        ACTIVE_DATA(states){
            if(states.active_data){
                return states.active_data
            }
        },
        REAL_DATA(states){
            return states.data_real
        },
        GET_STATE(states){
            return states
        },
        GET_TOTAL_PRICE(states){
            if(states.active_data.type == "bed"){
                return totalPriceBED(states.active_data, states)
                
            } else if(states.active_data.type == "sofa"){
                return totalPriceSOFA(states.active_data, states)
            } else{
                return {}
            }
        }
    }
 });
 
 export default store;