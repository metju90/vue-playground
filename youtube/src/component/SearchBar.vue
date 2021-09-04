<template>
  <div>
    <input type="text" @input="onInput" />
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(event) {
      this.$emit("termChange", event.target.value);
    },
  },
};
</script>
<style scoped>
input {
  width: 75%;
  border-color: #fff;
  background-color: #333;
}
div {
  text-align: center;
  margin-top: 25px;
}
</style>
