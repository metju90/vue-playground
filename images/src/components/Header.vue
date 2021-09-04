<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="item active">
        Image storage
      </a>
      <div class="right menu">
        <a href="#" class="ui item" @click="login">
          Login
        </a>
      </div>
    </div>
    <div class="ui segment">
      <p></p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>
