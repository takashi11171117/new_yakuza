<template>
  <div class="button" @click="clicked">
    <svg :viewbox="viewbox" :width="size" :height="size">
      <line
        x1="0"
        :y1="line1Y1"
        :x2="size"
        :y2="topLimit"
        :stroke="stroke"
        :stroke-width="strokeWidth"
      />
      <line
        :x1="line2X1"
        :y1="halfSize"
        :x2="size"
        :y2="halfSize"
        :stroke="stroke"
        :stroke-width="strokeWidth"
      />
      <line
        x1="0"
        :y1="line3Y1"
        :x2="size"
        :y2="bottomLimit"
        :stroke="stroke"
        :stroke-width="strokeWidth"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { TweenLite, Expo } from 'gsap'
import { UIStore } from '~/store'

@Component({})
export default class SlideMenu extends Vue {
  @Prop({ default: 80 })
  size!: number

  @Prop({ default: 'white' })
  stroke!: string

  @Prop({ default: 2 })
  strokeWidth!: number

  @Prop({ default: 0.4 })
  speed!: number

  private viewbox = `0 0 ${this.size} ${this.size}`
  private halfSize = this.size / 2
  private halfStrokeWidth = this.strokeWidth / 2
  private topLimit = 0 + this.halfStrokeWidth
  private bottomLimit = this.size - this.halfStrokeWidth
  private line1Y1 = this.topLimit
  private line2X1 = 0
  private line3Y1 = this.bottomLimit

  get menuCloseFlg (): boolean {
    return UIStore.getMenuCloseFlg
  }

  @Emit('click-menu-button')
  clickMenuButton () {
  }

  private clicked () {
    this.toggleMenuButton()
    this.clickMenuButton()
  }

  private toggleMenuButton () {
    if (this.menuCloseFlg) {
      TweenLite.to(
        this.$data,
        this.speed,
        {
          line1Y1: this.topLimit,
          line2X1: 0,
          line3Y1: this.bottomLimit,
          ease: Expo.easeIn
        }
      )
      UIStore.updateMenuCloseFlg(!this.menuCloseFlg)
    } else {
      TweenLite.to(
        this.$data,
        this.speed,
        {
          line1Y1: this.bottomLimit,
          line2X1: this.size,
          line3Y1: this.topLimit,
          ease: Expo.easeIn
        }
      )
      UIStore.updateMenuCloseFlg(!this.menuCloseFlg)
    }
  }
}
</script>

<style lang="sass" scoped>
    .button
        display: inline-block
</style>
