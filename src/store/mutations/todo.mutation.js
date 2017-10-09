export default {
    addTodo(state, { text }) {
        state.todos.push({
            text,
            done: false
        })
    },
    toggleTodo(state, { todo }) {
        todo.done = !todo.done;
    },
    removeTodo(state, { todo }) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    }

}