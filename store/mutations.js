import Vue from 'vue'
import * as firebase from 'firebase';
export default {
    addTodo(state, todo) {
        state.todos.push(todo)
    },
    setTodos(state, todos) {
        todos.forEach(todo => {
            state.todos.push(todo)
        });
    },
    removeTodo(state, index) {
        Vue.delete(state.todos, index)
    }
}