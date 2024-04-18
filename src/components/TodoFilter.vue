<template>
  <div class="filter">
    <div class="filter-item" @click="setVisibilityFilter('all')">全部</div>
    <div class="filter-item" @click="setVisibilityFilter('completed')">完成</div>
    <div class="filter-item" @click="setVisibilityFilter('incomplete')">未完成</div>
  </div>
</template>

<script>
export default {
  methods: {
    setVisibilityFilter(filter) {
      this.$store.commit('setVisibilityFilter', filter);
    }
  }
};
</script>
<style scoped>
.filter {
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 15px auto;
}
.filter-item {
  width: 100px;
  background: #2c5fbd;
  color: #fff;
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
}
.filter-item:hover {
  background: #244d9a;
 
}
</style>
