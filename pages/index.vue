<template>
  <div>
    <div id="loading-screen" />
    <div v-show="!isLoading" class="box">
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
import Modal from '@/components/Modal.vue'
import Menu from '@/components/Menu.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import Video from '@/components/Video.vue'
import Footer from '@/components/Footer.vue'
import Tile from '@/components/Tile.vue'
import Mouse from '@/components/Mouse.vue'
import { LoadingStore } from '@/store'

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
  get isLoading (): boolean {
    return LoadingStore.isLoading
  }

  mounted () {
    window.addEventListener('load', async () => {
      await this.$delay(2000)
      LoadingStore.endLoding()
    })
  }

  @Watch('isLoading', { immediate: true, deep: true })
  isWatchLoading (next, prev) {
    let yoff = 0.0
    const sketch = function (p: P5) {
      const drawVertex = () => {
        p.push()
        p.background(51)
        p.fill(255)
        p.beginShape()
        let xoff = 0
        for (let x = 0; x <= p.windowWidth; x += 10) {
          const y = p.map(p.noise(xoff, yoff), 0, 1, 200, 300)
          p.vertex(x, y)
          xoff += 0.05
        }
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

    const myp5 = new P5(sketch, 'loading-screen')
    console.log(myp5)
    if (!next && prev) {
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
    .main-logo
        position: fixed
        z-index: 3000
        top: calc(50% - 200px)
        left: calc(50% - 130px)
        img
            height: 400px
</style>
