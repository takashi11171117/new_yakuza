<template>
  <div class="box">
    <Menu />
    <HeaderBar />
    <Modal />
    <main>
      <Video />
      <div class="main-logo">
        <img src="../assets/logo.svg" alt="ニューヤクザ">
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Modal from '@/components/Modal.vue'
import Menu from '@/components/Menu.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import Video from '@/components/Video.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Modal,
    Menu,
    HeaderBar,
    Video,
    Footer
  }
})
export default class Index extends Vue {
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
