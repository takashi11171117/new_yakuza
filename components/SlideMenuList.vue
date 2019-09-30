<template>
  <div ref="container" class="container" :style="customStyle">
    <div ref="bar" class="bar">
      <slot />
    </div>
    <div ref="bar" class="bar">
      <slot />
    </div>
    <div ref="bar" class="bar">
      <slot />
    </div>
    <div ref="bar" class="bar">
      <slot />
    </div>
    <div ref="bar" class="bar">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UIStore } from '~/store'

@Component({})
export default class SlideMenuList extends Vue {
    private customStyle: Object = {
      marginTop: 0
    }
    private scrollFlg = 0
    private heightBar = 0
    private mt = 0

    get menuScrollY (): number {
      return UIStore.getMenuScrollY
    }

    get menuDirection (): number {
      return UIStore.getMenuDirection
    }

    mounted () {
      this.matchHeight()
    }

    public matchHeight () {
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
}
</script>
<style lang="sass" scoped>
.container
    position: absolute
    top: 50%
    right: 20px
</style>
