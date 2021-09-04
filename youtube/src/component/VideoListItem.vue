<template>
  <li @click="onVideoSelect">
    <img :src="imgUrl" />
    {{ title }}
  </li>
</template>
<script>
export default {
  name: "VideoListItem",
  props: ["video"],
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    },
  },
  computed: {
    imgUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
    title() {
      return this.video.snippet.title;
    },
  },
};
</script>
<style scoped>
li {
  border: 1px solid #fff;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
