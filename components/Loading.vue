<template lang="html">
  <div v-if="loading" id="loading-screen">
    <div id="noize-wave-container">
      <p id="loading-text">
        Loading
      </p>
      <div id="noize-wave" />
    </div>
    <div id="load-layer1" />
    <div id="load-layer2" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TweenMax, Expo } from 'gsap'
import P5 from 'p5'
import noisewave from '@/sketches/noisewave'

@Component({})
export default class Loading extends Vue {
  loading = false
  loadingCanvas: HTMLElement|null = null

  mounted () {
    // eslint-disable-next-line
    const myp5 = new P5(noisewave, 'noize-wave')
  }

  start () {
    this.loading = true

    const allCanvas = document.querySelectorAll('canvas')
    allCanvas.forEach((canvas) => {
      if (canvas.parentNode !== null) {
        canvas.parentNode.removeChild(canvas)
      }
    })

    // eslint-disable-next-line
    const myp5 = new P5(noisewave, 'noize-wave')

    this.loadingCanvas = document.getElementById('defaultCanvas0')
    if (this.loadingCanvas !== null) {
      TweenMax.fromTo('#load-layer1', 1, {
        marginLeft: `-${window.innerWidth}px`
      }, {
        marginLeft: '0px',
        ease: Expo.easeOut
      })
      TweenMax.fromTo('#load-layer2', 1.4, {
        marginLeft: `-${window.innerWidth}px`
      }, {
        marginLeft: '0px',
        ease: Expo.easeOut
      })
      TweenMax.fromTo('#noize-wave-container', 1.6, {
        marginLeft: `-${window.innerWidth}px`
      }, {
        marginLeft: '0px',
        ease: Expo.easeOut
      })
      TweenMax.fromTo(this.loadingCanvas, 1, {
        marginLeft: `-${window.innerWidth}px`
      }, {
        marginLeft: '0px',
        ease: Expo.easeOut
      })
    }
  }

  async finish () {
    await this.$delay(800)
    if (this.loadingCanvas !== null) {
      TweenMax.to(this.loadingCanvas, 1, {
        marginLeft: `${window.innerWidth}px`,
        ease: Expo.easeOut
      })
      TweenMax.to('#noize-wave-container', 1, {
        marginLeft: `${window.innerWidth}px`,
        ease: Expo.easeOut
      })
      TweenMax.to('#load-layer1', 1.4, {
        marginLeft: `${window.innerWidth}px`,
        ease: Expo.easeOut
      })
      TweenMax.to('#load-layer2', 2.2, {
        marginLeft: `${window.innerWidth}px`,
        ease: Expo.easeOut,
        onComplete: () => {
          if (this.loadingCanvas !== null) {
            if (this.loadingCanvas.parentNode !== null) {
              this.loadingCanvas.parentNode.removeChild(this.loadingCanvas)
              this.loading = false
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="sass">
#noize-wave-container
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    display: flex
    justify-content: center
    align-items: center
#loading-text
    color: black
    font-size: 1.5rem
    position: absolute
    z-index: 4001
    display: inline-block
#loading-screen
    position: relative
    z-index: 3000
#load-layer1
    width: 100vw
    height: 100vh
    position: fixed
    z-index: 3002
    top: 0
    background: #eee
    opacity: 0.1
#load-layer2
    width: 100vw
    height: 100vh
    position: fixed
    z-index: 3001
    top: 0
    background: #ddd
    opacity: 0.1
</style>
