<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  background: #2c5fbd;
  color: #fff;
  padding: 10px;
  margin-bottom: 15px;
}
</style>
