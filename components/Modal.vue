<template>
  <transition name="modal">
    <div v-if="menuCloseFlg" class="modal">
      <div @wheel="zoom">
        <SlideMenu />
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlideMenu from '@/components/SlideMenu.vue'
import { UIStore } from '~/store'

@Component({
  components: {
    SlideMenu
  }
})
export default class Modal extends Vue {
  get menuCloseFlg (): boolean {
    return UIStore.getMenuCloseFlg
  }

  private zoom (e: WheelEvent) {
    if (e.deltaY > 0) {
      UIStore.updateMenuDirection(1)
    } else {
      UIStore.updateMenuDirection(0)
    }

    let delta = 0

    if (e.deltaY > 60) {
      delta = 60
    } else if (e.deltaY < -60) {
      delta = -60
    } else {
      delta = e.deltaY
    }

    UIStore.updateMenuScrollY(delta)
  }
}
</script>

<style lang="sass" scoped>
    .modal
        background-color: rgba(0, 0, 0, .4);
        width: 100vw
        height: 100vh
        position: fixed
        top: 0

    .modal-enter-active
        transition: all 700ms

    .modal-leave-active
        transition: all 1500ms

    .modal-enter, .modal-leave-active
        opacity: 0
</style>
