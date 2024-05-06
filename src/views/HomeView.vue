<template>
  <div class="home">
    <HelloWorld msg="To Do List" />
    <TodoFilter />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Component",
  components: {
    HelloWorld,
    TodoInput,
    TodoFilter,
    TodoList,
  },
};
</script>
