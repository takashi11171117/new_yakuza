<template>
  <div :style="customStyle" class="menu">
    <SlideMenuList :direction="direction" :scroll-y="scrollY">
      <p class="menu-item">
        Schedule
      </p>
      <p class="menu-item">
        Contact
      </p>
      <p class="menu-item">
        Movie
      </p>
      <p class="menu-item">
        Sound
      </p>
    </SlideMenuList>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import SlideMenuList from '@/components/SlideMenuList.vue'

@Component({
  components: {
    SlideMenuList
  }
})
export default class SlideMenu extends Vue {
    @Prop()
    public scrollY = 0

    @Prop()
    public direction = 0

    private customStyle: Object = {
      transform: `translateY(${this.scrollY}px)`
    }

    @Watch('scrollY', { immediate: true, deep: true })
    getScrollY (val: number) {
      this.customStyle = {
        transform: `translateY(${val}px)`
      }
    }
}
</script>

<style scoped lang="sass">
.menu-item
    font-size: 9rem
</style>
