<template>
  <div>
    <div v-if="!isShowLoadingComponent" id="loading-screen">
      <div id="noize-wave-container">
        <p id="loading-text">
          Loading
        </p>
      </div>
      <div id="load-layer1" />
      <div id="load-layer2" />
    </div>
    <div v-if="isShowMainComponent" class="box">
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
import { TweenMax, Expo } from 'gsap'

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

  get isShowLoadingComponent (): boolean {
    return LoadingStore.isShowLoadingComponent
  }

  get isShowMainComponent (): boolean {
    return LoadingStore.isShowMainComponent
  }

  mounted () {
    window.addEventListener('load', async () => {
      await this.$delay(2000)
      LoadingStore.endLoading()
    })
  }

  @Watch('isLoading', { immediate: true, deep: true })
  isWatchLoading (next: boolean, prev: boolean) {
    if (!next && prev) {
      const canvas = document.getElementById('defaultCanvas0')
      if (canvas !== null) {
        setTimeout(() => LoadingStore.switchShowMainComponent(), 150)
        TweenMax.to('#noize-wave-container', 1, {
          marginLeft: `${window.innerWidth}px`,
          ease: Expo.easeOut
        })
        TweenMax.to(canvas, 1, {
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
                LoadingStore.switchShowLoadingComponent()
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
    display: flex
    justify-content: center
    align-items: center
#loading-text
    color: black
    font-size: 1.5rem
    position: absolute
    z-index: 4001
    display: inline-block
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
