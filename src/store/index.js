import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, text: "運動", completed: false },
      { id: 2, text: "作業", completed: true },
    ],
    filter: "all",
  },
  mutations: {
    setVisibilityFilter(state, newFilter) {
      state.filter = newFilter;
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    editTodo(state, editedTodo) {
      const index = state.todos.findIndex((todo) => todo.id === editedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, editedTodo);
      }
    },
    toggleTodoStatus(state, todoId) {
      const todo = state.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
  actions: {
    updateFilter({ commit }, newFilter) {
      commit("setVisibilityFilter", newFilter);
    },
    addTodoAsync({ commit }, newTodo) {
      setTimeout(() => {
        commit("addTodo", newTodo);
      }, 500);
    },
    editTodo({ commit }, editedTodo) {
      commit("editTodo", editedTodo);
    },
    toggleTodoStatus({ commit }, todoId) {
      commit("toggleTodoStatus", todoId);
    },
    deleteTodo({ commit }, todoId) {
      commit("deleteTodo", todoId);
    },
  },
  getters: {
    filteredTodos(state) {
      if (state.filter === "completed") {
        return state.todos.filter((todo) => todo.completed);
      } else if (state.filter === "incomplete") {
        return state.todos.filter((todo) => !todo.completed);
      } else {
        return state.todos;
      }
    },
  },
});
