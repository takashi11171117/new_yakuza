<template>
  <div>
    <div>
      <MenuButton />
    </div>
    <div class="menu box" @wheel="zoom">
      <SlideMenu :scroll-y="scrollY" :direction="direction" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlideMenu from '@/components/SlideMenu.vue'
import MenuButton from '@/components/MenuButton.vue'

@Component({
  components: {
    SlideMenu,
    MenuButton
  }
})
export default class Index extends Vue {
    public scrollY: number = 0;
    public direction: number = 0;

    public zoom (e: WheelEvent) {
      if (e.deltaY > 0) {
        this.direction = 1
      } else {
        this.direction = 0
      }

      let delta = 0

      if (e.deltaY > 60) {
        delta = 60
      } else if (e.deltaY < -60) {
        delta = -60
      } else {
        delta = e.deltaY
      }

      this.scrollY += delta * 0.9
    }
}
</script>

<style lang="sass" scoped>
    .menu-item
        font-size: 100px

    .box
        width: 100vw
        height: 100vh
        position: fixed
        top: 0
</style>
