<template>
  <div @click="clickMenuButton">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TweenLite, Expo } from 'gsap'

@Component({})
export default class SlideMenu extends Vue {
  @Prop()
  public size = 80

  @Prop()
  public stroke = 'white'

  @Prop()
  public strokeWidth = 2

  @Prop()
  public speed = 0.4

  private viewbox = `0 0 ${this.size} ${this.size}`
  private topLimit = 0 + this.halfStrokeWidth
  private bottomLimit = this.size - this.halfStrokeWidth
  private line1Y1 = this.topLimit
  private line2X1 = 0
  private line3Y1 = this.bottomLimit
  private closeFlg = false

  private get halfSize (): number {
    return this.size / 2
  }

  private get halfStrokeWidth (): number {
    return this.strokeWidth / 2
  }

  private clickMenuButton () {
    this.$emit('clickMenuButton', this.closeFlg)
    this.toggleMenuButton()
  }

  private toggleMenuButton () {
    // eslint-disable-next-line no-console
    console.log(this.$data)
    if (this.closeFlg) {
      TweenLite.to(
        this.$data,
        this.speed,
        {
          line1Y1: this.topLimit,
          line2X1: 0,
          line3Y1: this.bottomLimit,
          closeFlg: false,
          ease: Expo.easeIn
        }
      )
    } else {
      TweenLite.to(
        this.$data,
        this.speed,
        {
          line1Y1: this.bottomLimit,
          line2X1: this.size,
          line3Y1: this.topLimit,
          closeFlg: true,
          ease: Expo.easeIn
        }
      )
    }
  }
}
</script>
