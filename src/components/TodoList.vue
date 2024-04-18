<template>
  <div class="list">
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <span>{{ todo.text }}</span>
        <div class="event">
          <button @click="editTodo(todo)">編輯</button>
          <button @click="toggleTodoStatus(todo)"
            :class="{ 'cancel-button': todo.completed,'completed-button':  !todo.completed && filter !== 'incomplete' }">
            {{ todo.completed && filter !== 'incomplete' ? '取消' : '完成' }}
          </button>
          <button @click="deleteTodo(todo)">刪除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    filteredTodos() {
      if (this.$store.state.filter === "completed") {
        return this.$store.state.todos.filter((todo) => todo.completed);
      } else if (this.$store.state.filter === "incomplete") {
        return this.$store.state.todos.filter((todo) => !todo.completed);
      } else {
        return this.$store.state.todos;
      }
    },
  },
  methods: {
    editTodo(todo) {
      const editedText = prompt("請輸入新的代辦事項：", todo.text);
      if (editedText !== null) {
        this.$store.commit("editTodo", { ...todo, text: editedText });
      }
    },
    toggleTodoStatus(todo) {
      this.$store.commit("toggleTodoStatus", todo.id);
    },
    deleteTodo(todo) {
      this.$store.commit("deleteTodo", todo.id);
    },
  },
};
</script>
<style scoped>
.list {
  width: 450px;
  margin: auto;
}
li {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5px 0px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  background-color: rgb(178, 255, 229);
  border-radius: 10px;
}
.event {
  display: flex;
  flex-direction: row;
}
button {
  margin: 0px 5px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.event button:first-child {
  background-color: rgba(255, 248, 155, 0.911);
}

.completed-button {
  background-color: rgba(61, 248, 61, 0.884);
}

.cancel-button{
  background-color:rgba(156, 156, 156, 0.811);
}

.event button:nth-child(3) {
  background-color: rgb(255, 80, 49);
}
</style>
