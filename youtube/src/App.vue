<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row video-wrapper">
      <VideoDetail :video="selectedVideo" />
      <VideoList @videoSelect="onVideoSelect" :videos="videos" />
    </div>
  </div>
</template>

<script>
import SearchBar from "./component/SearchBar.vue";
import VideoList from "./component/VideoList.vue";
import VideoDetail from "./component/VideoDetail.vue";
const API_KEY = "AIzaSyDw2bSs-zJrG-_tEud2pYxINZ2acm6ufys";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";
export default {
  name: "App",
  components: { SearchBar, VideoList, VideoDetail },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    onVideoSelect(video) {
      console.log("aaaa", video);
      this.selectedVideo = video;
    },
    async onTermChange(searchTerm) {
      const params = `key=${API_KEY}&type=video&part=snippet&q=${searchTerm}`;
      const apiResponse = await fetch(`${BASE_URL}?${params}`);
      const responseData = await apiResponse.json();
      this.videos = responseData.items;
    },
  },
};
</script>
<style>
body {
  background-color: #333;
  color: #fff;
}

.video-wrapper {
  margin-top: 20px;
}
</style>
