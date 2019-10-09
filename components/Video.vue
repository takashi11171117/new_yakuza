<template>
  <div class="video-container">
    <video src="../assets/top.mp4" autoplay playsinline muted loop />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Video extends Vue {
}
</script>

<style lang="sass" scoped>
.video-container
  position: relative

video
  min-width: 100%
  min-height: 100vh
  z-index: 1
</style>
