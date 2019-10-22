<template>
  <div>
    <div v-if="!isLodingfinish" id="loading-screen">
      <div id="noize-wave-container">
        <p id="loading-text">Loading</p>
        <div id="noize-wave" />
      </div>
      <div id="load-layer1" />
      <div id="load-layer2" />
    </div>
    <div v-if="isMounting" class="box">
      <Menu />
      <HeaderBar />
      <Modal />
      <main>
        <Mouse />
        <Tile />
        <Video />
        <div class="main-logo">
          <img src="../assets/logo.svg" alt="ニューヤクザ">
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import P5 from 'p5'
import { TweenMax, Expo } from 'gsap'
import Modal from '@/components/Modal.vue'
import Menu from '@/components/Menu.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import Video from '@/components/Video.vue'
import Footer from '@/components/Footer.vue'
import Tile from '@/components/Tile.vue'
import Mouse from '@/components/Mouse.vue'
import { LoadingStore } from '@/store'

let yoff = 0.0
const sketch = function (p: P5) {
  const drawVertex = () => {
    p.push()
    p.background(255)
    p.fill(255)
    p.beginShape()
    const halfHeight = p.windowHeight / 2
    let xoff = 0
    for (let x = 0; x <= p.windowWidth + 10; x += 10) {
      const y = p.map(p.noise(xoff, yoff), 0, 1, halfHeight + 150, halfHeight + 50)
      p.vertex(x, y)
      xoff += 0.05
    }
    p.vertex(p.windowWidth, halfHeight + p.random(98, 102))
    p.vertex(p.windowWidth, p.windowHeight)
    yoff += 0.01
    p.vertex(p.windowWidth, p.windowHeight)
    p.vertex(0, p.windowHeight)
    p.endShape(p.CLOSE)
    p.pop()
    p.push()
    p.fill(255)
    p.beginShape()
    for (let x = 0; x <= p.windowWidth; x += 10) {
      const y = p.map(p.noise(xoff, yoff), 0, 1, halfHeight + 150, halfHeight + 50)
      p.vertex(x, y)
      xoff += 0.05
    }
    p.vertex(p.windowWidth, halfHeight + p.random(96, 100))
    yoff += 0.01
    p.vertex(p.windowWidth, p.windowHeight)
    p.vertex(0, p.windowHeight)
    p.endShape(p.CLOSE)
    p.pop()
  }
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }
  p.draw = () => {
    p.clear()
    drawVertex()
  }
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    drawVertex()
  }
}

@Component({
  components: {
    Modal,
    Menu,
    HeaderBar,
    Video,
    Footer,
    Tile,
    Mouse
  }
})
export default class Index extends Vue {
  isMounting = false
  isLodingfinish = false

  get isLoading (): boolean {
    return LoadingStore.isLoading
  }

  mounted () {
    // eslint-disable-next-line
    const myp5 = new P5(sketch, 'noize-wave')
    window.addEventListener('load', async () => {
      await this.$delay(2000)
      LoadingStore.endLoding()
    })
  }

  @Watch('isLoading', { immediate: true, deep: true })
  isWatchLoading (next: boolean, prev: boolean) {
    if (!next && prev) {
      const canvas = document.querySelector('canvas')
      if (canvas !== null) {
        setTimeout(() => { this.isMounting = true }, 150)
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
            const canvas = document.querySelector('canvas')
            if (canvas !== null) {
              if (canvas.parentNode !== null) {
                canvas.parentNode.removeChild(canvas)
                this.isLodingfinish = true
              }
            }
          }
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.box
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
#noize-wave-container
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
#loading-text
    color: black
    font-size: 3rem
    position: absolute
    top: 20px
    z-index: 4001
    left: 0;
    right: 0;
    margin: auto;
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
.main-logo
    position: fixed
    z-index: 3000
    top: calc(50% - 200px)
    left: calc(50% - 130px)
    img
        height: 400px
#loading-screen
    position: relative
    z-index: 3000
#noize-wave
    position: relative
    z-index: 3004
</style>
