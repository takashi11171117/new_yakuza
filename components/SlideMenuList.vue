<template>
  <transition
    appear
    name="fade"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
  >
    <div ref="container" class="container" :style="customStyle">
      <div ref="bar" class="bar">
        <p v-for="(menu, index) in menus" ref="menuitem" :key="index" class="menu-item">
          {{ menu }}
        </p>
      </div>
      <div ref="bar" class="bar">
        <p v-for="(menu, index) in menus" ref="menuitem" :key="index" class="menu-item">
          {{ menu }}
        </p>
      </div>
      <div ref="bar" class="bar">
        <p v-for="(menu, index) in menus" ref="menuitem" :key="index" class="menu-item">
          {{ menu }}
        </p>
      </div>
      <div ref="bar" class="bar">
        <p v-for="(menu, index) in menus" ref="menuitem" :key="index" class="menu-item">
          {{ menu }}
        </p>
      </div>
      <div ref="bar" class="bar">
        <p v-for="(menu, index) in menus" ref="menuitem" :key="index" class="menu-item">
          {{ menu }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Expo, TimelineMax } from 'gsap'
import { UIStore } from '~/store'

@Component({})
export default class SlideMenuList extends Vue {
    private customStyle: Object = {
      marginTop: 0
    }
    private scrollFlg = 0
    private heightBar = 0
    private mt = 0
    private menus = ['Schedule', 'Contact', 'Movie', 'Sound']

    get menuScrollY (): number {
      return UIStore.getMenuScrollY
    }

    get menuDirection (): number {
      return UIStore.getMenuDirection
    }

    mounted () {
      this.matchHeight()
    }

    private afterEnter () {
      this.startMenu()
    }

    private startMenu () {
      const menuitem: any = this.$refs.menuitem
      const timeline = new TimelineMax({ paused: true })
      let delay = 0.1
      menuitem.forEach((item: any) => {
        timeline.fromTo(item, 0.8, { x: 300, alpha: 0 }, { x: 0, alpha: 0.6, ease: Expo.easeOut }, delay)
        delay += 0.05
      })
      timeline.play()
    }

    private matchHeight () {
      const containerRef: any = this.$refs.container
      const height = containerRef.clientHeight
      const barRef: any = this.$refs.bar
      this.heightBar = barRef.clientHeight
      this.mt = -height / 2
      this.customStyle = {
        marginTop: this.mt + 'px'
      }
    }

    @Watch('menuScrollY', { immediate: true, deep: true })
    getMenuScrollY (val: string) {
      const scrollAmount = Math.abs(parseInt(val))
      const perAmount = scrollAmount % this.heightBar
      const threshold = 30
      const minLimit = threshold
      const maxLimit = this.heightBar - threshold
      if (perAmount < minLimit || perAmount > maxLimit) {
        if (this.scrollFlg === 0) {
          if (this.menuDirection === 0) {
            this.mt += this.heightBar
            this.customStyle = {
              marginTop: this.mt + 'px'
            }
          } else {
            this.mt -= this.heightBar
            this.customStyle = {
              marginTop: this.mt + 'px'
            }
          }
        }
        this.scrollFlg = 1
      } else if (perAmount >= minLimit || perAmount <= maxLimit) {
        this.scrollFlg = 0
      }
    }

    private endMenu () {
      const menuitem: any = this.$refs.menuitem
      const timeline = new TimelineMax({ paused: true })
      let delay = 0
      menuitem.forEach((item: any) => {
        timeline.fromTo(item, 1, { y: 0, alpha: 0.6 }, { y: -600, alpha: 0.6, ease: Expo.easeOut }, delay)
        delay += 0.05
      })
      timeline.play()
    }

    private beforeLeave () {
      this.endMenu()
    }

    beforeDestroy () {
      this.endMenu()
      UIStore.resetMenuPos()
    }
}
</script>
<style lang="sass" scoped>
.container
    position: absolute
    top: 50%
    right: 20px
.menu-item
    font-size: 9rem
</style>
