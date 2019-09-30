<template>
  <div :style="customStyle" class="menu">
    <SlideMenuList>
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
import { Component, Vue, Watch } from 'vue-property-decorator'
import SlideMenuList from '@/components/SlideMenuList.vue'
import { UIStore } from '~/store'

@Component({
  components: {
    SlideMenuList
  }
})
export default class SlideMenu extends Vue {
  get menuScrollY (): number {
    return UIStore.getMenuScrollY
  }

  get menuDirection (): number {
    return UIStore.getMenuDirection
  }

    private customStyle: Object = {
      transform: `translateY(${this.menuScrollY}px)`
    }

    @Watch('menuScrollY', { immediate: true, deep: true })
    getMenuScrollY (val: number) {
      this.customStyle = {
        transform: `translateY(${val}px)`
      }
    }

    beforeDestroy () {
      /* eslint import/no-mutable-exports: 0 */
      console.log('a')
      UIStore.resetMenuPos()
    }
}
</script>

<style scoped lang="sass">
.menu-item
    font-size: 9rem
</style>
