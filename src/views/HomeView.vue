<template>
  <div class="home">
    <HelloWorld msg="To Do List" />
    <TodoFilter :filter="filter" @changeFilter="updateFilter" />
    <TodoInput />
    <TodoList :todos="filteredTodos" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoList from "@/components/TodoList.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "Component",
  components: {
    HelloWorld,
    TodoInput,
    TodoFilter,
    TodoList,
  },
  setup() {
    const store = useStore();
    const filter = computed(() => store.state.filter);
    const filteredTodos = computed(() => store.getters.filteredTodos);

    function updateFilter(newFilter) {
      store.dispatch('updateFilter', newFilter);
    }

    return { filter, filteredTodos, updateFilter };
  }
};
</script>
