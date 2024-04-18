<template>
  <div class="add">
    <label for="item-name">項目名稱</label>
    <input type="text" v-model="newTodoText" />
    <button @click="addTodo">新增</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodoText: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() === "") return;
      this.$store.dispatch("addTodoAsync", {
        text: this.newTodoText,
        completed: false,
      });
      this.newTodoText = "";
    },
  },
};
</script>
<style scoped>
.add {
  width: 50%;
  margin: auto;
}
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.add > label {
  font-size: 20px;
  font-weight: 700;
  margin-right: 15px;
  white-space: nowrap;
}
.add > input {
  max-width: 300px;
  height: 36px;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #000;
  font-size: 30px;
}
.add > button {
  padding: 5px 15px;
  border: 0;
  border-radius: 10px;
  background: #22ac2e;
  color: #fff;
  margin-left: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}
.add > button:hover {
  background: #187e21;
}
</style>
