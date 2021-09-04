<template>
  <ul class="list-group col-md-4">
    <VideoListItem
      v-for="video in videos"
      :video="video"
      :key="video.id.videoId"
      @videoSelect="onVideoSelect"
    ></VideoListItem>
  </ul>
</template>
<script>
import VideoListItem from "./VideoListItem.vue";
export default {
  name: "VideoLIST",
  props: ["videos"],
  components: { VideoListItem },
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    },
  },
};
</script>
<style>
ul {
  list-style-type: none;
}
</style>
