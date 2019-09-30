<template>
  <div class="box">
    <Header />
    <div class="" @clickMenuButton="clickMenuButton">
      <Modal />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Modal from '@/components/Modal.vue'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Modal,
    Header
  }
})
export default class Index extends Vue {
  private clickMenuButton (e: object) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}
</script>

<style lang="sass" scoped>
    .box
        width: 100vw
        height: 100vh
        position: fixed
        top: 0
</style>
