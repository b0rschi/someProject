import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		todos: [
			{id: 1, title: 'Список из store'}
		]
	},
	getters: {
		TODOS : state => {
			return state.todos;
		}
	},
	mutations: {
		ADD_TODO: (state, payload) =>{
			state.todos.push(payload)
		}
	},
	actions: {
		SAVE_TODO: async(context, payload) =>{
			context.commit('ADD_TODO', payload)
		}
	}
})