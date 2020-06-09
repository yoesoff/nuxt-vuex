import Vue from 'vue'

export default {
    addTodo(state, payload) {
        state.todos.push(payload)
        console.log("Ädded", payload);
    },

    removeTodo(state, index) {
        Vue.delete(state.todos, index)
        console.log("Deleted", index);
    }
}